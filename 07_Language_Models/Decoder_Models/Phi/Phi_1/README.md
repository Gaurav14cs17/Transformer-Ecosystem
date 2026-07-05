# Phi-1: Textbooks Are All You Need

## Overview

Phi-1, released by Microsoft Research in June 2023, demonstrated that high-quality training data can dramatically reduce the compute needed for strong model performance. With only 1.3B parameters trained on carefully curated "textbook-quality" data and synthetic exercises, Phi-1 achieved remarkable performance on code generation benchmarks, rivaling models 10× its size.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 1.3B
- **Layers:** 24
- **Hidden Size:** 2048
- **Attention Heads:** 32
- **Context Length:** 2048 tokens
- **Vocabulary:** CodeGen tokenizer (50,295 tokens)
- **Activation:** GELU
- **Training Data:** ~7B tokens of "textbook-quality" data
- **Training Compute:** ~4 days on 8 A100 GPUs

## Key Innovations

1. **Data Quality over Quantity:** Proved that curated high-quality data outperforms raw web crawls
2. **Synthetic Data:** Generated textbook-style exercises with GPT-3.5 to create ideal training data
3. **Textbook Filtering:** Filtered web data to retain only educational, textbook-like content
4. **Small but Mighty:** 1.3B model competing with 10B+ models on coding tasks
5. **Compute Efficiency:** Trained in days rather than weeks/months

## Performance Highlights

- HumanEval: 50.6% (surpassing GPT-3.5 and StarCoder 15B)
- MBPP: 55.5%
- Demonstrates "data-efficient" scaling — quality data >> quantity
- Outperforms models trained on 100× more data
- Only 7B tokens of training data (vs. trillions for comparable models)

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Textbooks Are All You Need |
| Authors | Suriya Gunasekar, Yi Zhang, Jyoti Aneja, et al. |
| Year | 2023 |
| Institution | Microsoft Research |
| arXiv | [2306.11644](https://arxiv.org/abs/2306.11644) |
