# Phi-3: Compact Models with Extended Context

## Overview

Phi-3, released by Microsoft in April 2024, is a family of small language models (3.8B parameters) that achieve performance competitive with much larger models like Mixtral 8x7B and GPT-3.5. The key breakthrough is the 128K context window variant (Phi-3-mini-128K), making it one of the first sub-4B models to support long context while maintaining quality through an innovative data curriculum.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 3.8B (mini), 7B (small), 14B (medium)
- **Layers:** 32 (mini)
- **Hidden Size:** 3072 (mini)
- **Attention Heads:** 32
- **Context Length:** 4K (base), 128K (long)
- **Vocabulary:** Tiktoken (32,064 tokens)
- **Attention:** Full attention with GQA support
- **Activation:** SwiGLU
- **Position Encoding:** LongRoPE for 128K variant

## Key Innovations

1. **128K Context at 3.8B:** First sub-4B model with 128K context window via LongRoPE
2. **Data Curriculum:** Multi-phase training with progressively complex data
3. **Heavily Filtered Web Data:** Extreme data quality filtering using LLM-based classifiers
4. **Compact + Capable:** Designed to run on mobile devices and edge hardware
5. **Safety Alignment:** Trained with comprehensive safety measures from the start

## Performance Highlights

- Phi-3-mini matches Mixtral 8x7B and GPT-3.5 on many benchmarks
- MMLU: 69.0% (mini-4K) — exceptional for 3.8B parameters
- GSM8K: 82.5%
- Can run on smartphones and edge devices
- HumanEval: 58.5%

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Phi-3 Technical Report: A Highly Capable Language Model Locally on Your Phone |
| Authors | Marah Abdin, Jyoti Aneja, Hany Awadalla, et al. |
| Year | 2024 |
| Institution | Microsoft Research |
| arXiv | [2404.14219](https://arxiv.org/abs/2404.14219) |
