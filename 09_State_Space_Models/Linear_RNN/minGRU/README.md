# minGRU — Were RNNs All We Needed?

## Overview

minGRU is a minimal gated recurrent unit that strips the GRU down to its essential components, demonstrating that a radically simplified RNN can be parallelized during training (like Transformers) while maintaining competitive performance. By removing the hidden state dependency from the gate computation, minGRU enables parallel scan-based training, achieving Transformer-like training speed with RNN-like O(1) inference.

## Architecture & Mechanism

minGRU simplifies the standard GRU dramatically:

- **Standard GRU**: `z_t = σ(W_z [h_{t-1}, x_t])`, `h_t = (1-z_t) ⊙ h_{t-1} + z_t ⊙ tanh(W_h [r_t ⊙ h_{t-1}, x_t])`
- **minGRU**: 
  - `z_t = σ(W_z x_t)` — gate depends only on input, NOT on hidden state.
  - `h̃_t = W_h x_t` — candidate is a simple linear function of input (no tanh, no hidden state dependency).
  - `h_t = (1 - z_t) ⊙ h_{t-1} + z_t ⊙ h̃_t` — linear interpolation.
- **Key simplification**: Removing `h_{t-1}` from the gate computation makes the recurrence a gated linear recurrence, parallelizable via associative scan.
- **Training**: Uses the parallel prefix sum (scan) algorithm for O(N log N) parallel training.
- **Inference**: Standard sequential recurrence for O(1) per-step generation.

## Key Innovations

- **Extreme minimalism**: Only two simple equations define the entire model — arguably the simplest viable sequence model.
- **Parallel training**: The gate being independent of hidden state enables parallel scan, matching Transformer training throughput.
- **Competitive performance**: Surprisingly strong results on language modeling and reinforcement learning tasks.
- **Theoretical insight**: Demonstrates that the essential ingredient for effective sequence modeling is input-dependent gating, not complex state interactions.
- **minLSTM companion**: A similarly simplified LSTM variant is also proposed, demonstrating the generality of the approach.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Were RNNs All We Needed? (Feng et al.) | 2024 | [arXiv:2410.01201](https://arxiv.org/abs/2410.01201) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
