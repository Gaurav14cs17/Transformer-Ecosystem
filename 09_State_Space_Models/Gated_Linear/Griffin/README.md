# Griffin — Mixing Gated Linear Recurrences with Local Attention

## Overview

Griffin is a hybrid architecture from Google DeepMind that combines gated linear recurrences (a simplified form of linear RNN) with local attention. It demonstrates that mixing a recurrent layer for global sequence processing with a sliding window attention for local detail captures achieves performance competitive with full Transformers while offering significantly better inference efficiency, especially on long sequences.

## Architecture & Mechanism

Griffin alternates between two types of layers:

1. **Recurrent block (Real-Gated Linear Recurrence, RGLRU)**:
   - A gated linear recurrence with diagonal state transition: `h_t = α_t ⊙ h_t-1 + (1 - α_t) ⊙ x_t`, where `α_t = σ(a_t)` is an input-dependent gate.
   - Uses real-valued (not complex) diagonal recurrence for simplicity and efficiency.
   - Provides global context with O(1) per-step cost.

2. **Local attention block**: Sliding window attention with a small window size (e.g., 1024 tokens). Provides fine-grained local modeling.

3. **Block structure**: Each Griffin block contains either an RGLRU or a local attention layer, followed by a gated MLP. The ratio is typically ~3:1 (recurrent:attention).

4. **Temporal convolution**: A small 1D convolution is applied before the recurrence for local feature extraction.

## Key Innovations

- **RGLRU**: A minimal gated linear recurrence that is simpler than Mamba's selective SSM yet achieves comparable performance.
- **Local + global**: Local attention handles fine-grained patterns; recurrence handles long-range dependencies.
- **Scaling**: Trained at up to 14B parameters, demonstrating scaling behavior comparable to Transformers.
- **Efficient inference**: O(1) per-token cost for recurrent layers; small window attention has fixed cost regardless of sequence length.
- **Matched Transformer quality**: On language modeling, Griffin matches Transformer++ baselines.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Griffin: Mixing Gated Linear Recurrences with Local Attention for Efficient Language Models (De et al.) | 2024 | [arXiv:2402.19427](https://arxiv.org/abs/2402.19427) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
