# Phi-4: Synthetic Data-Driven Language Model

## Overview

Phi-4, released by Microsoft Research in December 2024, is a 14B parameter model that pioneers the systematic use of synthetic data throughout the training pipeline. Rather than relying primarily on organic web data, Phi-4 uses carefully generated synthetic datasets for both pre-training and mid-training, achieving performance that exceeds its teacher model (GPT-4) on several reasoning benchmarks.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 14B
- **Layers:** 40
- **Hidden Size:** 5120
- **Attention Heads:** 40
- **Context Length:** 16K tokens
- **Vocabulary:** Tiktoken (100,352 tokens)
- **Attention:** Full attention with GQA
- **Activation:** SwiGLU
- **Position Encoding:** RoPE
- **Training Data:** 9.8T tokens (significant synthetic component)

## Key Innovations

1. **Synthetic Data Dominance:** Majority of training data is synthetically generated with careful quality control
2. **Student Surpasses Teacher:** Exceeds GPT-4 on math/reasoning despite being trained on GPT-4 outputs
3. **Data Quality Pipeline:** Multi-stage synthetic data generation with diversity and decontamination
4. **Pivotal Token Training:** Special training on tokens critical for reasoning steps
5. **Structured Reasoning Data:** Synthetic datasets focused on step-by-step problem solving

## Performance Highlights

- Surpasses GPT-4 on MATH and several reasoning benchmarks
- MMLU: 84.8%
- GPQA: 56.1%
- MATH: 80.4%
- HumanEval: 82.6%
- Best performance-per-parameter among models at release

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Phi-4 Technical Report |
| Authors | Marah Abdin, Jyoti Aneja, Harkirat Behl, et al. |
| Year | 2024 |
| Institution | Microsoft Research |
| arXiv | [2412.08905](https://arxiv.org/abs/2412.08905) |
