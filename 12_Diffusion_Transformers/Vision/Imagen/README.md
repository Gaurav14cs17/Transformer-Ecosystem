# Imagen — Photorealistic Text-to-Image Diffusion Models

## Overview

Imagen from Google demonstrates that scaling up the text encoder (using a frozen T5-XXL language model) is more effective for text-to-image generation quality than scaling the image diffusion model. It achieves unprecedented photorealism and text-image alignment through a cascade of diffusion models, setting a new standard for text-to-image generation quality.

## Architecture & Mechanism

Imagen uses a cascaded diffusion pipeline:

1. **Text encoder**: A frozen T5-XXL (4.6B parameters) encodes text prompts into embeddings. These are NOT CLIP embeddings — Imagen uses a pure text model, showing that language understanding matters more than vision-language alignment for generation.
2. **Base diffusion model**: A U-Net diffusion model generates 64×64 images conditioned on T5 embeddings via cross-attention.
3. **Super-resolution model 1**: A diffusion model upsamples from 64×64 → 256×256, conditioned on the text embeddings and the low-resolution image.
4. **Super-resolution model 2**: A second diffusion model upsamples from 256×256 → 1024×1024.
5. **Classifier-free guidance**: All models use classifier-free guidance with high guidance scales for improved text alignment.
6. **Dynamic thresholding**: A novel thresholding technique for the diffusion sampling process that prevents oversaturation at high guidance scales.

## Key Innovations

- **Text encoder scaling**: Demonstrates that a larger, better text encoder improves image quality more than a larger diffusion model.
- **Frozen T5-XXL**: A pure language model (not CLIP) provides richer text understanding.
- **Dynamic thresholding**: Enables high classifier-free guidance scales without color saturation artifacts.
- **DrawBench**: Introduces a comprehensive benchmark for evaluating text-to-image models.
- **Photorealism**: Achieves a new FID record on COCO and strong human preference scores.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Photorealistic Text-to-Image Diffusion Models with Deep Language Understanding (Saharia et al.) | 2022 | [arXiv:2205.11487](https://arxiv.org/abs/2205.11487) |
