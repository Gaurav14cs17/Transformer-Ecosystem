# mBART: Multilingual Denoising Pre-training for Neural Machine Translation

## Overview

mBART (multilingual BART), released by Facebook AI in January 2020, extends the BART denoising autoencoder approach to multilingual settings. Pre-trained on large-scale monolingual corpora in 25 languages using the BART objective, mBART enables effective multilingual and cross-lingual neural machine translation, particularly excelling in low-resource translation scenarios.

## Architecture Details

- **Type:** Encoder-Decoder Transformer (multilingual)
- **Parameters:** ~680M
- **Layers:** 12 encoder + 12 decoder
- **Hidden Size:** 1024
- **Attention Heads:** 16
- **Context Length:** 1024 tokens
- **Vocabulary:** SentencePiece (250,000 tokens shared across languages)
- **Languages:** 25 (mBART-25), extended to 50 (mBART-50)
- **Normalization:** LayerNorm
- **Activation:** GELU
- **Training Data:** CC25 corpus (monolingual data in 25 languages)

## Key Innovations

1. **Multilingual Denoising:** BART-style span masking and sentence permutation across 25 languages
2. **Language Tokens:** Special tokens indicate source/target language for translation direction
3. **Low-Resource Translation:** Significant improvements for language pairs with limited parallel data
4. **Cross-Lingual Transfer:** Pre-training transfers across related languages
5. **Back-Translation Compatible:** Works with back-translation for further improvement

## Performance Highlights

- Significant gains on low-resource translation (up to +12 BLEU)
- Strong performance on all WMT translation benchmarks
- Enables unsupervised machine translation through cross-lingual pre-training
- Effective for document-level translation
- mBART-50 extends to 50 languages with maintained quality

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Multilingual Denoising Pre-training for Neural Machine Translation |
| Authors | Yinhan Liu, Jiatao Gu, Naman Goyal, et al. |
| Year | 2020 |
| Institution | Facebook AI Research |
| arXiv | [2001.08210](https://arxiv.org/abs/2001.08210) |
