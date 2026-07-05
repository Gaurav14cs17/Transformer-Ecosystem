# QwQ: Reflect Deeply on the Boundaries of the Unknown

## Overview

QwQ (Qwen with Questions), released by Alibaba in March 2025, is a reasoning-focused language model that achieves strong performance on mathematical and scientific reasoning through extended chain-of-thought processing. QwQ demonstrates that careful post-training with reasoning-focused data and RL can produce competitive reasoning models without the scale of larger alternatives.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 32B
- **Context Length:** 32K tokens (input), generates long reasoning chains
- **Base Model:** Qwen2.5-32B
- **Training:** SFT on reasoning data + Reinforcement Learning
- **Thinking Budget:** Can generate 10K+ tokens of reasoning before answering
- **Normalization:** RMSNorm
- **Activation:** SwiGLU
- **Position Encoding:** RoPE

## Key Innovations

1. **Deep Reflection:** Extended reasoning chains with self-questioning and verification
2. **Efficient Reasoning Model:** Achieves strong reasoning at 32B (vs. 671B for DeepSeek-R1)
3. **Self-Questioning:** Model asks itself clarifying questions during reasoning
4. **Reasoning Verification:** Built-in step verification during chain-of-thought
5. **Compact Scale:** Demonstrates that good reasoning can emerge at moderate model sizes

## Performance Highlights

- AIME 2024: 50.0% (competitive for its size)
- MATH-500: 90.6%
- LiveCodeBench: Strong competitive programming performance
- GPQA: 65.2% (graduate-level science)
- Best reasoning performance among 30B-class models

## Paper Reference

| Field | Details |
|-------|---------|
| Title | QwQ: Reflect Deeply on the Boundaries of the Unknown |
| Authors | Alibaba Cloud Qwen Team |
| Year | 2025 |
| Institution | Alibaba Cloud |
| arXiv | [2503.18223](https://arxiv.org/abs/2503.18223) |
