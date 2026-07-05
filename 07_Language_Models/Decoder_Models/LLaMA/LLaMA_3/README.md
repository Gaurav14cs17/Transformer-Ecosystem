# Llama 3: The Llama 3 Herd of Models

## Overview

Llama 3 was released by Meta in 2024 as a family of foundation models ranging from 8B to 405B parameters. The 405B model is the largest open-weight model ever released, trained on over 15 trillion tokens with a 128K context window. Llama 3 represents a massive scaling effort in both data and compute, rivaling proprietary models like GPT-4 on many benchmarks.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 8B, 70B, 405B
- **Context Length:** 8K (base), extended to 128K
- **Vocabulary:** Tiktoken-based BPE (128,256 tokens)
- **Attention:** Grouped-Query Attention (GQA) across all sizes
- **Normalization:** RMSNorm
- **Activation:** SwiGLU
- **Position Encoding:** RoPE with increased frequency
- **Training Data:** 15T+ tokens of multilingual data

## Key Innovations

1. **Massive Data Scale:** 15T+ tokens — 7× more data than Llama 2
2. **128K Context Window:** Extended context through continued pre-training with progressive extension
3. **Improved Tokenizer:** New 128K vocabulary with better multilingual and code tokenization
4. **Tool Use:** Native ability to call tools and functions
5. **Multimodal Extensions:** Image, video, and speech understanding added to 405B variant
6. **Quality Filtering:** Sophisticated data filtering with Llama 2 as a quality classifier

## Performance Highlights

- Llama 3 405B competitive with GPT-4 (April 2024) and Claude 3.5 Sonnet
- MMLU (5-shot): 87.3% (405B)
- HumanEval: 89.0% (405B)
- Llama 3 8B outperforms Llama 2 70B on many benchmarks
- GSM8K: 96.8% (405B)

## Paper Reference

| Field | Details |
|-------|---------|
| Title | The Llama 3 Herd of Models |
| Authors | Meta AI |
| Year | 2024 |
| Institution | Meta AI |
| arXiv | [2407.21783](https://arxiv.org/abs/2407.21783) |
