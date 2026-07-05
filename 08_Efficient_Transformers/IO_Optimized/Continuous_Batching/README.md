# Continuous Batching — Iteration-Level Scheduling for LLM Serving

## Overview

Continuous batching (also called iteration-level scheduling or in-flight batching) is a serving optimization that allows new requests to enter a batch and completed requests to leave at every decoding iteration, rather than waiting for the entire batch to finish. This dramatically improves GPU utilization and throughput in LLM serving, where different requests may have vastly different output lengths.

## Architecture & Mechanism

Continuous batching replaces static batching with dynamic, per-iteration scheduling:

- **Static batching (baseline)**: A batch of requests is formed, and all requests run until the longest one finishes. Shorter requests waste GPU cycles while padding.
- **Continuous batching**: At each decoding step:
  1. Check if any request in the batch has completed (generated EOS or hit max length).
  2. Remove completed requests from the batch.
  3. Insert waiting requests from the queue into the freed batch slots.
  4. Execute one forward pass with the current batch.
- **Prefill-decode separation**: New requests undergo a prefill phase (processing the full prompt), while ongoing requests are in the decode phase (generating one token at a time). These can be interleaved or scheduled separately.
- **Memory management**: Combined with PagedAttention for efficient KV cache allocation as batch composition changes dynamically.

## Key Innovations

- **Higher GPU utilization**: No wasted compute on padding; the GPU is always working on active tokens.
- **Lower latency**: Short requests complete as soon as they finish, rather than waiting for the longest request.
- **Higher throughput**: 2-5× throughput improvement over static batching in production settings.
- **Queue management**: Integration with priority queues, preemption, and SLA-aware scheduling.

## Implementations

| **System** | **Year** | **Link** |
|-----------|----------|----------|
| Orca: A Distributed Serving System for Transformer-Based Generative Models (Yu et al.) | 2022 | [OSDI 2022](https://www.usenix.org/conference/osdi22/presentation/yu) |
| vLLM (integrates continuous batching + PagedAttention) | 2023 | [arXiv:2309.06180](https://arxiv.org/abs/2309.06180) |
| TensorRT-LLM (NVIDIA) | 2023 | [GitHub](https://github.com/NVIDIA/TensorRT-LLM) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
