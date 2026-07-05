# ELECTRA: Efficiently Learning an Encoder that Classifies Token Replacements Accurately

## Overview

ELECTRA, released by Google Brain and Stanford in March 2020, proposes a more sample-efficient pre-training method called "replaced token detection." Instead of masking tokens and predicting them (like BERT), ELECTRA trains a discriminator to detect which tokens have been replaced by a small generator network. This approach trains on ALL tokens (not just masked 15%), leading to much faster and more efficient pre-training.

## Architecture Details

- **Type:** Encoder-only Transformer (discriminator) + small generator
- **Discriminator:** Same architecture as BERT (Base: 110M, Large: 335M)
- **Generator:** Smaller Transformer (typically 1/4 to 1/3 discriminator size)
- **Context Length:** 512 tokens
- **Vocabulary:** WordPiece (30,522 tokens)
- **Normalization:** LayerNorm
- **Activation:** GELU
- **Training Objective:** Replaced Token Detection (RTD)
- **Training:** Adversarial-style (generator creates fakes, discriminator detects)

## Key Innovations

1. **Replaced Token Detection:** Binary classification on ALL tokens (real vs. replaced) rather than predicting masked tokens
2. **Generator-Discriminator:** Small generator produces plausible replacements; discriminator learns to detect them
3. **Full Sequence Learning:** Learns from every token position, not just the 15% masked positions
4. **Compute Efficiency:** Achieves BERT performance with 1/4 the compute
5. **Weight Sharing Option:** Generator and discriminator can share embeddings for additional efficiency

## Performance Highlights

- Matches BERT performance with 1/4 the compute
- ELECTRA-Small matches GPT with 1/10th compute
- GLUE: 89.4 (Large) — matching RoBERTa with less compute
- SQuAD 2.0: F1 92.4
- Particularly effective in low-compute and small-model regimes

## Paper Reference

| Field | Details |
|-------|---------|
| Title | ELECTRA: Pre-training Text Encoders as Discriminators Rather Than Generators |
| Authors | Kevin Clark, Minh-Thang Luong, Quoc V. Le, Christopher D. Manning |
| Year | 2020 |
| Institution | Google Brain, Stanford University |
| arXiv | [2003.10555](https://arxiv.org/abs/2003.10555) |
