# GLM-4: General Language Model Series

## Overview

GLM-4, released by Zhipu AI in January 2024, is a bilingual (Chinese-English) large language model that achieves competitive performance with GPT-4 on Chinese language tasks and strong performance on English benchmarks. GLM-4 builds on the unique GLM architecture (General Language Model) which uses autoregressive blank infilling as its pre-training objective.

## Architecture Details

- **Type:** Decoder-only Transformer (evolved from GLM prefix-decoder)
- **Parameters:** ~130B (estimated)
- **Context Length:** 128K tokens
- **Vocabulary:** ChatGLM tokenizer (~150K tokens, bilingual)
- **Attention:** Multi-Head Attention with GQA
- **Normalization:** RMSNorm
- **Activation:** SwiGLU
- **Position Encoding:** RoPE
- **Training:** Multi-stage training with alignment

## Key Innovations

1. **GLM Architecture Heritage:** Built on autoregressive blank infilling paradigm
2. **Bilingual Excellence:** Specifically optimized for both Chinese and English
3. **128K Long Context:** Extended context for document-level understanding
4. **GLM-4-AllTools:** Variant with native tool use, code execution, and web browsing
5. **Multi-Modal Variants:** GLM-4V for vision-language tasks
6. **Alignment:** Comprehensive RLHF and safety training for Chinese/English

## Performance Highlights

- Competitive with GPT-4 on Chinese language benchmarks
- Strong performance on knowledge, reasoning, and math tasks
- 128K context with good retrieval performance throughout
- Effective tool use and function calling
- MMLU: ~80% (estimated from public evaluations)

## Paper Reference

| Field | Details |
|-------|---------|
| Title | ChatGLM: A Family of Large Language Models from GLM-130B to GLM-4 All Tools |
| Authors | Zhipu AI Team |
| Year | 2024 |
| Institution | Zhipu AI |
| arXiv | [2406.12793](https://arxiv.org/abs/2406.12793) |
