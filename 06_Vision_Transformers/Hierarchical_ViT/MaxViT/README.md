# MaxViT — Multi-Axis Vision Transformer

## Overview

MaxViT introduces a multi-axis attention mechanism that decomposes global attention into blocked local attention and dilated global attention, applied sequentially within each block. Combined with MBConv (Mobile inverted bottleneck convolution) layers, MaxViT achieves both local and global receptive fields at every stage with linear complexity, serving as a versatile backbone for classification, detection, generation, and more.

## Architecture & Mechanism

Each MaxViT block consists of four components in sequence:

1. **MBConv**: Mobile inverted bottleneck convolution (from EfficientNet) provides local feature extraction with squeeze-and-excitation attention.
2. **Block Attention**: Standard window-based local self-attention within non-overlapping spatial windows (e.g., 7×7).
3. **Grid Attention**: Dilated (sparse) global attention — tokens at the same position within each window are grouped across all windows, providing global context with the same window size.
4. **FFN**: Feed-forward network after each attention type.

The block + grid attention combination ensures that every token has a global receptive field within a single MaxViT block.

## Key Innovations

- **Multi-axis attention**: Combining block (local) and grid (global dilated) attention provides both fine-grained local and coarse-grained global modeling in every block.
- **Linear complexity**: Both block and grid attention operate on fixed-size groups, achieving O(n) complexity overall.
- **Hybrid CNN-Transformer**: MBConv provides strong local inductive biases complementing the attention layers.
- **Universal backbone**: Strong results across ImageNet (88.7%), COCO detection, ADE20K segmentation, and image generation.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| MaxViT: Multi-Axis Vision Transformer (Tu et al.) | 2022 | [arXiv:2204.01697](https://arxiv.org/abs/2204.01697) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
