# Qwen: Large Language Model Series

## Overview

Qwen (Tongyi Qianwen) is a series of large language models released by Alibaba Cloud in 2023. The original Qwen models range from 7B to 72B parameters and were designed with strong multilingual capabilities, particularly excelling in Chinese and English. Qwen established Alibaba as a major player in the open-source LLM space.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 7B, 14B, 72B
- **Context Length:** 8K (base), extended to 32K
- **Vocabulary:** Custom BPE (151,851 tokens) with multilingual and code support
- **Attention:** Multi-Head Attention with bias in QKV
- **Normalization:** RMSNorm (pre-normalization)
- **Activation:** SwiGLU
- **Position Encoding:** RoPE
- **Training Data:** 3T tokens (multilingual, with emphasis on Chinese and English)

## Key Innovations

1. **Large Vocabulary:** 151K tokens covering Chinese, English, code, and other languages efficiently
2. **Log-N Scaling:** Attention scaling factor adjusted for sequence length beyond training length
3. **NTK-Aware Interpolation:** For extending context length beyond training distribution
4. **Tool Use Training:** Native ability to call external tools and APIs
5. **System Prompt Following:** Strong instruction and system prompt adherence

## Performance Highlights

- Qwen-72B competitive with Llama 2 70B and GPT-3.5
- Strong Chinese language understanding and generation
- Excellent performance on code and math benchmarks
- MMLU: 77.4% (72B)

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Qwen Technical Report |
| Authors | Jinze Bai, Shuai Bai, Yunfei Chu, et al. |
| Year | 2023 |
| Institution | Alibaba Cloud |
| arXiv | [2309.16609](https://arxiv.org/abs/2309.16609) |
