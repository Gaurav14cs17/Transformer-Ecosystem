# ConViT — Soft Convolutional Inductive Biases for Vision Transformers

## Overview

ConViT introduces a gated positional self-attention (GPSA) mechanism that allows attention heads to smoothly transition from hard-coded local (convolutional) patterns to learned global attention during training. This provides a soft inductive bias that initializes like a convolution but can relax to full self-attention as needed, combining the data efficiency of CNNs with the flexibility of Transformers.

## Architecture & Mechanism

ConViT modifies the standard ViT self-attention:

- **GPSA (Gated Positional Self-Attention)**: Each attention head has a learnable gating parameter `λ` that interpolates between a positional attention component (convolutional prior) and a content-based attention component:
  - `Attention = (1 - σ(λ)) · Softmax(Q K^T / √d) + σ(λ) · Softmax(v_pos)`
  - `v_pos` encodes relative positions and can represent convolution-like local patterns.
- **Initialization**: At initialization, the gating is biased toward the positional (convolutional) component, providing strong locality bias early in training.
- **Learned transition**: During training, each head can learn to reduce the positional bias and shift toward content-based attention if beneficial.
- **Hybrid design**: Early layers use GPSA; later layers use standard self-attention (SA) for global modeling.

## Key Innovations

- **Soft inductive bias**: Unlike hard-coded convolutions, the convolutional prior can be continuously relaxed, allowing the model to decide how much locality bias is needed.
- **Improved data efficiency**: Matches DeiT performance with less data by leveraging the initial convolutional bias.
- **Interpretable attention**: The gating parameter reveals which heads maintain local patterns vs. which develop global attention.
- **No distillation needed**: Achieves strong results without the knowledge distillation used in DeiT.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| ConViT: Improving Vision Transformers with Soft Convolutional Inductive Biases (d'Ascoli et al.) | 2021 | [arXiv:2103.10697](https://arxiv.org/abs/2103.10697) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
