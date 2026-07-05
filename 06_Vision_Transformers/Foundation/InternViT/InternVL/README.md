# InternVL — Scaling up Vision Foundation Models

## Overview

InternVL (InternViT-6B + QLLaMA) is a large-scale vision-language foundation model that scales the vision encoder to 6 billion parameters. It aligns the vision encoder with a large language model through progressive training, creating a versatile vision foundation model that excels at visual-linguistic tasks including zero-shot classification, retrieval, and multimodal dialogue.

## Architecture & Mechanism

InternVL consists of three components:

1. **InternViT-6B**: A 6-billion-parameter Vision Transformer serving as the visual encoder. Uses vanilla ViT architecture with 48 layers, 3200 hidden size, and 25 attention heads.
2. **QLLaMA**: A language middleware that bridges InternViT-6B and an LLM decoder. It uses learnable queries (similar to Q-Former in BLIP-2) to extract fixed-length visual features.
3. **Progressive alignment**: Training proceeds in stages:
   - Stage 1: Contrastive learning (CLIP-style) to align vision and language.
   - Stage 2: Generative learning with QLLaMA for visual question answering and dialogue.

## Key Innovations

- **Largest vision encoder**: InternViT-6B is one of the largest vision encoders, demonstrating that scaling the vision backbone yields continued improvements.
- **Progressive alignment**: Multi-stage training strategy effectively bridges the modality gap.
- **Versatile foundation**: A single model supports zero-shot classification, image-text retrieval, image captioning, and visual question answering.
- **Strong zero-shot**: Competitive with or superior to CLIP at larger scales on various zero-shot benchmarks.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| InternVL: Scaling up Vision Foundation Models and Aligning for Generic Visual-Linguistic Tasks (Chen et al.) | 2023 | [arXiv:2312.14238](https://arxiv.org/abs/2312.14238) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
