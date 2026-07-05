# ConvNeXt — A ConvNet for the 2020s

## Overview

ConvNeXt demonstrates that a pure convolutional network, when modernized with design elements borrowed from Vision Transformers, can match or exceed the performance of Swin Transformer across scales. Starting from a standard ResNet-50, the authors incrementally adopt Transformer-inspired design choices to construct a competitive, purely convolutional architecture.

## Architecture & Mechanism

ConvNeXt modernizes ResNet through a series of design changes:

- **Macro design**: Adopts Swin-like stage compute ratios (3:3:9:3 → 3:3:27:3) and "patchify" stem (4×4 convolution with stride 4).
- **Large kernels**: Uses 7×7 depthwise convolutions (moved before the 1×1 pointwise layers), inspired by the large receptive field of self-attention.
- **Inverted bottleneck**: Widens the hidden dimension of the block (4× expansion, like Transformer FFN) while keeping the input/output channels narrow.
- **Fewer activation functions**: Uses a single GELU activation per block (instead of ReLU after every conv), similar to Transformer blocks.
- **Fewer normalization layers**: Uses a single LayerNorm per block (instead of BatchNorm after every conv).
- **Separate downsampling**: Uses explicit 2×2 conv with stride 2 for downsampling between stages, with normalization layers for stability.

## Key Innovations

- **Pure ConvNet competitiveness**: Proves that the Transformer architecture is not inherently superior — the training recipe and design details matter more.
- **Systematic modernization**: Each design change is isolated and evaluated, providing a clear roadmap for ConvNet improvement.
- **Simplicity**: No attention mechanism, no shifted windows — just standard convolutions.
- **Scalability**: ConvNeXt-XL matches Swin-L on ImageNet-22K pre-training with similar FLOPs.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| A ConvNet for the 2020s (Liu et al.) | 2022 | [arXiv:2201.03545](https://arxiv.org/abs/2201.03545) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
