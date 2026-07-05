# Mixtral of Experts: Sparse Mixture-of-Experts Language Model

## Overview

Mixtral 8x7B, released by Mistral AI in January 2024, is a sparse Mixture-of-Experts (SMoE) model that uses 8 expert feed-forward networks per layer with a router selecting 2 experts per token. With 46.7B total parameters but only 12.9B active per token, Mixtral matches or outperforms GPT-3.5 and Llama 2 70B while being significantly faster at inference.

## Architecture Details

- **Type:** Decoder-only Sparse Mixture-of-Experts Transformer
- **Total Parameters:** 46.7B
- **Active Parameters:** 12.9B per token
- **Experts:** 8 per layer, top-2 routing
- **Layers:** 32
- **Hidden Size:** 4096
- **Attention Heads:** 32 (8 KV heads via GQA)
- **Context Length:** 32K tokens
- **Vocabulary:** SentencePiece BPE (32,000 tokens)
- **Attention:** Sliding Window Attention + GQA
- **Activation:** SwiGLU

## Key Innovations

1. **Sparse MoE at Scale:** First widely available high-quality SMoE model for the open community
2. **Token-Level Expert Routing:** Each token independently routed to 2 of 8 experts
3. **Efficient Inference:** Only 12.9B parameters active, matching 70B dense model quality at 6× speed
4. **32K Context:** Extended context window with sliding window attention
5. **Expert Diversity:** Experts specialize in different domains (syntax, semantics, specific languages)

## Performance Highlights

- Matches or exceeds GPT-3.5 Turbo on most benchmarks
- Outperforms Llama 2 70B on all benchmarks
- MMLU: 70.6%
- 6× faster inference than equivalent dense 70B model
- Excellent multilingual and code performance
- HumanEval: 40.2%

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Mixtral of Experts |
| Authors | Albert Q. Jiang, Alexandre Sablayrolles, Antoine Roux, et al. |
| Year | 2024 |
| Institution | Mistral AI |
| arXiv | [2401.04088](https://arxiv.org/abs/2401.04088) |
