# RoBERTa: A Robustly Optimized BERT Pretraining Approach

## Overview

RoBERTa (Robustly optimized BERT approach), released by Facebook AI (Meta) in July 2019, demonstrated that BERT was significantly undertrained and that performance could be substantially improved through careful optimization of the training procedure. By training longer, with bigger batches, on more data, and removing the Next Sentence Prediction objective, RoBERTa achieved state-of-the-art results.

## Architecture Details

- **Type:** Encoder-only Transformer (same as BERT-Large)
- **Parameters:** 125M (Base), 355M (Large)
- **Layers:** 24 (Large)
- **Hidden Size:** 1024 (Large)
- **Attention Heads:** 16 (Large)
- **Context Length:** 512 tokens
- **Vocabulary:** Byte-level BPE (50,265 tokens)
- **Normalization:** LayerNorm
- **Activation:** GELU
- **Training Data:** 160GB of text (10× BERT's data)

## Key Innovations

1. **No Next Sentence Prediction:** Removed NSP objective — shown to hurt or not help performance
2. **Dynamic Masking:** Different masking pattern for each epoch (vs. static in BERT)
3. **Larger Batches:** 8K batch size (vs. 256 for BERT)
4. **More Data:** Trained on 160GB (CC-News, OpenWebText, Stories) vs. BERT's 16GB
5. **Longer Training:** 500K steps with full-length sequences throughout
6. **Byte-Level BPE:** No unknown tokens, handles any text input

## Performance Highlights

- GLUE: 88.5 (vs. BERT's 80.5)
- SQuAD 2.0: F1 89.8
- RACE: 83.2
- Matched or exceeded XLNet on all benchmarks
- Became the default "improved BERT" for downstream tasks

## Paper Reference

| Field | Details |
|-------|---------|
| Title | RoBERTa: A Robustly Optimized BERT Pretraining Approach |
| Authors | Yinhan Liu, Myle Ott, Naman Goyal, et al. |
| Year | 2019 |
| Institution | Facebook AI Research |
| arXiv | [1907.11692](https://arxiv.org/abs/1907.11692) |
