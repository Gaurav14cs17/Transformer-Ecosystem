# Genie — Generative Interactive Environments

## Overview

Genie from Google DeepMind is a foundation world model that generates interactive, playable 2D environments from a single image, text description, or sketch. Trained on 200,000+ hours of unlabeled internet gaming videos, Genie learns a latent action space that enables frame-by-frame interactive generation, where each generated frame is conditioned on the previous frame and a user action.

## Architecture & Mechanism

Genie uses a three-component architecture:

1. **Video tokenizer**: A spatiotemporal VQ-VAE (ST-ViViT) tokenizes video frames into discrete latent tokens, creating a compact representation of the visual state.
2. **Latent action model (LAM)**: An unsupervised model that infers discrete latent actions between consecutive frames. Trained without any action labels — it discovers the action space purely from video transitions.
3. **Dynamics model**: An autoregressive Transformer (MaskGIT-style) that predicts the next frame's tokens given the current frame tokens and the selected latent action. Uses masked token prediction for generation.

Generation pipeline: `action + current_frame → dynamics_model → next_frame`

## Key Innovations

- **Unsupervised action discovery**: The latent action model learns controllable actions (move left, jump, etc.) purely from video, without any action annotations.
- **Interactive generation**: Unlike standard video generation, Genie produces controllable, interactive environments that respond to user input.
- **Single image to playable world**: Given just one image (photo, sketch, or generated image), Genie can create a playable 2D environment.
- **World model**: Functions as a learned world simulator, a step toward general-purpose world models.
- **11B parameters**: Demonstrates scaling of interactive world models.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Genie: Generative Interactive Environments (Bruce et al.) | 2024 | [arXiv:2402.15391](https://arxiv.org/abs/2402.15391) |
