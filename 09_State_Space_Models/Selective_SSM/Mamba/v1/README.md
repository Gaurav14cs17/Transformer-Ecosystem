# Mamba — Linear-Time Sequence Modeling with Selective State Spaces

## Overview

Mamba introduces selective state space models (SSMs) that make the SSM parameters input-dependent, enabling the model to selectively propagate or forget information along the sequence dimension. Combined with a hardware-aware parallel scan implementation, Mamba achieves Transformer-quality language modeling with linear time complexity and constant memory per step during inference, running 3-5× faster than Transformers of equivalent size.

## Architecture & Mechanism

Mamba modifies the structured state space model (S4) with input-dependent parameters:

- **Selective SSM**: The discretization parameters `Δ`, `B`, and `C` are functions of the input `x`, computed via linear projections:
  - `Δ = softplus(Linear(x))` — controls how much to retain vs. reset the state.
  - `B = Linear(x)`, `C = Linear(x)` — input-dependent state transition matrices.
  - `A` remains fixed (initialized as HiPPO matrix).
- **Hardware-aware algorithm**: A custom CUDA kernel implements the selective scan without materializing the full state expansion:
  - Loads parameters from HBM to SRAM, performs the scan in SRAM, and writes only the output back to HBM.
  - Avoids the O(N²) memory cost of materializing intermediate states.
- **Mamba block**: Replaces the Transformer block with: Linear → Conv1D → Selective SSM → Linear (with gating).
- **No attention**: Mamba uses no attention mechanism at all.

## Key Innovations

- **Input-dependent selection**: The model can selectively focus on or ignore inputs, unlike fixed-parameter SSMs that treat all inputs equally.
- **Linear-time inference**: O(1) per-token generation (constant state size), compared to Transformer's O(L) growing KV cache.
- **3-5× faster**: Significantly faster training and inference than Transformers at equal model size.
- **No attention needed**: Achieves competitive language modeling without any attention mechanism.
- **Strong on long sequences**: Particularly effective on tasks requiring long-range reasoning (DNA modeling, audio).

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Mamba: Linear-Time Sequence Modeling with Selective State Spaces (Gu & Dao) | 2023 | [arXiv:2312.00752](https://arxiv.org/abs/2312.00752) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
