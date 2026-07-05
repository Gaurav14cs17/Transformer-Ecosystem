# Gemma 3: Native Vision Language Models

## Overview

Gemma 3, released by Google DeepMind in March 2025, extends the Gemma family with native vision capabilities. Available in sizes from 1B to 27B, these models can process both text and images through an integrated architecture. Gemma 3 also introduces significantly expanded context lengths and improved multilingual support across 140+ languages.

## Architecture Details

- **Type:** Decoder-only Transformer with vision encoder
- **Parameters:** 1B, 4B, 12B, 27B
- **Context Length:** 32K (1B), 128K (4B/12B/27B)
- **Vision Encoder:** SigLIP-based image encoder
- **Vocabulary:** SentencePiece (262,144 tokens)
- **Attention:** Hybrid sliding window (local) + global attention with GQA
- **Normalization:** RMSNorm
- **Activation:** GeGLU
- **Position Encoding:** RoPE
- **Modalities:** Text + Image

## Key Innovations

1. **Native Vision:** Integrated vision encoder (SigLIP) connected via linear projection
2. **128K Context:** 16× increase over Gemma 2's context length
3. **Pan-Lingual Training:** Support for 140+ languages
4. **Efficient Architecture:** Maintains Gemma 2's hybrid attention patterns
5. **ShieldGemma 2:** Accompanying safety classifier for content filtering
6. **Quantization-Friendly:** Designed for efficient deployment with QAT

## Performance Highlights

- Gemma 3 27B competitive with Gemini 1.5 Pro on many benchmarks
- Strong multimodal performance on vision-language tasks
- MMLU: 78.6% (27B)
- Excellent long-context performance up to 128K tokens
- Best open model in its class for vision-language tasks

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Gemma 3 Technical Report |
| Authors | Google DeepMind |
| Year | 2025 |
| Institution | Google DeepMind |
| arXiv | [2503.19786](https://arxiv.org/abs/2503.19786) |
