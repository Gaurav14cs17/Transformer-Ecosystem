# DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning

## Overview

DeepSeek-R1, released in January 2025, demonstrates that strong reasoning capabilities can emerge through pure reinforcement learning (RL) without requiring supervised fine-tuning (SFT) on reasoning traces. The model develops chain-of-thought reasoning, self-verification, and reflection behaviors purely from RL reward signals, achieving performance competitive with OpenAI's o1 on mathematical and scientific reasoning.

## Architecture Details

- **Type:** Decoder-only Transformer (based on DeepSeek-V3)
- **Base Model:** DeepSeek-V3 (671B total, 37B active MoE)
- **Training Method:** Pure RL (GRPO - Group Relative Policy Optimization)
- **Context Length:** 128K tokens
- **Reasoning Token Budget:** Variable (can use thousands of tokens for thinking)
- **Attention:** Multi-head Latent Attention (MLA)
- **Variants:** R1, R1-Zero (no SFT), R1-Distill (smaller distilled versions)
- **Distilled Sizes:** 1.5B, 7B, 8B, 14B, 32B, 70B

## Key Innovations

1. **Pure RL Reasoning (R1-Zero):** Reasoning emerges from RL alone without supervised chain-of-thought data
2. **GRPO:** Group Relative Policy Optimization — efficient RL without critic model
3. **Emergent Behaviors:** Self-verification, reflection, and problem decomposition emerge naturally
4. **Distillation Pipeline:** Reasoning capabilities distilled to smaller models (1.5B-70B)
5. **Aha Moments:** Model spontaneously develops self-correction during RL training
6. **Open Weights:** Full model weights released for research

## Performance Highlights

- AIME 2024: 79.8% (competitive with OpenAI o1)
- MATH-500: 97.3%
- Codeforces: 96.3 percentile
- R1-Distill-32B outperforms GPT-4o on many reasoning tasks
- Demonstrates reasoning emergence from pure RL

## Paper Reference

| Field | Details |
|-------|---------|
| Title | DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning |
| Authors | DeepSeek AI |
| Year | 2025 |
| Institution | DeepSeek AI |
| arXiv | [2501.12948](https://arxiv.org/abs/2501.12948) |
