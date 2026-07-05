# Qwen2.5: Specialized Language Models with Coding and Math Expertise

## Overview

Qwen2.5 was released by Alibaba Cloud in September 2024 as an extensive family of models from 0.5B to 72B parameters. This release focused on specialized capabilities, introducing dedicated Qwen2.5-Coder and Qwen2.5-Math variants alongside the general-purpose models. The series was trained on 18T tokens — a massive increase over Qwen2's 7T tokens.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 0.5B, 1.5B, 3B, 7B, 14B, 32B, 72B
- **Context Length:** 32K (base), 128K (extended)
- **Vocabulary:** BPE (151,643 tokens)
- **Attention:** Grouped-Query Attention (GQA)
- **Normalization:** RMSNorm
- **Activation:** SwiGLU
- **Position Encoding:** RoPE with YaRN
- **Training Data:** 18T tokens (2.5× Qwen2)
- **Specialized Variants:** Qwen2.5-Coder, Qwen2.5-Math

## Key Innovations

1. **Massive Data Scale:** 18T tokens of training data with improved data quality pipelines
2. **Specialized Models:** Dedicated coding and math variants with domain-specific training
3. **Comprehensive Size Range:** Models from 0.5B to 72B for diverse deployment scenarios
4. **Structured Output:** Improved ability to generate JSON, tables, and structured formats
5. **Long-Form Generation:** Better coherence for 8K+ token outputs
6. **Instruction Following:** Significantly improved system prompt and constraint adherence

## Performance Highlights

- Qwen2.5-72B competitive with Llama 3.1 405B on many benchmarks
- Qwen2.5-Coder-32B matches GPT-4o on coding tasks
- Qwen2.5-Math-72B state-of-the-art on mathematical reasoning
- MMLU: 86.1% (72B)
- HumanEval: 86.6% (Coder-32B)

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Qwen2.5 Technical Report |
| Authors | Alibaba Cloud Qwen Team |
| Year | 2024 |
| Institution | Alibaba Cloud |
| arXiv | [2412.15115](https://arxiv.org/abs/2412.15115) |
