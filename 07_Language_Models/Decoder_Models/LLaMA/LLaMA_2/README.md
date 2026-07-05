# Llama 2: Open Foundation and Fine-Tuned Chat Models

## Overview

Llama 2 was released by Meta in July 2023 as a collection of pre-trained and fine-tuned LLMs ranging from 7B to 70B parameters. It was the first truly open-weight model family to include chat-optimized variants trained with RLHF, making it a landmark release for the open-source AI community. Llama 2 doubled the context length and training data compared to LLaMA 1.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 7B, 13B, 70B
- **Context Length:** 4096 tokens (2× LLaMA 1)
- **Vocabulary:** SentencePiece BPE (32,000 tokens)
- **Attention:** Grouped-Query Attention (GQA) for 70B model
- **Normalization:** RMSNorm (pre-normalization)
- **Activation:** SwiGLU
- **Position Encoding:** RoPE
- **Training Data:** 2T tokens (40% more than LLaMA 1)

## Key Innovations

1. **Grouped-Query Attention (GQA):** Used in 70B variant for improved inference efficiency
2. **RLHF for Chat:** Iterative RLHF with rejection sampling and PPO for alignment
3. **Ghost Attention (GAtt):** Technique to maintain system prompt adherence across multi-turn conversations
4. **Safety Fine-Tuning:** Comprehensive red-teaming and safety RLHF training
5. **Open Commercial License:** Released with permissive license for commercial use

## Performance Highlights

- Llama 2 70B close to GPT-3.5 on many benchmarks
- Llama 2 Chat preferred over ChatGPT by human evaluators on helpfulness
- MMLU (5-shot): 68.9% (70B)
- Significant improvements in safety and truthfulness over LLaMA 1

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Llama 2: Open Foundation and Fine-Tuned Chat Models |
| Authors | Hugo Touvron, Louis Martin, Kevin Stone, et al. |
| Year | 2023 |
| Institution | Meta AI |
| arXiv | [2307.09288](https://arxiv.org/abs/2307.09288) |
