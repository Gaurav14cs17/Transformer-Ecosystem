# Qwen3: Hybrid Thinking Mode Language Models

## Overview

Qwen3 was released by Alibaba Cloud in 2025, introducing a revolutionary hybrid thinking mode that allows the model to seamlessly switch between fast response generation and deep chain-of-thought reasoning within a single model. This eliminates the need for separate "thinking" and "non-thinking" models, letting users control reasoning depth through prompting.

## Architecture Details

- **Type:** Decoder-only Transformer with hybrid thinking
- **Parameters:** 0.6B, 1.7B, 4B, 8B, 14B, 32B, 30B-A3B (MoE), 235B-A22B (MoE)
- **Context Length:** 32K (base), 128K (extended)
- **Vocabulary:** ~150K tokens
- **Attention:** Grouped-Query Attention (GQA)
- **Normalization:** RMSNorm
- **Activation:** SwiGLU
- **Position Encoding:** RoPE
- **Training Data:** 36T tokens across 119 languages

## Key Innovations

1. **Hybrid Thinking Mode:** Single model supports both fast and deep reasoning via /think and /no_think tags
2. **Thinking Budget Control:** Users can control computational budget allocated to reasoning
3. **Massive Multilingual Coverage:** 119 languages and dialects supported
4. **MoE Scaling:** Efficient sparse models (30B-A3B, 235B-A22B) for deployment flexibility
5. **Improved Reasoning:** Strong performance on math, code, and logical reasoning without sacrificing speed

## Performance Highlights

- Qwen3-235B-A22B competitive with DeepSeek-R1 and GPT-4o on reasoning tasks
- Qwen3-8B outperforms Qwen2.5-72B in thinking mode
- State-of-the-art among open models on AIME 2024, LiveCodeBench
- Seamless switching between fast and deep reasoning modes

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Qwen3 Technical Report |
| Authors | Alibaba Cloud Qwen Team |
| Year | 2025 |
| Institution | Alibaba Cloud |
| arXiv | [2505.09388](https://arxiv.org/abs/2505.09388) |
