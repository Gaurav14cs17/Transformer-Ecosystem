# Layer Normalization

## Overview

Layer Normalization (LayerNorm) normalizes activations across the feature dimension for each individual sample, independent of other samples in the batch. This makes it ideal for sequence models and Transformers, where batch statistics are unreliable due to variable sequence lengths. LayerNorm is the default normalization in virtually all Transformer architectures.

## Architecture & Mechanism

For a single input vector `x ∈ ℝ^d` at any position in the sequence:

1. **Compute per-sample statistics**: `μ = (1/d) Σ_i x_i` and `σ² = (1/d) Σ_i (x_i - μ)²`
2. **Normalize**: `x̂_i = (x_i - μ) / √(σ² + ε)`
3. **Affine transform**: `y_i = γ_i x̂_i + β_i`, where `γ, β ∈ ℝ^d` are learned element-wise parameters.

In Transformers, LayerNorm is applied either before (Pre-LN) or after (Post-LN) the sub-layer (attention or FFN).

## Key Innovations

- **Batch-independent**: Statistics are computed per sample, so there is no dependency on batch size or other samples.
- **Stable for sequences**: Works naturally with variable-length sequences and autoregressive generation.
- **No train/test discrepancy**: No running statistics to maintain; behavior is identical during training and inference.
- **Smooth optimization**: Helps stabilize gradients and enables training of deep Transformers.

## Variants in Practice

- **Pre-LN**: `x + SubLayer(LayerNorm(x))` — used in GPT-2, LLaMA, and most modern LLMs. More stable training.
- **Post-LN**: `LayerNorm(x + SubLayer(x))` — original Transformer formulation. Requires careful learning rate warmup.
- **RMSNorm**: A simplified variant that omits mean centering (used in LLaMA, Gemma).

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Layer Normalization (Ba, Kiros & Hinton) | 2016 | [arXiv:1607.06450](https://arxiv.org/abs/1607.06450) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
