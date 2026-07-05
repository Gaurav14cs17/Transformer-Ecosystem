# DeBERTa: Decoding-enhanced BERT with Disentangled Attention

## Overview

DeBERTa (Decoding-enhanced BERT with disentangled Attention), released by Microsoft in June 2020, introduces two key innovations: disentangled attention that separates content and position information, and an enhanced mask decoder for pre-training. DeBERTa V3 achieved the first super-human performance on the SuperGLUE benchmark, establishing it as one of the strongest encoder models for NLU tasks.

## Architecture Details

- **Type:** Encoder-only Transformer
- **Parameters:** 134M (Base), 304M (Large), 750M (XLarge), 1.5B (XXLarge)
- **Layers:** 24 (Large), 48 (XLarge)
- **Hidden Size:** 1024 (Large), 1024 (XLarge)
- **Attention Heads:** 16 (Large)
- **Context Length:** 512 tokens (up to 2048 in some variants)
- **Vocabulary:** SentencePiece (128,000 tokens in V3)
- **Normalization:** LayerNorm
- **Activation:** GELU
- **Attention Type:** Disentangled (content-to-content, content-to-position, position-to-content)

## Key Innovations

1. **Disentangled Attention:** Separate matrices for content and positional attention (3 attention types)
2. **Enhanced Mask Decoder (EMD):** Incorporates absolute position in the decoding layer for MLM prediction
3. **Virtual Adversarial Training:** Improves model generalization through perturbation-based regularization
4. **Relative Position Bias:** Uses relative position encodings with disentangled matrices
5. **ELECTRA-Style Training (V3):** Replaced Token Detection for more efficient pre-training in V3

## Performance Highlights

- First model to surpass human performance on SuperGLUE (90.3 vs. 89.8)
- GLUE: 91.3 (XXLarge)
- SQuAD 2.0: F1 93.3
- SuperGLUE: 91.4 (DeBERTa V3)
- Consistently outperforms RoBERTa at equivalent model sizes

## Paper Reference

| Field | Details |
|-------|---------|
| Title | DeBERTa: Decoding-enhanced BERT with Disentangled Attention |
| Authors | Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen |
| Year | 2020 |
| Institution | Microsoft Research |
| arXiv | [2006.03654](https://arxiv.org/abs/2006.03654) |
