# EVA-02

## Overview

EVA-02 improves upon EVA by refining the architecture, pre-training strategy, and scaling approach. It introduces an updated ViT architecture with modern components (SwiGLU FFN, RoPE for 2D positions) and leverages an improved MIM pre-training pipeline with better CLIP teachers, achieving state-of-the-art performance across vision benchmarks with fewer parameters than EVA.

## Architecture & Mechanism

EVA-02 introduces several architectural improvements:

- **SwiGLU FFN**: Replaces the standard MLP with a SwiGLU feed-forward network, which provides smoother activations and better performance.
- **2D RoPE**: Extends Rotary Position Embeddings to 2D for image patches, replacing absolute positional embeddings.
- **Sub-LayerNorm**: Additional normalization within each sub-layer for stability.
- **MIM with improved CLIP teacher**: Uses a stronger CLIP teacher (EVA-CLIP) for generating reconstruction targets.
- **Model sizes**: EVA-02-Ti (6M), EVA-02-S (22M), EVA-02-B (86M), EVA-02-L (304M) — more efficient than EVA at each scale.

## Key Innovations

- **Modern ViT components**: SwiGLU + RoPE + Sub-LN significantly improve the ViT architecture.
- **Better CLIP teachers**: Iteratively improving the CLIP teacher (from OpenAI CLIP → EVA-CLIP) creates better MIM targets.
- **Efficient scaling**: EVA-02-L achieves comparable results to EVA (1B params) with only 304M parameters.
- **Open-source**: Fully open weights and training code.
- **Strong zero-shot via EVA-CLIP-02**: The CLIP model trained with EVA-02 backbone achieves excellent zero-shot performance.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| EVA-02: A Visual Representation for Neon Genesis (Fang et al.) | 2023 | [arXiv:2303.11331](https://arxiv.org/abs/2303.11331) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
