# GPT-4o: Omni — Native Multimodal Model

## Overview

GPT-4o ("o" for "omni") was released by OpenAI in May 2024 as a natively multimodal model that can reason across text, audio, image, and video inputs and generate text, audio, and image outputs. Unlike previous multimodal approaches that used separate models stitched together, GPT-4o processes all modalities through a single end-to-end neural network.

## Architecture Details

- **Type:** Unified multimodal Transformer (decoder-only)
- **Modalities:** Text, audio, image, and video (input); text, audio, image (output)
- **Context Length:** 128K tokens
- **Response Latency:** ~320ms average for audio (human-like conversational speed)
- **Training:** End-to-end across all modalities simultaneously
- **Tokenizer:** Improved tokenizer with better multilingual compression

## Key Innovations

1. **Native Multimodality:** Single model trained end-to-end on all modalities, not separate encoders/decoders
2. **Real-Time Audio:** Human-level response latency for voice conversations
3. **Emotional Expression:** Can generate speech with varying tone, emotion, and singing
4. **Efficiency:** Matches GPT-4 Turbo text performance at 2× speed and 50% lower cost
5. **Multilingual:** Significantly improved non-English tokenization and performance

## Performance Highlights

- Matches GPT-4 Turbo on text (MMLU: 87.2%)
- State-of-the-art on multilingual and audio understanding benchmarks
- 50% cheaper API pricing compared to GPT-4 Turbo
- 2× faster inference speed
- Superior vision understanding compared to GPT-4V

## Paper Reference

| Field | Details |
|-------|---------|
| Title | GPT-4o System Card |
| Authors | OpenAI |
| Year | 2024 |
| Institution | OpenAI |
| Link | [OpenAI](https://openai.com/index/hello-gpt-4o/) |
