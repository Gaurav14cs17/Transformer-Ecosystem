# DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model

## Overview

DeepSeek-V2 was released in May 2024 and introduced two major architectural innovations: Multi-head Latent Attention (MLA) and DeepSeekMoE. With 236B total parameters but only 21B activated per token, DeepSeek-V2 achieves performance comparable to much larger dense models while being significantly more efficient in both training and inference.

## Architecture Details

- **Type:** Decoder-only Transformer with Mixture-of-Experts
- **Parameters:** 236B total, 21B active per token
- **Experts:** 160 routed experts + 2 shared experts, top-6 routing
- **Context Length:** 128K tokens
- **Attention:** Multi-head Latent Attention (MLA)
- **Normalization:** RMSNorm
- **Activation:** SwiGLU
- **Position Encoding:** RoPE
- **KV Cache Compression:** 93.3% reduction via MLA

## Key Innovations

1. **Multi-head Latent Attention (MLA):** Compresses KV cache into low-rank latent vectors, reducing KV cache by 93.3%
2. **DeepSeekMoE:** Fine-grained expert segmentation with shared experts for common knowledge
3. **Auxiliary-Loss-Free Load Balancing:** Device-level balancing without distorting training gradients
4. **Economical Training:** 8.1M GPU hours for pre-training (42.5% of DeepSeek 67B equivalent cost)
5. **Efficient Inference:** 5.76× fewer KV cache memory than standard MHA

## Performance Highlights

- Matches or exceeds Llama 3 70B on most benchmarks
- 42.5% training cost reduction vs. equivalent dense model
- MMLU: 78.5%
- 5.76× KV cache reduction enables much longer contexts in practice
- API cost: $0.14/M input tokens (significantly cheaper than competitors)

## Paper Reference

| Field | Details |
|-------|---------|
| Title | DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model |
| Authors | DeepSeek AI |
| Year | 2024 |
| Institution | DeepSeek AI |
| arXiv | [2405.04434](https://arxiv.org/abs/2405.04434) |
