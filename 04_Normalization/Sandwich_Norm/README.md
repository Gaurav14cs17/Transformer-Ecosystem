# Sandwich LayerNorm

## Overview

Sandwich LayerNorm (Sandwich-LN) applies LayerNorm both before and after each sub-layer (attention or FFN), creating a "sandwich" of normalization. Introduced in the CogView paper for training large-scale text-to-image models, it addresses training instability caused by value explosion in attention logits and hidden states, which is particularly problematic in high-resolution generation tasks.

## Architecture & Mechanism

For a sub-layer function `F` (attention or FFN):

- **Standard Pre-LN**: `x + F(LayerNorm(x))`
- **Sandwich-LN**: `x + LayerNorm(F(LayerNorm(x)))`

The additional LayerNorm after the sub-layer output (and before the residual addition) ensures that:
1. The input to the sub-layer is normalized (inner LN — standard Pre-LN).
2. The output of the sub-layer is also normalized before being added to the residual stream (outer LN — the "sandwich" addition).

## Key Innovations

- **Prevents value explosion**: The outer LayerNorm clamps the magnitude of sub-layer outputs, preventing cascading growth through residual connections.
- **Stable large-scale training**: Enables stable training of large vision-language models (4B parameters) without gradient clipping or loss scaling tricks.
- **Drop-in modification**: Simple architectural change — just add one extra LayerNorm per sub-layer.
- **Complementary to other techniques**: Can be combined with precision-aware training and other stability methods.

## Limitations

- Slightly increased computation and memory from the additional normalization layers.
- The extra normalization may constrain the model's representational capacity in some cases.
- Less commonly adopted outside of vision-language generation models.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| CogView: Mastering Text-to-Image Generation via Transformers (Ding et al.) | 2021 | [arXiv:2105.13290](https://arxiv.org/abs/2105.13290) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
