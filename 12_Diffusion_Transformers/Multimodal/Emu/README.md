# Emu — Generative Pretraining in Multimodality

## Overview

Emu (Evolved Multimodal Understanding) from Meta is a multimodal foundation model that combines generative pre-training with multimodal understanding. It uses a unified autoregressive framework to predict the next visual or text token, enabling both image understanding (VQA, captioning) and image generation from a single model.

## Architecture & Mechanism

Emu uses a multimodal autoregressive architecture:

1. **Visual tokenization**: A pre-trained EVA-CLIP ViT encodes images into visual embeddings, which are mapped to the LLM's embedding space via a Causal Transformer (C-Former).
2. **LLM backbone**: A LLaMA-based autoregressive Transformer processes interleaved visual and text tokens.
3. **Visual decoder**: For image generation, the LLM's output embeddings are fed to a visual decoder (Stable Diffusion) that generates images.
4. **Training data**: Trained on diverse multimodal data:
   - Image-text pairs (LAION-2B)
   - Interleaved image-text documents (MMC4)
   - Video-text pairs (WebVid-10M)
5. **Unified objective**: Next-token prediction over both visual and text tokens in a shared sequence.

## Key Innovations

- **Unified generation and understanding**: A single model handles both image-to-text (understanding) and text-to-image (generation) tasks.
- **Interleaved multimodal data**: Training on web-crawled interleaved data provides natural multimodal context.
- **Video understanding**: Extending to video frames provides temporal reasoning capability.
- **Visual decoder integration**: Connecting the LLM to a diffusion model enables high-quality image generation.
- **In-context learning**: Supports multimodal in-context learning with interleaved examples.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Generative Pretraining in Multimodality (Sun et al.) | 2023 | [arXiv:2307.05222](https://arxiv.org/abs/2307.05222) |
