# Music Transformer — Relative Attention for Music Generation

## Overview

The Music Transformer adapts relative self-attention for long-form music generation. It addresses the memory bottleneck of naive relative attention implementations by introducing an efficient algorithm ("Skew") that reduces the space complexity from O(L²D) to O(L²), enabling the generation of expressive musical performances with long-range structure.

## Architecture & Mechanism

Music is represented as a sequence of MIDI-like events (note on/off, velocity, time shift). The model applies relative attention following Shaw et al., but with a critical efficiency improvement:

- **Relative logits**: Attention logits include a term `Q · R_{i-j}^T` where `R` is a relative position embedding.
- **Skew operation**: Instead of materializing a full (L × L × D) tensor of relative embeddings, the method reshapes and skews the `QR^T` product matrix to align relative indices, reducing memory from O(L²D) to O(L²).
- **Decoder-only architecture**: Uses masked (causal) self-attention for autoregressive music generation.

## Key Innovations

- **Efficient relative attention**: The "Skew" algorithm makes relative attention practical for long sequences (2048+ tokens) without prohibitive memory costs.
- **Long-range musical structure**: Captures repeating motifs, phrases, and harmonic progressions over hundreds of time steps.
- **Expressive performance generation**: Models dynamics (velocity) and timing nuances of human piano performance.
- **No domain-specific inductive biases**: Achieves strong results with a general-purpose Transformer architecture.

## Limitations

- Still quadratic in time complexity (O(L²)) — just reduces the constant factor and memory usage.
- Limited to symbolic music (MIDI); does not directly model audio waveforms.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Music Transformer: Generating Music with Long-Term Structure (Huang et al.) | 2018 | [arXiv:1809.04281](https://arxiv.org/abs/1809.04281) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
