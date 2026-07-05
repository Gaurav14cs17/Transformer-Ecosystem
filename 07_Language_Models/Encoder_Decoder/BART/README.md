# BART: Denoising Sequence-to-Sequence Pre-training

## Overview

BART (Bidirectional and Auto-Regressive Transformers), released by Facebook AI in October 2019, combines the bidirectional encoder of BERT with the autoregressive decoder of GPT into a standard sequence-to-sequence architecture. Pre-trained as a denoising autoencoder that reconstructs corrupted text, BART excels at generation tasks like summarization, translation, and question answering.

## Architecture Details

- **Type:** Encoder-Decoder Transformer
- **Parameters:** 140M (Base), 406M (Large)
- **Encoder:** 6 layers (Base), 12 layers (Large) — bidirectional
- **Decoder:** 6 layers (Base), 12 layers (Large) — autoregressive
- **Hidden Size:** 768 (Base), 1024 (Large)
- **Attention Heads:** 12 (Base), 16 (Large)
- **Context Length:** 1024 tokens
- **Vocabulary:** GPT-2 BPE (50,265 tokens)
- **Normalization:** LayerNorm
- **Activation:** GELU

## Key Innovations

1. **Flexible Noising:** Explores multiple corruption schemes: token masking, deletion, infilling, rotation, permutation
2. **Text Infilling:** Replaces spans with a single mask token (arbitrary length spans)
3. **Sentence Permutation:** Shuffles document sentences as a noising technique
4. **Seq2Seq Architecture:** Encoder processes corrupted input; decoder generates original text
5. **Versatile Generation:** Naturally suited for any text generation task

## Performance Highlights

- State-of-the-art on CNN/DailyMail summarization (44.16 ROUGE-L)
- Strong on XSum abstractive summarization
- Competitive on SQuAD 2.0 question answering (F1: 88.5)
- Excellent for dialogue, translation, and text correction
- Foundation for many downstream generation systems

## Paper Reference

| Field | Details |
|-------|---------|
| Title | BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension |
| Authors | Mike Lewis, Yinhan Liu, Naman Goyal, et al. |
| Year | 2019 |
| Institution | Facebook AI Research |
| arXiv | [1910.13461](https://arxiv.org/abs/1910.13461) |
