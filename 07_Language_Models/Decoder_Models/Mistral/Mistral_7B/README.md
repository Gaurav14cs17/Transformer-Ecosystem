# Mistral 7B: Efficient Language Model with Sliding Window Attention

## Overview

Mistral 7B, released by Mistral AI in September 2023, demonstrated that carefully engineered smaller models can outperform much larger ones. Despite having only 7.3B parameters, it outperformed Llama 2 13B on all benchmarks and Llama 1 34B on many. Key architectural choices include sliding window attention and grouped-query attention for efficient inference.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 7.3B
- **Layers:** 32
- **Hidden Size:** 4096
- **Attention Heads:** 32 (8 KV heads via GQA)
- **Context Length:** 8K tokens (sliding window: 4096)
- **Vocabulary:** SentencePiece BPE (32,000 tokens)
- **Attention:** Sliding Window Attention (SWA) + Grouped-Query Attention (GQA)
- **Normalization:** RMSNorm
- **Activation:** SwiGLU
- **Position Encoding:** RoPE

## Key Innovations

1. **Sliding Window Attention (SWA):** Each layer attends to 4096 previous tokens, enabling effective context of 32K+ through stacking
2. **Grouped-Query Attention (GQA):** 8 KV heads (vs. 32 Q heads) for faster inference and lower memory
3. **Rolling Buffer Cache:** Fixed-size KV cache that wraps around, enabling constant memory usage
4. **Pre-fill and Chunking:** Efficient strategies for processing long prompts
5. **No Benchmark Gaming:** Simple release without specialized benchmark training

## Performance Highlights

- Outperforms Llama 2 13B on all benchmarks
- Approaches or matches Llama 1 34B performance
- MMLU: 60.1%
- Excellent code generation for its size (HumanEval: 30.5%)
- Most efficient open model at time of release

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Mistral 7B |
| Authors | Albert Q. Jiang, Alexandre Sablayrolles, Arthur Mensch, et al. |
| Year | 2023 |
| Institution | Mistral AI |
| arXiv | [2310.06825](https://arxiv.org/abs/2310.06825) |
