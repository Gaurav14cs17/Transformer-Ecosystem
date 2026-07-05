# DeepNorm

## Overview

DeepNorm is a normalization strategy designed to enable stable training of extremely deep Transformers with 1000+ layers. It combines a modified Post-LN residual connection with a theoretically-grounded initialization scheme, preventing gradient explosion and enabling the training of models far deeper than previously possible.

## Architecture & Mechanism

DeepNorm modifies the standard Post-LN Transformer residual connection:

- **Standard Post-LN**: `x_{l+1} = LayerNorm(x_l + F(x_l))`
- **DeepNorm**: `x_{l+1} = LayerNorm(α · x_l + F(x_l))` with special initialization.

Where:
- **α > 1**: A constant scaling factor for the residual connection, derived from the depth `N`. For a model with `N` layers, `α = (2N)^{1/4}` (encoder) or `α = (8N)^{1/4}` (decoder).
- **Initialization scaling**: Weight matrices in the sub-layer `F` are scaled down by `β = (8N)^{-1/4}` to prevent output explosion.
- The combination of upscaled residuals and downscaled sub-layer outputs maintains gradient norms across depth.

## Key Innovations

- **1000+ layer training**: Successfully trains Transformers with 1000 layers (vs. ~100 layers with Pre-LN) without instability.
- **Theoretical foundation**: The scaling constants are derived from bounding the model update magnitude, not heuristically tuned.
- **Better than Pre-LN**: Avoids the representation collapse issue of Pre-LN (where deeper layers contribute less) while matching its training stability.
- **Simple implementation**: Only requires changing the residual scaling factor and initialization — a minimal code change.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| DeepNet: Scaling Transformers to 1,000 Layers (Wang et al.) | 2022 | [arXiv:2203.00555](https://arxiv.org/abs/2203.00555) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
