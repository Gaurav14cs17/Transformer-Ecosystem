# Shap-E — Generating Conditional 3D Implicit Functions

## Overview

Shap-E from OpenAI generates 3D assets by producing the parameters of implicit functions (NeRF + SDF) rather than explicit representations like point clouds. This enables generation of textured 3D meshes that can be rendered from any viewpoint, offering more versatile 3D outputs than Point-E while maintaining fast generation speed.

## Architecture & Mechanism

Shap-E uses a two-stage approach:

1. **Encoder (training stage)**: A Transformer encoder maps 3D assets (represented as multi-view renders + point clouds) to a sequence of latent vectors that parameterize an implicit 3D function.
2. **Implicit function decoder**: The latent vectors are used as weights/parameters for a neural implicit function that can output:
   - **NeRF**: Color and density at any 3D point, enabling volumetric rendering.
   - **SDF (Signed Distance Function)**: Distance to the nearest surface, enabling mesh extraction via Marching Cubes.
   - **Texture**: Surface color/texture information.
3. **Latent diffusion model**: A Transformer-based diffusion model generates the sequence of latent vectors conditioned on text or images.
4. **Rendering**: The generated implicit function can be rendered from any viewpoint or converted to a textured mesh.

## Key Innovations

- **Implicit function generation**: Generates parameters of neural implicit functions, enabling high-quality mesh extraction and rendering.
- **Dual representation**: Outputs both NeRF (for rendering) and SDF (for mesh extraction) from the same model.
- **Textured meshes**: Unlike Point-E (which produces colored point clouds), Shap-E generates complete textured 3D assets.
- **Fast generation**: Generates 3D objects in ~13 seconds on a single GPU.
- **Versatile output**: Generated assets can be used in game engines, 3D editors, and rendering pipelines.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Shap-E: Generating Conditional 3D Implicit Functions (Jun & Nichol) | 2023 | [arXiv:2305.02463](https://arxiv.org/abs/2305.02463) |
