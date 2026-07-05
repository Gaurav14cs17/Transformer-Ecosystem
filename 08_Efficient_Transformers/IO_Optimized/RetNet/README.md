# RetNet — Retentive Network

## Overview

RetNet (Retentive Network) introduces a retention mechanism that supports three computation paradigms: parallel (like Transformer), recurrent (like RNN), and chunkwise recurrent (hybrid). This "impossible triangle" of training parallelism, low-cost inference, and strong performance is achieved through a mathematically equivalent formulation that connects multi-scale exponential decay with attention-like computation.

## Architecture & Mechanism

RetNet replaces multi-head attention with multi-scale retention:

- **Retention mechanism**: Combines a data-dependent (content-based) term with an exponential decay based on relative position:
  - `Retention(X) = (QK^T ⊙ D) V`, where `D_ij = γ^(i-j)` for `i ≥ j` (causal decay matrix).
  - `γ` is a per-head decay factor, creating multi-scale retention across heads.
- **Three computation modes**:
  - **Parallel**: Compute the full `(QK^T ⊙ D) V` matrix — O(L²) like Transformers, efficient for training.
  - **Recurrent**: Maintain a state `S_n = γ S_{n-1} + k_n^T v_n` and compute `o_n = q_n S_n` — O(1) per step, efficient for inference.
  - **Chunkwise**: Divide into chunks, use parallel within chunks and recurrent between chunks — best of both.
- **Architecture**: Stack retention layers with FFN layers (similar to Transformer blocks).

## Key Innovations

- **Triple paradigm**: A single model supports parallel training, recurrent inference, and chunkwise computation.
- **O(1) inference cost**: Recurrent mode requires constant memory and compute per token, unlike Transformers' growing KV cache.
- **Multi-scale decay**: Different heads use different decay rates, capturing dependencies at multiple time scales.
- **Competitive with Transformers**: Matches Transformer performance on language modeling while offering significant inference speedups.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Retentive Network: A Successor to Transformer for Large Language Models (Sun et al.) | 2023 | [arXiv:2307.08621](https://arxiv.org/abs/2307.08621) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
