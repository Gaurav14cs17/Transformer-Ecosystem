# HGRN — Hierarchically Gated Recurrent Neural Network

## Overview

HGRN (Hierarchically Gated Recurrent Neural Network) introduces a hierarchical gating mechanism that allows different layers of the recurrent network to operate at different temporal scales. Lower layers capture fast, fine-grained patterns with rapid forget gates, while higher layers maintain slow, coarse-grained context with persistent memory, creating a natural multi-resolution temporal hierarchy.

## Architecture & Mechanism

HGRN modifies gated linear recurrence with hierarchical forget gates:

1. **Gated linear recurrence**: Each layer uses: `h_t = f_t ⊙ h_{t-1} + i_t ⊙ x_t`, where `f_t` is the forget gate and `i_t` is the input gate.
2. **Hierarchical gating**: The forget gate at layer `l` is computed from both the input and the lower layer's forget gate:
   - `f_t^l = σ(W_f^l x_t + lower_gate_signal)` — lower layers' gate values influence higher layers.
   - This creates a hierarchy where lower layers have smaller forget gates (forget faster) and higher layers have larger forget gates (remember longer).
3. **No explicit position encoding**: The gated recurrence inherently provides position-dependent processing.
4. **Parallel training**: Uses the log-space parallel scan algorithm for efficient GPU training.

## Key Innovations

- **Hierarchical temporal resolution**: Different layers automatically specialize in different time scales, similar to how CNNs learn hierarchical spatial features.
- **Cross-layer gate coupling**: Lower layers' gating signals influence upper layers, creating coordinated multi-scale processing.
- **Simple and effective**: Achieves strong performance with a minimal recurrent design, competitive with more complex models like Mamba on moderate-scale language modeling.
- **Efficient training and inference**: Parallel scan for training; O(1) recurrent inference.
- **Token mixing**: Combines the gated recurrence (temporal mixing) with standard MLPs (channel mixing).

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Hierarchically Gated Recurrent Neural Network for Sequence Modeling (Qin et al.) | 2024 | [arXiv:2311.04823](https://arxiv.org/abs/2311.04823) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
