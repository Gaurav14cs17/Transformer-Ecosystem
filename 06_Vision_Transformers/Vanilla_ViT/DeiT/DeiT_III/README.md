# DeiT III — Revenge of the ViT

## Overview

DeiT III revisits the training recipe for vanilla Vision Transformers and demonstrates that with a carefully tuned training procedure, plain ViTs can match or exceed the performance of more complex architectures (Swin, ConvNeXt) across multiple scales. It introduces a simplified yet effective training strategy called "3-Augment" that replaces heavy augmentation pipelines.

## Architecture & Mechanism

DeiT III uses the standard ViT architecture without architectural modifications:

- **Standard ViT backbone**: Patch embedding + Transformer encoder blocks + classification head.
- **3-Augment strategy**: A minimalist augmentation pipeline consisting of only three augmentations: grayscale conversion, solarization, and Gaussian blur (applied randomly).
- **Simple Random Erasing (SRE)**: A simplified version of random erasing applied after 3-Augment.
- **Binary Cross-Entropy loss**: Uses BCE loss instead of cross-entropy, treating classification as independent binary tasks per class.
- **LayerScale**: Learnable per-channel scaling applied to the output of each residual block.

## Key Innovations

- **Simpler is better**: The 3-Augment pipeline is far simpler than the complex augmentation stacks (RandAugment, Mixup, CutMix) used in DeiT/DeiT-II, yet achieves better results.
- **BCE loss**: Binary cross-entropy loss proves more effective than softmax cross-entropy, especially at larger scales.
- **Scaling results**: DeiT III-L (304M) and DeiT III-H (632M) achieve state-of-the-art results for plain ViTs on ImageNet.
- **Pre-training on ImageNet-21K**: Shows strong transfer learning with 21K pre-training followed by 1K fine-tuning.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| DeiT III: Revenge of the ViT (Touvron et al.) | 2022 | [arXiv:2204.07118](https://arxiv.org/abs/2204.07118) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
