# Yi: Open Foundation Models by 01.AI

## Overview

Yi, released by 01.AI (founded by Kai-Fu Lee) in November 2024, is a family of open foundation models at 6B and 34B parameter scales. Yi demonstrates that careful data engineering and training methodology can produce models that punch well above their weight class, with the 34B model competitive with much larger models. Yi emphasizes high-quality bilingual (Chinese-English) capabilities.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 6B, 9B, 34B
- **Context Length:** 4K (base), extended to 200K (Yi-34B-200K)
- **Vocabulary:** Custom BPE (64,000 tokens)
- **Attention:** Grouped-Query Attention (GQA)
- **Normalization:** RMSNorm
- **Activation:** SwiGLU
- **Position Encoding:** RoPE with NTK-aware scaling
- **Training Data:** 3.1T tokens (high-quality English and Chinese)

## Key Innovations

1. **Data Quality Focus:** Extensive deduplication and quality filtering of training data
2. **Extended Context:** Yi-34B-200K achieves 200K context through continued training
3. **Bilingual Design:** Joint optimization for Chinese and English from the ground up
4. **GQA at All Scales:** Efficient attention across all model sizes
5. **Careful Scaling:** Demonstrated efficient compute allocation for optimal performance
6. **Safety and Alignment:** Comprehensive RLHF and safety training

## Performance Highlights

- Yi-34B competitive with Llama 2 70B on English benchmarks
- State-of-the-art on Chinese language benchmarks at its scale
- MMLU: 76.3% (34B)
- Strong long-context performance with 200K variant
- Excellent bilingual capabilities

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Yi: Open Foundation Models by 01.AI |
| Authors | 01.AI Team |
| Year | 2024 |
| Institution | 01.AI |
| arXiv | [2403.04652](https://arxiv.org/abs/2403.04652) |
