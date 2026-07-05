# Hawk — A Simple Gated Linear Recurrence Model

## Overview

Hawk is a pure recurrent model from Google DeepMind (introduced alongside Griffin) that uses only gated linear recurrences without any attention layers. It serves as a simpler baseline that demonstrates the power of well-designed linear recurrences for language modeling, achieving surprisingly strong performance despite having no attention mechanism at all.

## Architecture & Mechanism

Hawk uses a uniform architecture of recurrent blocks:

1. **Real-Gated Linear Recurrence (RGLRU)**: Same recurrence as Griffin:
   - `h_t = α_t ⊙ h_{t-1} + (1 - α_t) ⊙ x_t`
   - `α_t = σ(a · x_t)` — input-dependent gate controlling how much state to retain.
   - Diagonal state matrix means each state dimension evolves independently.
2. **Block structure**: Each Hawk block contains:
   - Temporal convolution (1D causal conv for local features).
   - RGLRU layer for global recurrence.
   - Gated MLP for channel mixing.
3. **No attention at all**: Unlike Griffin, Hawk is purely recurrent with no attention layers.
4. **Training**: Parallelized via the associative scan (parallel prefix sum) algorithm.

## Key Innovations

- **Pure recurrence baseline**: Demonstrates how far a simple gated linear recurrence can go without any attention.
- **Minimal design**: The RGLRU is one of the simplest possible gated recurrences — real-valued, diagonal, with input-dependent gating.
- **Competitive at small scale**: At 1B-3B parameters, Hawk is competitive with attention-based models on many benchmarks.
- **Efficient inference**: O(1) memory and compute per token — ideal for long-sequence generation.
- **Reveals attention's role**: By comparison with Griffin, Hawk helps isolate what attention specifically contributes (primarily in-context recall tasks).

## Limitations

- Falls behind Transformers on tasks requiring strong in-context learning or associative recall.
- Larger scale (7B+) shows a growing gap compared to attention-based models on challenging reasoning tasks.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Griffin: Mixing Gated Linear Recurrences with Local Attention for Efficient Language Models (De et al.) | 2024 | [arXiv:2402.19427](https://arxiv.org/abs/2402.19427) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
