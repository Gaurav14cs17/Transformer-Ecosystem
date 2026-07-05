# CogVideo — Large-scale Pretraining for Text-to-Video Generation via Transformers

## Overview

CogVideo is one of the earliest large-scale text-to-video generation models, built on top of the CogView2 image generation framework. It uses a multi-frame-rate hierarchical training strategy to generate videos from text descriptions, addressing the challenges of temporal coherence and computational cost in video generation with autoregressive Transformers.

## Architecture & Mechanism

CogVideo extends CogView2's autoregressive generation to video:

1. **Tokenization**: Video frames are tokenized into discrete visual tokens using a VQVAE, similar to CogView2's image tokenization.
2. **Autoregressive Transformer**: A large Transformer generates video tokens frame-by-frame, conditioned on text tokens (encoded via an ICE text encoder).
3. **Multi-frame-rate hierarchy**: Training occurs at multiple temporal resolutions:
   - First generates keyframes at low frame rate.
   - Then generates intermediate frames to increase temporal resolution.
   - This coarse-to-fine approach improves temporal coherence.
4. **Dual-channel attention**: Separate attention computations for spatial (within-frame) and temporal (across-frame) dimensions.
5. **Inherited image generation**: Leverages CogView2's pre-trained image generation capability as initialization.

## Key Innovations

- **Multi-frame-rate hierarchy**: Coarse-to-fine temporal generation improves long-range coherence.
- **CogView2 transfer**: Pre-trained image generation knowledge transfers effectively to video.
- **Large-scale training**: One of the first models to demonstrate text-to-video generation at scale (9.4B parameters).
- **Dual-channel attention**: Efficient factorization of spatial and temporal attention.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| CogVideo: Large-scale Pretraining for Text-to-Video Generation via Transformers (Hong et al.) | 2022 | [arXiv:2205.15868](https://arxiv.org/abs/2205.15868) |
