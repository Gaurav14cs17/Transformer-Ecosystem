# Gemma 2: Improved Open Models with Hybrid Attention

## Overview

Gemma 2, released by Google DeepMind in June 2024, introduces models at 2B, 9B, and 27B parameter scales with significant architectural improvements. The key innovation is a hybrid attention mechanism alternating between sliding window and global attention layers, combined with knowledge distillation and logit soft-capping for improved training stability.

## Architecture Details

- **Type:** Decoder-only Transformer with hybrid attention
- **Parameters:** 2B, 9B, 27B
- **Context Length:** 8192 tokens
- **Vocabulary:** SentencePiece (256,000 tokens)
- **Attention:** Alternating local sliding window (4096) + global attention layers
- **KV Heads:** Grouped-Query Attention (GQA) with varied group sizes
- **Normalization:** RMSNorm (pre and post-attention)
- **Activation:** GeGLU
- **Position Encoding:** RoPE
- **Training Data:** 8T tokens (2B), 13T tokens (9B/27B)

## Key Innovations

1. **Hybrid Attention:** Alternating sliding window (local) and global attention for efficiency
2. **Logit Soft-Capping:** Prevents logit magnitudes from growing too large, stabilizing training
3. **Knowledge Distillation:** Smaller models trained with distillation from larger ones
4. **Post-Norm + Pre-Norm:** Dual normalization for improved gradient flow
5. **Model Merging:** Used for final model combination during training

## Performance Highlights

- Gemma 2 27B competitive with Llama 3 70B on many benchmarks
- Gemma 2 9B outperforms Llama 3 8B significantly
- MMLU: 75.2% (27B)
- Best-in-class performance for open models at each size
- Excellent efficiency-to-performance ratio

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Gemma 2: Improving Open Language Models at a Practical Size |
| Authors | Google DeepMind |
| Year | 2024 |
| Institution | Google DeepMind |
| arXiv | [2408.00118](https://arxiv.org/abs/2408.00118) |
