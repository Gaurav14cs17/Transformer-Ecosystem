# Hyena Hierarchy — Towards Larger Convolutional Language Models

## Overview

Hyena replaces the attention mechanism with a hierarchy of long convolutions interleaved with element-wise gating, achieving sub-quadratic O(N log N) complexity. It demonstrates that implicitly parameterized long convolutions can match attention quality on language modeling while scaling more efficiently to long sequences, offering a drop-in replacement for attention in Transformer architectures.

## Architecture & Mechanism

The Hyena operator builds on two components:

1. **Implicitly parameterized long convolutions**: Instead of storing a full convolution kernel of length L, Hyena generates the kernel using a small neural network (FFN) that maps positions to kernel values. This allows kernels of arbitrary length with O(1) parameters.
2. **Hyena hierarchy**: A recursive structure that interleaves projections, long convolutions, and element-wise gating:
   - Input `x` is projected into `N+1` vectors: one value `v` and `N` gates.
   - At each level of the hierarchy: `y = h_n * (g_n ⊙ y_{n-1})`, where `h_n` is a long convolution filter, `g_n` is a gate, and `*` is convolution.
   - The depth of the hierarchy (typically 2-3) controls expressiveness.
3. **FFT-based convolution**: Long convolutions are computed efficiently using FFT in O(N log N) time.

## Key Innovations

- **Sub-quadratic complexity**: O(N log N) via FFT-based convolution, compared to O(N²) for attention.
- **Implicit kernel parameterization**: Generates arbitrary-length kernels with a small FFN, decoupling parameter count from sequence length.
- **Data-controlled gating**: Element-wise gating provides input-dependent (data-controlled) processing similar to attention's content-based routing.
- **Drop-in replacement**: Can replace attention layers in existing Transformer architectures.
- **Competitive quality**: Matches attention-based models on language modeling benchmarks up to moderate scales.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Hyena Hierarchy: Towards Larger Convolutional Language Models (Poli et al.) | 2023 | [arXiv:2302.10866](https://arxiv.org/abs/2302.10866) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
