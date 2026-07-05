# InternLM2: Open-Source Large Language Model

## Overview

InternLM2, released by Shanghai AI Laboratory in early 2024, is an open-source large language model series that excels in long-context understanding, reasoning, and tool use. Available in 7B and 20B sizes, InternLM2 features a 200K token context window and demonstrates strong performance across English and Chinese benchmarks, positioning it as a leading Chinese open-source model.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 1.8B, 7B, 20B
- **Context Length:** 32K (base), extended to 200K
- **Vocabulary:** Custom tokenizer (~100K tokens)
- **Attention:** Grouped-Query Attention (GQA)
- **Normalization:** RMSNorm
- **Activation:** SwiGLU
- **Position Encoding:** RoPE with dynamic NTK scaling
- **Training Data:** 2.6T high-quality tokens
- **Alignment:** SFT + RLHF (COOL RLHF)

## Key Innovations

1. **200K Context Window:** One of the longest context windows among open models at release
2. **COOL RLHF:** Conditional Online RLHF for better alignment without reward hacking
3. **Comprehensive Data Pipeline:** Multi-stage filtering with quality, safety, and diversity checks
4. **Tool-Augmented Training:** Native code interpreter and API calling capabilities
5. **Conditional System Prompts:** Flexible behavior control through structured system messages
6. **Long-Context Training:** Progressive context extension during pre-training

## Performance Highlights

- InternLM2-20B competitive with Llama 2 70B on most benchmarks
- Excellent on long-context tasks (200K retrieval performance)
- Strong math and code performance
- MMLU: 67.7% (20B)
- State-of-the-art on Chinese knowledge benchmarks

## Paper Reference

| Field | Details |
|-------|---------|
| Title | InternLM2 Technical Report |
| Authors | Shanghai AI Laboratory |
| Year | 2024 |
| Institution | Shanghai AI Laboratory |
| arXiv | [2403.17297](https://arxiv.org/abs/2403.17297) |
