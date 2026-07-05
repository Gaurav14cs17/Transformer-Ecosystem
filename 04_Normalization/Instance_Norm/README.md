# Instance Normalization

## Overview

Instance Normalization (InstanceNorm) normalizes each feature map (channel) of each sample independently, computing statistics over the spatial dimensions only. Originally developed for neural style transfer, it removes instance-specific contrast information, which is beneficial for style-related tasks but has also found use in generative models and some vision architectures.

## Architecture & Mechanism

For an input feature map `x ∈ ℝ^(C × H × W)` for a single sample:

1. **Per-channel, per-instance statistics**: For each channel `c`, compute `μ_c = (1/HW) Σ_{h,w} x_{c,h,w}` and `σ²_c = (1/HW) Σ_{h,w} (x_{c,h,w} - μ_c)²`
2. **Normalize**: `x̂_{c,h,w} = (x_{c,h,w} - μ_c) / √(σ²_c + ε)`
3. **Affine transform**: `y_{c,h,w} = γ_c x̂_{c,h,w} + β_c`

Unlike BatchNorm (which averages over batch and spatial) or LayerNorm (which averages over all channels), InstanceNorm averages only over spatial dimensions for each channel independently.

## Key Innovations

- **Style normalization**: By normalizing each channel's statistics, InstanceNorm effectively removes style information (contrast, brightness), making it ideal for style transfer.
- **Batch-independent**: Like LayerNorm, it does not depend on batch size.
- **Fast convergence for generative tasks**: Enables faster and more stable training for GANs and style transfer networks.
- **Conditional variants**: Adaptive Instance Normalization (AdaIN) modulates `γ` and `β` based on style input, enabling arbitrary style transfer.

## Limitations

- Removes useful discriminative information in classification tasks, limiting its use in recognition models.
- Not commonly used in Transformers, which favor LayerNorm or RMSNorm.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Instance Normalization: The Missing Ingredient for Fast Stylization (Ulyanov et al.) | 2016 | [arXiv:1607.08022](https://arxiv.org/abs/1607.08022) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
