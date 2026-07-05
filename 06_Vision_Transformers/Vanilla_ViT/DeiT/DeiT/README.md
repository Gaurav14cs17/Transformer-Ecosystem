# DeiT — Data-efficient Image Transformers

## Overview

DeiT (Data-efficient Image Transformers) demonstrates that Vision Transformers can be trained effectively on ImageNet-1K alone (without large-scale pre-training on JFT-300M) by using strong data augmentation, regularization, and a novel distillation strategy. It introduces a distillation token that enables the ViT to learn from a CNN teacher, combining the strengths of both architectures.

## Architecture & Mechanism

DeiT follows the standard ViT architecture with one key addition:

- **Patch embedding**: Image is divided into 16×16 patches, linearly projected to embeddings.
- **CLS token**: A learnable class token is prepended for classification.
- **Distillation token**: A second learnable token is appended, trained to match the output of a CNN teacher (e.g., RegNet) via hard or soft distillation.
- **Transformer encoder**: Standard multi-head self-attention and FFN blocks.
- **Dual classification heads**: At inference, predictions from both the CLS token and distillation token are averaged.

## Key Innovations

- **No large-scale pre-training needed**: Achieves competitive ImageNet accuracy with only ImageNet-1K training data.
- **Distillation token**: A dedicated token learns from a CNN teacher, providing complementary inductive biases without modifying the architecture.
- **Hard distillation**: Using the teacher's hard labels (argmax) outperforms soft distillation (KL divergence on logits).
- **Training recipe**: Extensive use of RandAugment, Mixup, CutMix, random erasing, repeated augmentation, and stochastic depth.
- **Model variants**: DeiT-Ti (5M), DeiT-S (22M), DeiT-B (86M) parameters.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Training data-efficient image transformers & distillation through attention (Touvron et al.) | 2020 | [arXiv:2012.12877](https://arxiv.org/abs/2012.12877) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
