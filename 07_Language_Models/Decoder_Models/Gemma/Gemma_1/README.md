# Gemma 1: Open Weights Language Models from Google

## Overview

Gemma 1, released by Google DeepMind in February 2024, is a family of lightweight open-weight models built from the same research and technology used to create the Gemini models. Available in 2B and 7B parameter sizes, Gemma was designed to be accessible while maintaining high performance, released under permissive terms for both research and commercial use.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 2B, 7B
- **Context Length:** 8192 tokens
- **Vocabulary:** SentencePiece (256,000 tokens — shared with Gemini)
- **Attention:** Multi-Head Attention (MHA) for 7B, Multi-Query Attention (MQA) for 2B
- **Normalization:** RMSNorm
- **Activation:** GeGLU (GELU-gated linear units)
- **Position Encoding:** RoPE
- **Training Data:** 6T tokens (primarily English, web, code, math)

## Key Innovations

1. **Gemini Technology:** Derived from the same architecture and training methods as Google's Gemini
2. **Large Vocabulary:** 256K token vocabulary for efficient encoding across languages and code
3. **Efficient Architecture:** Carefully designed for good performance at small model sizes
4. **Responsible Release:** Comprehensive safety evaluations and responsible AI toolkit
5. **Knowledge Distillation:** 2B model benefits from distillation techniques

## Performance Highlights

- Gemma 7B outperforms Llama 2 7B and 13B on most benchmarks
- Gemma 2B competitive with much larger models on key tasks
- MMLU: 64.3% (7B)
- Strong code and math performance for its size
- Best-in-class for open models under 10B parameters at time of release

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Gemma: Open Models Based on Gemini Research and Technology |
| Authors | Google DeepMind |
| Year | 2024 |
| Institution | Google DeepMind |
| arXiv | [2403.08295](https://arxiv.org/abs/2403.08295) |
