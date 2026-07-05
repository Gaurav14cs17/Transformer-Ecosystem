# OpenAI o1/o3: Reasoning with Chain-of-Thought

## Overview

OpenAI's o1 (September 2024) and o3 (December 2024) models introduced a new paradigm of "reasoning models" that spend additional compute at inference time through extended chain-of-thought before producing final answers. These models represent a shift from scaling pre-training compute to scaling test-time compute, achieving breakthrough performance on complex reasoning tasks in mathematics, science, and programming.

## Architecture Details

- **Type:** Decoder-only Transformer with hidden chain-of-thought
- **o1:** Based on GPT-4-class model with reasoning post-training
- **o3:** Next generation with improved reasoning capabilities
- **Context Length:** 128K tokens (input), 32K-100K+ for reasoning
- **Reasoning:** Hidden chain-of-thought tokens (not shown to user)
- **Training:** Reinforcement Learning for reasoning optimization
- **Inference:** Variable compute — scales thinking time with problem difficulty

## Key Innovations

1. **Test-Time Compute Scaling:** More compute at inference (longer thinking) improves accuracy
2. **Hidden Chain-of-Thought:** Extended reasoning traces not visible to the user
3. **RL for Reasoning:** Reinforcement learning to optimize reasoning strategies
4. **Adaptive Compute:** Model decides how much thinking is needed per problem
5. **Safety Monitoring:** Chain-of-thought enables monitoring for safe reasoning patterns
6. **Paradigm Shift:** From "train bigger" to "think longer"

## Performance Highlights

- o1: AIME 2024: 83.3% (12/15 correct)
- o1: Codeforces: 89th percentile
- o1: GPQA Diamond: 78.0% (PhD-level science)
- o3: ARC-AGI: 87.5% (high-compute), significant jump in abstract reasoning
- o3: AIME 2024: 96.7%
- Breakthrough on tasks previously considered unsolvable by LLMs

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Learning to Reason with LLMs |
| Authors | OpenAI |
| Year | 2024 |
| Institution | OpenAI |
| Link | [OpenAI Research](https://openai.com/index/learning-to-reason-with-llms/) |
