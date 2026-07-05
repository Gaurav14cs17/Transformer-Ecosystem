# DeepSeek-V3: Efficient Large-Scale Mixture-of-Experts Model

## Overview

DeepSeek-V3 was released in December 2024 and represents a major milestone in efficient LLM training. With 671B total parameters (37B active), it was trained for only $5.5M in compute costs — a fraction of comparable frontier models. DeepSeek-V3 builds on V2's innovations with auxiliary-loss-free load balancing and multi-token prediction, achieving GPT-4-level performance.

## Architecture Details

- **Type:** Decoder-only Transformer with Mixture-of-Experts
- **Parameters:** 671B total, 37B active per token
- **Experts:** 256 routed experts + 1 shared expert, top-8 routing
- **Context Length:** 128K tokens
- **Attention:** Multi-head Latent Attention (MLA)
- **Normalization:** RMSNorm
- **Activation:** SwiGLU
- **Position Encoding:** RoPE
- **Training:** 14.8T tokens on 2048 H800 GPUs
- **Training Cost:** ~$5.5M (2.788M GPU hours)

## Key Innovations

1. **Auxiliary-Loss-Free Load Balancing:** Eliminates performance-degrading auxiliary losses for expert balancing
2. **Multi-Token Prediction (MTP):** Predicts multiple future tokens simultaneously for better representations
3. **FP8 Mixed-Precision Training:** First production model trained with FP8 for compute efficiency
4. **Ultra-Low Training Cost:** $5.5M for a frontier-level model (10-20× cheaper than competitors)
5. **DualPipe:** Novel pipeline parallelism strategy overlapping computation and communication

## Performance Highlights

- Competitive with GPT-4o and Claude 3.5 Sonnet across benchmarks
- MMLU: 87.1%
- MATH 500: 90.2%
- Codeforces: 51.6 percentile (competitive programming)
- #1 on open-source leaderboards at time of release
- Trained for 1/10th the cost of comparable models

## Paper Reference

| Field | Details |
|-------|---------|
| Title | DeepSeek-V3 Technical Report |
| Authors | DeepSeek AI |
| Year | 2024 |
| Institution | DeepSeek AI |
| arXiv | [2412.19437](https://arxiv.org/abs/2412.19437) |
