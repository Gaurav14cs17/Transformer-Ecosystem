# Qwen2: Improved Multilingual Language Models

## Overview

Qwen2 was released by Alibaba Cloud in 2024 as a significant upgrade to the original Qwen series. It features models ranging from 0.5B to 72B parameters with major improvements in multilingual capability (supporting 27+ languages), coding proficiency, and mathematical reasoning. Qwen2 adopted Grouped-Query Attention and expanded the training corpus substantially.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 0.5B, 1.5B, 7B, 57B-A14B (MoE), 72B
- **Context Length:** 32K (base), extended to 128K for 7B and 72B
- **Vocabulary:** Improved BPE (151,643 tokens)
- **Attention:** Grouped-Query Attention (GQA) for all sizes
- **Normalization:** RMSNorm
- **Activation:** SwiGLU
- **Position Encoding:** RoPE with YaRN extension
- **Training Data:** 7T tokens (curated multilingual corpus)

## Key Innovations

1. **Grouped-Query Attention:** Adopted across all model sizes for inference efficiency
2. **Enhanced Multilingual:** Support for 27+ languages with dedicated training data
3. **MoE Variant:** 57B-A14B sparse model for efficient deployment
4. **Dual Chunk Attention:** For extending context to 128K tokens
5. **Improved Tokenizer:** Better handling of structured data, code, and multilingual text

## Performance Highlights

- Qwen2-72B competitive with Llama 3 70B and GPT-4 (early version)
- Qwen2-7B outperforms Llama 3 8B on most benchmarks
- Strong multilingual performance across 27+ languages
- MMLU: 84.2% (72B)
- Significant improvements on code and math tasks

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Qwen2 Technical Report |
| Authors | Alibaba Cloud Qwen Team |
| Year | 2024 |
| Institution | Alibaba Cloud |
| arXiv | [2407.10671](https://arxiv.org/abs/2407.10671) |
