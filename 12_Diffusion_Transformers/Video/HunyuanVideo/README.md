# HunyuanVideo — A Systematic Framework for Large Video Generation Models

## Overview

HunyuanVideo from Tencent is a comprehensive video generation framework featuring a 13-billion-parameter Diffusion Transformer model. It generates high-quality videos with strong motion dynamics, visual quality, and text-video alignment. The model uses a "Dual-Stream to Single-Stream" Transformer architecture that processes text and video tokens in a unified framework.

## Architecture & Mechanism

HunyuanVideo introduces several architectural components:

1. **3D Causal VAE**: Compresses video into a compact latent space with spatial (8×) and temporal (4×) compression using causal 3D convolutions for temporal consistency.
2. **Dual-Stream to Single-Stream DiT**: A novel Transformer design:
   - **Dual-stream blocks (early layers)**: Text and video tokens have separate self-attention and FFN layers but interact through cross-attention, allowing each modality to maintain its representation.
   - **Single-stream blocks (later layers)**: Text and video tokens are merged into a single sequence processed by shared attention and FFN layers for tight cross-modal fusion.
3. **MLLM text encoder**: Uses a multimodal LLM as the text encoder for richer semantic understanding.
4. **Flow matching**: Uses rectified flow matching for efficient training and sampling.
5. **Unified image-video training**: Trains jointly on images and videos, treating images as single-frame videos.

## Key Innovations

- **Dual-to-single stream design**: Provides both modality-specific processing and tight cross-modal fusion.
- **13B parameters**: One of the largest open video generation models.
- **Strong motion dynamics**: Generates videos with complex, physically plausible motion.
- **MLLM text encoder**: Better text understanding than CLIP-based encoders for complex prompts.
- **Open-source**: Released as open-source with model weights.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| HunyuanVideo: A Systematic Framework For Large Video Generative Models (Kong et al.) | 2024 | [arXiv:2412.03603](https://arxiv.org/abs/2412.03603) |
