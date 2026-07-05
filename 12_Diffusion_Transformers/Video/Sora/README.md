# Sora — OpenAI Video Generation Model

## Overview

Sora is OpenAI's text-to-video generation model capable of producing up to 60 seconds of high-fidelity 1080p video from text descriptions. It uses a Diffusion Transformer (DiT) backbone operating on spacetime patches of video, treating video generation as a sequence modeling problem over latent visual tokens, enabling generation of videos with complex scenes, realistic physics, and coherent temporal dynamics.

## Architecture & Mechanism

Sora combines several architectural innovations:

1. **Spacetime patches**: Videos are compressed into a latent space, then divided into spacetime patches (3D tokens spanning both space and time). This creates a unified representation for videos of any duration, resolution, and aspect ratio.
2. **Diffusion Transformer (DiT)**: A Transformer backbone operates in the latent space, performing iterative denoising. The model learns to predict and remove noise from the spacetime latent patches.
3. **Variable resolution/duration**: Unlike previous models that resize or crop, Sora trains on videos at their native resolution and aspect ratio, learning to generate flexible outputs.
4. **Text conditioning**: Text prompts are encoded (likely via a CLIP or T5-style encoder) and guide the diffusion process through cross-attention or adaptive layer normalization.
5. **Recaptioning**: Detailed video captions are generated using an LLM (GPT-4V) to improve text-video alignment during training.

## Key Innovations

- **Spacetime patch representation**: Treating video as a sequence of spacetime patches enables unified handling of diverse video formats.
- **Long, coherent video**: Generates up to 60 seconds of temporally coherent video with consistent characters, objects, and physics.
- **Native resolution training**: Training at native resolutions improves composition and framing quality.
- **World simulation**: Demonstrates emergent understanding of 3D consistency, object permanence, and physical interactions.
- **Scaling laws for video**: Shows that DiT quality scales predictably with compute and data.

## References

| **Resource** | **Year** | **Link** |
|-----------|----------|----------|
| Sora Technical Report (OpenAI) | 2024 | [OpenAI Blog](https://openai.com/research/video-generation-models-as-world-simulators) |
