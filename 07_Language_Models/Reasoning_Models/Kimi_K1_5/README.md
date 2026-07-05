# Kimi k1.5: Scaling Reinforcement Learning for Reasoning

## Overview

Kimi k1.5, released by Moonshot AI in January 2025, presents a practical approach to scaling reinforcement learning for improved reasoning capabilities. The model demonstrates that long chain-of-thought reasoning and short-form reasoning can be unified within a single framework, achieving performance on par with OpenAI's o1 on several benchmarks through RL-based training improvements.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Base Model:** Kimi foundation model
- **Training Method:** Reinforcement Learning with long-CoT
- **Context Length:** 128K tokens
- **Reasoning Modes:** Long-form (detailed CoT) and Short-form (direct)
- **RL Algorithm:** Enhanced policy optimization with curriculum
- **Training Strategy:** Long-short joint training

## Key Innovations

1. **RL Scaling for Reasoning:** Demonstrates practical RL scaling laws for reasoning improvement
2. **Long-Short Joint Training:** Unified training of long CoT and short direct answers
3. **Improved RL Techniques:** Length penalty, curriculum-based difficulty progression
4. **Model Merging:** Combines long-CoT and short-form models for versatility
5. **Practical Scaling:** Achieves frontier reasoning without prohibitive compute

## Performance Highlights

- AIME 2024: 77.5%
- MATH-500: 96.2%
- Competitive with OpenAI o1 on mathematical reasoning
- LiveCodeBench: strong competitive programming performance
- Effective balance between reasoning depth and speed

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Kimi k1.5: Scaling Reinforcement Learning with LLMs |
| Authors | Moonshot AI |
| Year | 2025 |
| Institution | Moonshot AI |
| arXiv | [2501.12599](https://arxiv.org/abs/2501.12599) |
