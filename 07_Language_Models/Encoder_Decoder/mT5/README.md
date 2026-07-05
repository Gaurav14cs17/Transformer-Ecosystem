# mT5: Multilingual Text-to-Text Transfer Transformer

## Overview

mT5, released by Google Research in 2020, extends the T5 architecture to 101 languages by pre-training on the mC4 corpus (multilingual C4). Following T5's text-to-text framework, mT5 provides a single model capable of performing NLP tasks across over 100 languages, enabling multilingual transfer learning and cross-lingual generalization.

## Architecture Details

- **Type:** Encoder-Decoder Transformer (multilingual)
- **Parameters:** Small (300M), Base (580M), Large (1.2B), XL (3.7B), XXL (13B)
- **Languages:** 101 languages
- **Context Length:** 512 tokens (input) + 512 tokens (output)
- **Vocabulary:** SentencePiece (250,000 tokens — covers all 101 languages)
- **Normalization:** RMSNorm (pre-normalization)
- **Position Encoding:** Relative position bias
- **Training Data:** mC4 (multilingual C4, ~6.3T tokens across 101 languages)
- **Pre-training Objective:** Span corruption (same as T5)

## Key Innovations

1. **101-Language Coverage:** Single model supporting 101 languages with shared representations
2. **mC4 Dataset:** Massive multilingual web corpus with language-specific filtering
3. **Cross-Lingual Transfer:** Train on one language, evaluate on another
4. **Unified Framework:** Same text-to-text approach works across all languages
5. **Sampling Strategy:** Temperature-based sampling to balance high/low-resource languages

## Performance Highlights

- State-of-the-art on XTREME multilingual benchmark
- Strong cross-lingual transfer (train English, evaluate other languages)
- Competitive with language-specific models on individual language tasks
- XNLI: 85.0% (XXL)
- Enables NLP capabilities for under-resourced languages

## Paper Reference

| Field | Details |
|-------|---------|
| Title | mT5: A Massively Multilingual Pre-trained Text-to-Text Transformer |
| Authors | Linting Xue, Noah Constant, Adam Roberts, et al. |
| Year | 2020 |
| Institution | Google Research |
| arXiv | [2010.11934](https://arxiv.org/abs/2010.11934) |
