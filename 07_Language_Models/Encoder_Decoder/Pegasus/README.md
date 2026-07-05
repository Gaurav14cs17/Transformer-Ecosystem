# PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive Summarization

## Overview

PEGASUS (Pre-training with Extracted Gap-sentences for Abstractive Summarization), released by Google Research in 2019, introduces a self-supervised pre-training objective specifically designed for abstractive summarization. By masking entire sentences that are most "important" to the document (Gap Sentence Generation), PEGASUS achieves state-of-the-art summarization performance, particularly excelling with very few fine-tuning examples.

## Architecture Details

- **Type:** Encoder-Decoder Transformer
- **Parameters:** 568M (PEGASUS-Large)
- **Encoder Layers:** 16
- **Decoder Layers:** 16
- **Hidden Size:** 1024
- **Attention Heads:** 16
- **Context Length:** 1024 tokens (input), 256 tokens (output)
- **Vocabulary:** SentencePiece Unigram (96,000 tokens)
- **Normalization:** LayerNorm
- **Pre-training Data:** C4 + HugeNews (750GB + 3.8TB)

## Key Innovations

1. **Gap Sentence Generation (GSG):** Masks whole sentences (rather than tokens) and generates them as a pseudo-summary
2. **Principal Sentence Selection:** Selects important sentences using ROUGE-based scoring against the rest of the document
3. **Summarization-Specific Pre-training:** Objective directly mimics the downstream summarization task
4. **Few-Shot Efficiency:** Achieves near SOTA with only 1000 fine-tuning examples
5. **Combined Objectives:** GSG + masked language modeling for best performance

## Performance Highlights

- State-of-the-art on 12 summarization benchmarks at release
- CNN/DailyMail: 44.17 ROUGE-1
- XSum: 47.21 ROUGE-1
- Achieves 97% of SOTA with only 1000 fine-tuning examples
- Excellent on news, scientific, and conversational summarization

## Paper Reference

| Field | Details |
|-------|---------|
| Title | PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive Summarization |
| Authors | Jingqing Zhang, Yao Zhao, Mohammad Saleh, Peter J. Liu |
| Year | 2020 |
| Institution | Google Research |
| arXiv | [1912.08777](https://arxiv.org/abs/1912.08777) |
