# CoAtNet — Marrying Convolution and Attention for All Data Sizes

## Overview

CoAtNet systematically studies how to optimally combine convolution and attention operations within a single network. Through principled analysis of their complementary strengths — convolution for local feature extraction and generalization, attention for global modeling and capacity — CoAtNet arrives at a hybrid architecture that achieves state-of-the-art results across varying data regimes.

## Architecture & Mechanism

CoAtNet uses a five-stage design that transitions from convolution to attention:

- **Stages S0-S1 (Convolution)**: MBConv (mobile inverted bottleneck) blocks handle early feature extraction, leveraging the strong inductive bias of convolutions for local pattern recognition.
- **Stages S2-S3 (Hybrid/Attention)**: Transition to Transformer blocks or a hybrid of relative-attention + MBConv. The choice depends on the model variant.
- **Stage S4 (Attention)**: Pure Transformer blocks for global reasoning.
- **Relative attention**: Uses depthwise convolution-based relative attention that combines the benefits of convolution (translation equivariance) and self-attention (input-adaptive weighting).
- **Pre-normalization**: All blocks use Pre-LN for stable training.

## Key Innovations

- **Systematic C-C-T-T design**: Principled analysis shows that convolution early + attention late is optimal (not the reverse).
- **Relative attention unification**: Demonstrates that relative attention naturally combines depthwise convolution and content-based attention.
- **Scalability**: CoAtNet-7 (2.4B parameters) achieves 90.88% on ImageNet with JFT pre-training.
- **Data efficiency**: Outperforms both pure ViTs and pure CNNs, especially with limited training data.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| CoAtNet: Marrying Convolution and Attention for All Data Sizes (Dai et al.) | 2021 | [arXiv:2106.04803](https://arxiv.org/abs/2106.04803) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
