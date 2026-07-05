# T5 Relative Position Bias

## Overview

T5 (Text-to-Text Transfer Transformer) introduces a simplified relative position bias that adds learned scalar biases directly to the attention logits. Unlike Shaw et al.'s approach that uses learned vectors, T5 uses a single scalar per relative position bucket, shared across all heads or with per-head biases, making the scheme lightweight and effective.

## Architecture & Mechanism

The relative position bias in T5 works as follows:

- **Scalar bias**: For each attention head, a scalar bias `b(i-j)` is added to the attention logit: `a_ij = q_i · k_j + b(i-j)`
- **Logarithmic bucketing**: Relative positions are mapped to a fixed number of buckets (typically 32) using a logarithmic scheme. Small distances get individual buckets; larger distances share buckets with logarithmically increasing spans.
- **Asymmetric/directional**: Separate buckets are used for positive and negative relative positions, allowing the model to distinguish forward from backward.
- **Only in first layer (optionally)**: The bias is computed in the first layer and can optionally be shared across all layers, reducing parameters further.

## Key Innovations

- **Extreme simplicity**: Only scalar biases (not vectors) are added, minimizing parameter count and computation.
- **Logarithmic bucketing**: Captures fine-grained local position information while using coarser buckets for distant positions, enabling some length generalization.
- **No absolute encodings**: T5 uses only relative biases with no absolute positional embeddings at all.
- **Shared across layers**: Biases computed once can be broadcast to all layers.

## Limitations

- Logarithmic bucketing still imposes a maximum effective distance.
- Generalization beyond trained lengths is limited compared to continuous methods like RoPE.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer (Raffel et al.) | 2019 | [arXiv:1910.10683](https://arxiv.org/abs/1910.10683) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
