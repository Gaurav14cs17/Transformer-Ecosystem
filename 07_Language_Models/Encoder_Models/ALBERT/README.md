# ALBERT: A Lite BERT for Self-supervised Learning of Language Representations

## Overview

ALBERT (A Lite BERT), released by Google Research in September 2019, addresses BERT's memory limitations and training speed through two parameter-reduction techniques: factorized embedding parameterization and cross-layer parameter sharing. These allow building much wider/deeper models with fewer parameters, and ALBERT-xxlarge achieves BERT-Large-level performance with 70% fewer parameters.

## Architecture Details

- **Type:** Encoder-only Transformer
- **Variants:** Base (12M), Large (18M), xLarge (60M), xxLarge (235M)
- **ALBERT-xxLarge:** 12 layers, 4096 hidden, 64 heads, 128 embedding dim
- **Context Length:** 512 tokens
- **Vocabulary:** SentencePiece (30,000 tokens)
- **Embedding:** Factorized (128-dim → hidden_size projection)
- **Parameter Sharing:** Cross-layer sharing of all Transformer parameters
- **Normalization:** LayerNorm
- **Activation:** GELU

## Key Innovations

1. **Factorized Embedding:** Decomposes embedding matrix into two smaller matrices (V×E and E×H)
2. **Cross-Layer Parameter Sharing:** All layers share the same parameters, drastically reducing model size
3. **Sentence Order Prediction (SOP):** Replaces NSP with harder inter-sentence coherence task
4. **Wider Networks:** Parameter reduction enables building wider models that still fit in memory
5. **Similar Performance, Fewer Parameters:** Achieves competitive performance with 70% fewer parameters

## Performance Highlights

- ALBERT-xxlarge matches BERT-Large with 70% fewer parameters
- GLUE: 89.4 (xxLarge)
- SQuAD 2.0: F1 92.2
- Enables training of much larger effective models within memory constraints
- 1.7× faster training than BERT-Large (same performance)

## Paper Reference

| Field | Details |
|-------|---------|
| Title | ALBERT: A Lite BERT for Self-supervised Learning of Language Representations |
| Authors | Zhenzhong Lan, Mingda Chen, Sebastian Goodman, et al. |
| Year | 2019 |
| Institution | Google Research, Toyota Technological Institute |
| arXiv | [1909.11942](https://arxiv.org/abs/1909.11942) |
