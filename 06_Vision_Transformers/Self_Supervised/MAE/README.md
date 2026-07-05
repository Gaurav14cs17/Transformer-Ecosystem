# MAE — Masked Autoencoders Are Scalable Vision Learners

## Overview

Masked Autoencoders (MAE) is a self-supervised pre-training method that masks a high proportion (75%) of random image patches and trains a Vision Transformer to reconstruct the missing pixels. The asymmetric encoder-decoder design — where the encoder only processes visible patches — makes pre-training highly efficient, enabling training of very large ViTs with strong downstream performance.

## Architecture & Mechanism

MAE uses an asymmetric encoder-decoder architecture:

1. **Random masking**: 75% of image patches are randomly masked (much higher than BERT's 15% for text).
2. **Encoder**: A standard ViT encoder processes only the 25% visible patches (with positional embeddings). This is the key efficiency insight — the encoder never sees mask tokens.
3. **Decoder**: A lightweight Transformer decoder receives the full set of tokens: encoded visible patches + learnable mask tokens (with positional embeddings). It reconstructs pixel values for masked patches.
4. **Loss**: Mean Squared Error (MSE) on the pixel values of masked patches only. Optionally, normalized pixel values (per-patch normalization) improve quality.
5. **Fine-tuning**: Only the encoder is used for downstream tasks; the decoder is discarded.

## Key Innovations

- **High masking ratio**: 75% masking creates a challenging task that forces learning of holistic visual representations (images have more redundancy than text).
- **Asymmetric design**: Processing only visible patches (25%) in the heavy encoder reduces pre-training compute by ~3× vs. processing all tokens.
- **Scalable**: Enables efficient pre-training of ViT-Huge and ViT-Large models.
- **Simple pixel reconstruction**: No tokenizer (dVAE) or contrastive learning needed — just MSE on raw pixels.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Masked Autoencoders Are Scalable Vision Learners (He et al.) | 2021 | [arXiv:2111.06377](https://arxiv.org/abs/2111.06377) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
