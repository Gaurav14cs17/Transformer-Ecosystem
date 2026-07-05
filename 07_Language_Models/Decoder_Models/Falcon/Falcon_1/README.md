# Falcon: Open Large Language Models from TII

## Overview

Falcon, released by the Technology Innovation Institute (TII) of Abu Dhabi in 2023, is a family of open-source language models available at 7B, 40B, and 180B parameter scales. Falcon was trained on the RefinedWeb dataset — a carefully curated web corpus that demonstrated web data alone can match curated corpora when properly filtered. At release, Falcon-40B topped the Hugging Face Open LLM Leaderboard.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 7B, 40B, 180B
- **Context Length:** 2048 tokens
- **Vocabulary:** Custom BPE (65,024 tokens)
- **Attention:** Multi-Query Attention (MQA) — single KV head
- **Normalization:** LayerNorm
- **Activation:** GELU
- **Position Encoding:** RoPE
- **Training Data:** 1T tokens (7B), 1T tokens (40B), 3.5T tokens (180B)
- **Dataset:** RefinedWeb (primarily), curated corpora

## Key Innovations

1. **RefinedWeb Dataset:** Proved that properly filtered web data matches curated datasets in quality
2. **Multi-Query Attention:** Single KV head for dramatic inference speedup and memory savings
3. **Flash Attention:** Integrated FlashAttention for efficient training
4. **Large-Scale Open Release:** 180B model was the largest open-weight model at time of release
5. **Minimal Architecture Changes:** Showed that data quality matters more than architectural novelty

## Performance Highlights

- Falcon-40B #1 on Open LLM Leaderboard at release (June 2023)
- Falcon-180B competitive with GPT-3.5 and close to GPT-4 on some tasks
- Strong performance on reasoning and knowledge benchmarks
- MMLU: 70.4% (180B)
- Open license enabling broad commercial and research use

## Paper Reference

| Field | Details |
|-------|---------|
| Title | The Falcon Series of Open Language Models |
| Authors | Ebtesam Almazrouei, Hamza Alobeidli, et al. |
| Year | 2023 |
| Institution | Technology Innovation Institute (TII) |
| arXiv | [2311.16867](https://arxiv.org/abs/2311.16867) |
