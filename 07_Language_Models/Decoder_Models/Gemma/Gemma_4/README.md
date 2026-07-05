# Gemma 4: MoE with Thinking, Audio, and Multimodal Capabilities

## Overview

Gemma 4, released by Google DeepMind in 2026 under the Apache 2.0 license, represents the most capable open-weight model family from Google. It introduces MoE variants alongside dense models, native thinking mode for complex reasoning, and audio understanding. The flagship 26B-A4B MoE model achieves exceptional efficiency while the 31B dense model delivers frontier performance.

## Architecture Details

- **Type:** Decoder-only Transformer (Dense and MoE variants)
- **Dense Model:** 31B parameters
- **MoE Model:** 26B total, 4B active (A4B)
- **Context Length:** 128K tokens
- **Modalities:** Text, Image, Audio (input); Text (output)
- **Attention:** Hybrid local/global attention with GQA
- **Normalization:** RMSNorm
- **Activation:** GeGLU
- **Position Encoding:** RoPE
- **License:** Apache 2.0

## Key Innovations

1. **Thinking Mode:** Native chain-of-thought reasoning toggleable at inference time
2. **Audio Understanding:** First Gemma model with native audio processing capabilities
3. **Efficient MoE:** 26B-A4B achieves strong performance with only 4B active parameters
4. **Apache 2.0 License:** Most permissive license for a model of this capability level
5. **Dense + MoE Options:** Both architectures available for different deployment needs
6. **Multimodal Integration:** Unified architecture handling text, image, and audio

## Performance Highlights

- Gemma 4 31B competitive with models 2-3× its size
- Gemma 4 26B-A4B: best performance per active parameter
- Strong reasoning with thinking mode enabled
- Excellent audio understanding and transcription
- State-of-the-art for open models under Apache 2.0

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Gemma 4 Technical Report |
| Authors | Google DeepMind |
| Year | 2026 |
| Institution | Google DeepMind |
| Link | [Google AI Blog](https://blog.google/technology/developers/gemma-4/) |
