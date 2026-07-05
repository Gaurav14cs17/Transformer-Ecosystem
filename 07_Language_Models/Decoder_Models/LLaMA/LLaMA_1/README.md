# LLaMA: Open and Efficient Foundation Language Models

## Overview

LLaMA (Large Language Model Meta AI) was released by Meta in February 2023 as a collection of foundation language models ranging from 7B to 65B parameters. The key insight was that smaller models trained on significantly more data can match or exceed the performance of much larger models, making high-quality LLMs more accessible to the research community.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 7B, 13B, 33B, 65B
- **Context Length:** 2048 tokens
- **Vocabulary:** SentencePiece BPE (32,000 tokens)
- **Normalization:** RMSNorm (pre-normalization)
- **Activation:** SwiGLU
- **Position Encoding:** Rotary Position Embeddings (RoPE)
- **Training Data:** 1.0T tokens (7B/13B), 1.4T tokens (33B/65B) — publicly available data only

## Key Innovations

1. **SwiGLU Activation:** Replaced ReLU with SwiGLU for improved training stability and performance
2. **Rotary Positional Embeddings (RoPE):** Better length generalization compared to absolute position embeddings
3. **RMSNorm Pre-normalization:** More stable training than post-norm LayerNorm
4. **Efficient Training:** Showed that 7B model trained on 1T tokens outperforms GPT-3 (175B) on most benchmarks
5. **Open Data:** Trained exclusively on publicly available datasets

## Performance Highlights

- LLaMA-13B outperforms GPT-3 (175B) on most benchmarks
- LLaMA-65B competitive with Chinchilla-70B and PaLM-540B
- MMLU (5-shot): 63.4% (65B)
- Catalyzed the open-source LLM ecosystem

## Paper Reference

| Field | Details |
|-------|---------|
| Title | LLaMA: Open and Efficient Foundation Language Models |
| Authors | Hugo Touvron, Thibaut Lavril, Gautier Izacard, et al. |
| Year | 2023 |
| Institution | Meta AI |
| arXiv | [2302.13971](https://arxiv.org/abs/2302.13971) |
