# SD3 — Scaling Rectified Flow Transformers for High-Resolution Image Synthesis

## Overview

Stable Diffusion 3 (SD3) replaces the U-Net backbone with a novel MM-DiT (Multimodal Diffusion Transformer) architecture that processes text and image tokens in separate but interacting streams. Combined with rectified flow matching (instead of standard diffusion), SD3 achieves state-of-the-art text-to-image generation with significantly improved text rendering, prompt adherence, and visual quality.

## Architecture & Mechanism

SD3 introduces key architectural changes:

1. **MM-DiT (Multimodal DiT)**: A novel Transformer architecture with two parallel streams:
   - **Image stream**: Processes noisy latent image patch tokens.
   - **Text stream**: Processes text embeddings from three text encoders (CLIP-L, CLIP-G, T5-XXL).
   - **Joint attention**: Both streams share the same attention operation (concatenated QKV), enabling bidirectional cross-modal interaction.
   - **Separate MLPs**: Each stream has its own feed-forward network after joint attention.
2. **Rectified flow matching**: Uses a linear interpolation path between noise and data (instead of the VP/VE SDE paths), enabling straighter sampling trajectories and fewer sampling steps.
3. **Triple text encoders**: CLIP ViT-L/14 + OpenCLIP ViT-bigG/14 + T5-XXL provide complementary text understanding.
4. **QK-normalization**: RMSNorm on Q and K prevents attention entropy collapse at large model scales.

## Key Innovations

- **MM-DiT architecture**: Joint attention between text and image streams enables tight cross-modal interaction without explicit cross-attention layers.
- **Rectified flow**: Straighter sampling paths enable high-quality generation in fewer steps (20-30 vs. 50+).
- **Text rendering**: Dramatically improved ability to render text in generated images, thanks to T5 encoder and MM-DiT.
- **Scalability**: DiT-based architecture scales more predictably than U-Net architectures.
- **Open weights**: SD3 Medium released as open-source.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Scaling Rectified Flow Transformers for High-Resolution Image Synthesis (Esser et al.) | 2024 | [arXiv:2403.03206](https://arxiv.org/abs/2403.03206) |
