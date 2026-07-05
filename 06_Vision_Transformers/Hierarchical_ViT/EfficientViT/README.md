# EfficientViT

## Overview

EfficientViT is designed for high-speed inference on edge devices by replacing the computationally expensive multi-head self-attention (MHSA) with a lightweight multi-scale linear attention module. It achieves a strong trade-off between accuracy and latency, running significantly faster than prior efficient ViTs (MobileViT, EfficientFormer) on mobile hardware while maintaining competitive ImageNet accuracy.

## Architecture & Mechanism

EfficientViT uses a hierarchical architecture optimized for hardware efficiency:

- **Sandwich layout**: Each stage arranges blocks as: FFN → Attention → FFN, with more FFN blocks than attention blocks (since FFN is cheaper but benefits from depth).
- **Cascaded group attention (CGA)**: Instead of standard MHSA, different attention heads receive different input feature splits, and each head's output is cascaded to the next head. This increases diversity and reduces redundancy across heads.
- **Multi-scale tokens**: A lightweight module aggregates tokens at multiple scales via depth-wise convolutions with different kernel sizes before attention, enriching local context.
- **BN + ReLU over LN + GELU**: Uses hardware-friendly BatchNorm and ReLU instead of LayerNorm and GELU for better latency on mobile devices.

## Key Innovations

- **Hardware-aware design**: Every component is chosen to maximize throughput on real hardware (GPU, mobile CPU).
- **Cascaded group attention**: Reduces computation while improving head diversity.
- **Multi-scale local context**: Depth-wise convolutions at multiple scales enrich attention inputs cheaply.
- **Memory-efficient**: Significantly lower memory footprint compared to standard ViTs.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| EfficientViT: Memory Efficient Vision Transformer with Cascaded Group Attention (Liu et al.) | 2023 | [arXiv:2305.07027](https://arxiv.org/abs/2305.07027) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
