# Qwen2.5-Coder: Code-Specialized Language Model

## Overview

Qwen2.5-Coder, released by Alibaba Cloud in September 2024, is a code-specialized variant of the Qwen2.5 series, available in sizes from 1.5B to 32B. It is trained on 5.5 trillion tokens of code-related data and achieves state-of-the-art performance among open-source code models, with the 32B variant matching GPT-4o on several coding benchmarks.

## Architecture Details

- **Type:** Decoder-only Transformer (code-specialized)
- **Parameters:** 1.5B, 7B, 14B, 32B
- **Context Length:** 32K tokens (base), 128K (extended)
- **Vocabulary:** Qwen2.5 tokenizer (~151K tokens)
- **Attention:** Grouped-Query Attention (GQA)
- **Normalization:** RMSNorm
- **Activation:** SwiGLU
- **Position Encoding:** RoPE with YaRN
- **Training Data:** 5.5T code tokens (92 programming languages)
- **Variants:** Base, Instruct

## Key Innovations

1. **Massive Code Corpus:** 5.5T tokens of code data spanning 92 programming languages
2. **Code-Specific Data Pipeline:** Specialized filtering, deduplication, and quality scoring for code
3. **Repository-Level Training:** Trained on complete repository structures for holistic understanding
4. **Multi-Language Proficiency:** Deep competence across 92 programming languages
5. **Scalable Architecture:** From 1.5B (edge deployment) to 32B (full capability)
6. **Code Repair Training:** Specifically trained on code debugging and fixing

## Performance Highlights

- HumanEval: 92.7% (32B) — state-of-the-art among open models
- MBPP+: 75.4% (32B)
- Qwen2.5-Coder-32B matches GPT-4o on multiple code benchmarks
- LiveCodeBench: competitive with frontier models
- Strong multi-language performance beyond just Python
- SWE-bench: among top open models for code repair

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Qwen2.5-Coder Technical Report |
| Authors | Alibaba Cloud Qwen Team |
| Year | 2024 |
| Institution | Alibaba Cloud |
| arXiv | [2409.12186](https://arxiv.org/abs/2409.12186) |
