# Open-Sora — Open-Source Video Generation

## Overview

Open-Sora is an open-source initiative to reproduce and democratize Sora-like video generation capabilities. It implements a Diffusion Transformer architecture for text-to-video generation with support for variable resolutions, durations, and aspect ratios, providing the community with reproducible training code, model weights, and data processing pipelines.

## Architecture & Mechanism

Open-Sora implements a modular video generation pipeline:

1. **Video VAE**: A 3D causal VAE compresses video into a spatiotemporal latent space (4× temporal compression, 8× spatial compression).
2. **Spatial-Temporal DiT (STDiT)**: A Transformer backbone with factored spatial and temporal attention:
   - Spatial attention operates within each frame.
   - Temporal attention operates across frames at the same spatial position.
   - This factorization is more efficient than full 3D attention.
3. **Text conditioning**: T5-XXL encoder processes text prompts; features are injected via cross-attention and adaptive layer normalization.
4. **Rectified flow**: Uses rectified flow (linear interpolation between noise and data) instead of standard diffusion, enabling faster sampling.
5. **Multi-resolution training**: Trains on mixed resolutions and durations using masking strategies for efficient batching.

## Key Innovations

- **Full open-source**: Training code, inference code, data processing, and model weights are all publicly available.
- **Modular design**: Each component (VAE, DiT, text encoder) can be independently upgraded.
- **Efficient factored attention**: Spatial-temporal factorization reduces computational cost vs. full 3D attention.
- **Community-driven**: Active development with regular releases improving quality and capabilities.
- **Reproducible research**: Enables the research community to study and improve video generation.

## References

| **Resource** | **Year** | **Link** |
|-----------|----------|----------|
| Open-Sora (HPC-AI Tech) | 2024 | [GitHub](https://github.com/hpcaitech/Open-Sora) |
| Open-Sora Plan | 2024 | [GitHub](https://github.com/PKU-YuanGroup/Open-Sora-Plan) |
