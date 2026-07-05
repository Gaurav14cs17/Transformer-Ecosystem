# GPT-4: Multimodal Large Language Model

## Overview

GPT-4, released by OpenAI in March 2023, is a large-scale multimodal model that accepts both text and image inputs and produces text outputs. It represents a significant leap in reasoning capabilities, factual accuracy, and safety alignment over its predecessors, achieving human-level performance on numerous professional and academic benchmarks.

## Architecture Details

- **Type:** Decoder-only Transformer (rumored Mixture-of-Experts)
- **Parameters:** ~1.8T (rumored, 8 experts × ~220B)
- **Context Length:** 8K and 32K variants; later extended to 128K
- **Training:** Pre-training + RLHF (Reinforcement Learning from Human Feedback)
- **Modalities:** Text input/output + Image input
- **Post-Training:** Extensive red-teaming and safety alignment

## Key Innovations

1. **Multimodal Input:** Native image understanding alongside text processing
2. **RLHF Alignment:** Extensive alignment training for safety and helpfulness
3. **Predictable Scaling:** Developed infrastructure to predict final performance from smaller-scale runs
4. **System Messages:** Steerable behavior through system prompts for customized interaction styles

## Performance Highlights

- Bar Exam: ~90th percentile (vs. GPT-3.5 at ~10th percentile)
- SAT Math: 700/800
- MMLU: 86.4% (5-shot)
- HumanEval (code): 67.0%
- Significant reduction in hallucination rates compared to GPT-3.5

## Paper Reference

| Field | Details |
|-------|---------|
| Title | GPT-4 Technical Report |
| Authors | OpenAI |
| Year | 2023 |
| Institution | OpenAI |
| arXiv | [2303.08774](https://arxiv.org/abs/2303.08774) |
