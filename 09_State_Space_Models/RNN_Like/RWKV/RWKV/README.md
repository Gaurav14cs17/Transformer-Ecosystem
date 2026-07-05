# RWKV — Reinventing RNNs for the Transformer Era

## Overview

RWKV (Receptance Weighted Key Value) is a novel architecture that combines the parallelizable training of Transformers with the efficient O(1) inference of RNNs. It reformulates attention as a linear recurrence using a WKV (Weighted Key-Value) mechanism with time-dependent decay, achieving Transformer-level performance on language modeling while enabling constant-memory, constant-time per-token generation.

## Architecture & Mechanism

RWKV replaces self-attention with two novel modules:

1. **Time-mixing (replaces attention)**:
   - **Receptance (R)**: A gating vector computed from the current and previous token.
   - **Key (K)** and **Value (V)**: Similar to attention K/V but computed from interpolated current/previous tokens.
   - **WKV mechanism**: `wkv_t = Σ_{i=1}^{t-1} e^{-(t-1-i)w+k_i} v_i + e^{u+k_t} v_t`, where `w` is a learned per-channel decay and `u` is a bonus for the current token.
   - **Output**: `o_t = σ(r_t) ⊙ WKV_t` (receptance gates the WKV output).
   - This can be computed as a recurrence: `s_t = e^{-w} s_{t-1} + e^{k_t} v_t`.

2. **Channel-mixing (replaces FFN)**: A gated linear transformation with similar token-shifting interpolation.

## Key Innovations

- **Transformer-quality, RNN-efficiency**: Matches Transformer language modeling performance with O(1) per-token inference cost.
- **Linear complexity training**: Can be parallelized via a cumulative sum formulation for efficient training.
- **Token shifting**: Simple linear interpolation between current and previous token representations provides temporal context.
- **Scalable**: RWKV models have been trained at up to 14B parameters, demonstrating scaling behavior similar to Transformers.
- **Open source**: Fully open-source with active community development.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| RWKV: Reinventing RNNs for the Transformer Era (Peng et al.) | 2023 | [arXiv:2305.13048](https://arxiv.org/abs/2305.13048) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
