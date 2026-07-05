# DeepSeek V1: Open Foundation Language Models

## Overview

DeepSeek V1 was released in early 2024 by DeepSeek (a Chinese AI company funded by High-Flyer) as a family of open-source foundation models. The series includes a 7B dense model and a 67B dense model, along with a pioneering DeepSeek-MoE variant. DeepSeek V1 demonstrated that Chinese AI labs could produce models competitive with Western counterparts.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 7B, 67B (dense)
- **Context Length:** 4096 tokens
- **Vocabulary:** Custom BPE (100,000 tokens)
- **Attention:** Multi-Head Attention
- **Normalization:** RMSNorm (pre-normalization)
- **Activation:** SwiGLU
- **Position Encoding:** RoPE
- **Training Data:** 2T tokens (English and Chinese dominated)

## Key Innovations

1. **High-Quality Data Curation:** Emphasis on data quality with sophisticated filtering pipelines
2. **DeepSeek-MoE Architecture:** Introduced fine-grained MoE with shared and routed experts
3. **Multi-Step Learning Rate:** Novel cosine schedule with multiple phases
4. **Bilingual Focus:** Strong English and Chinese performance from balanced data mix
5. **Open Weights:** Full model weights released for research and commercial use

## Performance Highlights

- DeepSeek 67B competitive with Llama 2 70B and GPT-3.5
- DeepSeek 7B outperforms Llama 2 7B on most benchmarks
- Strong performance on both Chinese and English benchmarks
- MMLU: 71.3% (67B)
- Excellent code generation capabilities

## Paper Reference

| Field | Details |
|-------|---------|
| Title | DeepSeek LLM: Scaling Open-Source Language Models with Longtermism |
| Authors | DeepSeek AI |
| Year | 2024 |
| Institution | DeepSeek AI |
| arXiv | [2401.02954](https://arxiv.org/abs/2401.02954) |
