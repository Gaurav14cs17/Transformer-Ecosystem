# XLNet: Generalized Autoregressive Pretraining for Language Understanding

## Overview

XLNet, released by CMU and Google Brain in June 2019, addresses limitations of BERT's masked language modeling by proposing a generalized autoregressive method based on permutation language modeling. By learning all possible factorization orders of a sequence, XLNet captures bidirectional context while avoiding BERT's pretrain-finetune discrepancy caused by [MASK] tokens that never appear at inference time.

## Architecture Details

- **Type:** Autoregressive Encoder (Transformer-XL based)
- **Parameters:** 340M (XLNet-Large)
- **Layers:** 24 (Large)
- **Hidden Size:** 1024
- **Attention Heads:** 16
- **Context Length:** 512 tokens (with segment recurrence enabling longer effective context)
- **Vocabulary:** SentencePiece (32,000 tokens)
- **Normalization:** LayerNorm
- **Activation:** GELU
- **Base Architecture:** Transformer-XL with relative positional encoding

## Key Innovations

1. **Permutation Language Modeling:** Factorizes likelihood over all possible token orderings
2. **Two-Stream Self-Attention:** Content stream + query stream for proper permutation handling
3. **Transformer-XL Integration:** Segment-level recurrence for capturing long-range dependencies
4. **Relative Positional Encoding:** Handles variable-length sequences naturally
5. **No [MASK] Token:** Avoids pretrain-finetune discrepancy present in BERT

## Performance Highlights

- Outperformed BERT on 20 NLP benchmarks at release
- SQuAD 2.0: F1 89.8 (improvement over BERT-Large)
- GLUE: 90.5
- Strong on long-context tasks due to Transformer-XL recurrence
- Particularly effective on tasks requiring long-range dependencies

## Paper Reference

| Field | Details |
|-------|---------|
| Title | XLNet: Generalized Autoregressive Pretraining for Language Understanding |
| Authors | Zhilin Yang, Zihang Dai, Yiming Yang, et al. |
| Year | 2019 |
| Institution | Carnegie Mellon University, Google Brain |
| arXiv | [1906.08237](https://arxiv.org/abs/1906.08237) |
