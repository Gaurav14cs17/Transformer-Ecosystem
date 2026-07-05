# Ring Attention — Blockwise Parallel Transformers for Arbitrary Long Sequences

## Overview

Ring Attention distributes self-attention computation across multiple GPUs in a ring topology, where each device holds a block of the sequence and communicates key-value blocks to neighboring devices in a circular fashion. By overlapping communication with computation, Ring Attention enables training and inference on sequences that are virtually unlimited in length, bounded only by the number of available devices.

## Architecture & Mechanism

Ring Attention organizes computation as follows:

1. **Sequence partitioning**: The input sequence of length `L` is divided into `P` blocks, one per device, each of size `L/P`.
2. **Ring communication**: Devices are arranged in a logical ring. In each step, each device:
   - Computes attention between its local query block and the currently held key-value block.
   - Simultaneously sends its key-value block to the next device and receives a new key-value block from the previous device.
3. **Online softmax**: Uses the blockwise parallel attention algorithm (from FlashAttention) to incrementally compute the correct softmax normalization as new KV blocks arrive.
4. **P steps**: After `P` communication steps, each device has computed attention over all key-value blocks.
5. **Overlap**: Communication is fully overlapped with computation when the compute time per block exceeds the transfer time.

## Key Innovations

- **Near-infinite context**: Context length scales linearly with the number of devices — 1M+ tokens are practical.
- **Communication-computation overlap**: Ring topology enables full overlap, achieving near-linear scaling.
- **Memory efficient**: Each device only stores its local QKV block plus one additional KV block in transit.
- **Compatible with FlashAttention**: Uses blockwise attention algorithms for numerically stable, memory-efficient local computation.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Ring Attention with Blockwise Transformers for Near-Infinite Context (Liu et al.) | 2023 | [arXiv:2310.01889](https://arxiv.org/abs/2310.01889) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
