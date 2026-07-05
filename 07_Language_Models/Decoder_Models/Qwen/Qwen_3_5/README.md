# Qwen3.5: Hybrid Linear-Attention with Gated Delta Networks

## Overview

Qwen3.5, released by Alibaba Cloud in 2026, introduces a groundbreaking hybrid architecture combining linear attention mechanisms with Gated Delta Networks and sparse Mixture-of-Experts. The flagship model has 397B total parameters with 17B active (A17B), achieving frontier performance while maintaining exceptional inference efficiency through sub-quadratic attention complexity.

## Architecture Details

- **Type:** Hybrid Linear-Attention Transformer with sparse MoE
- **Parameters:** 397B total, 17B active (A17B)
- **Context Length:** 256K tokens (native), extendable to 1M+
- **Attention:** Hybrid linear attention + Gated Delta Networks
- **MoE:** Sparse Mixture-of-Experts with fine-grained routing
- **Normalization:** RMSNorm
- **Activation:** SwiGLU
- **Position Encoding:** Enhanced RoPE with linear attention compatibility

## Key Innovations

1. **Hybrid Linear Attention:** Combines standard softmax attention with linear attention layers for sub-quadratic complexity
2. **Gated Delta Networks:** Novel gating mechanism for efficient state updates in linear attention
3. **Sparse MoE Integration:** 397B-A17B architecture maximizes capacity while minimizing active compute
4. **Sub-Quadratic Scaling:** Near-linear computational cost for long sequences
5. **Efficient KV-Cache:** Dramatically reduced memory requirements for long-context inference
6. **Architecture Co-Design:** Linear attention and MoE layers specifically designed to complement each other

## Performance Highlights

- Competitive with models 5-10× its active compute on reasoning benchmarks
- Superior long-context performance due to sub-quadratic attention
- Efficient inference: only 17B active parameters with 256K native context
- Strong performance on AIME 2025, LiveCodeBench, and multilingual tasks

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Qwen3.5 Technical Report |
| Authors | Alibaba Cloud Qwen Team |
| Year | 2026 |
| Institution | Alibaba Cloud |
| Link | [Qwen Blog](https://qwenlm.github.io/) |
