# xPos — Extrapolatable Position Embedding

## Overview

xPos extends Rotary Position Embedding (RoPE) with an exponential decay factor that improves length extrapolation. Standard RoPE struggles when sequences exceed the training-time context length; xPos addresses this by introducing a resolution-dependent scaling that stabilizes attention scores at unseen positions.

## Architecture & Mechanism

xPos modifies RoPE by adding an exponential decay term to the rotation:

- **Query transformation**: `q_m = (R_m ⊙ γ^m) · q`, where `γ` is a per-dimension decay base.
- **Key transformation**: `k_n = (R_n ⊙ γ^{-n}) · k`, using the inverse decay.
- **Net effect on attention**: The dot product becomes `q^T R_{n-m} k · γ^{-(n-m)}`, introducing an exponential decay in relative distance.
- **Per-dimension decay**: Different dimensions use different decay rates, with higher-frequency dimensions decaying faster.

## Key Innovations

- **Length extrapolation**: The exponential decay dampens attention scores at extreme relative distances, preventing instability on longer-than-trained sequences.
- **Blockwise causal attention**: The paper demonstrates compatibility with efficient blockwise attention implementations.
- **Minimal overhead**: Only adds element-wise multiplications; negligible compute and zero extra parameters.
- **Smooth degradation**: Performance degrades gracefully rather than catastrophically when extrapolating beyond training length.

## Limitations

- The decay factor introduces a bias toward local attention, which may hurt tasks requiring uniform long-range attention.
- Requires careful tuning of the decay base for optimal performance.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| A Length-Extrapolatable Transformer (Sun et al.) | 2022 | [arXiv:2212.10554](https://arxiv.org/abs/2212.10554) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
