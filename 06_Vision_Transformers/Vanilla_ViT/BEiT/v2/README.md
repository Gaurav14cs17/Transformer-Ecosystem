# BEiT v2 — Masked Image Modeling with Vector-Quantized Knowledge Distillation

## Overview

BEiT v2 improves upon BEiT by replacing the external dVAE tokenizer with a Vector-Quantized Knowledge Distillation (VQ-KD) tokenizer that produces semantically meaningful visual tokens. The key insight is that reconstruction targets should encode semantic information rather than low-level visual patterns, leading to significantly better pre-trained representations.

## Architecture & Mechanism

BEiT v2 introduces a two-component system:

1. **VQ-KD tokenizer**: A new visual tokenizer trained via knowledge distillation from a teacher (e.g., CLIP or DINO). The tokenizer encodes patches into discrete codes from a learned codebook where each code carries semantic meaning.
   - Encoder maps patches to continuous features.
   - Vector quantization maps features to nearest codebook entries.
   - Decoder is trained to reconstruct teacher features (not pixels).
2. **Masked image modeling**: Same as BEiT — mask patches and predict the VQ-KD tokens.
3. **Global representation**: A patch aggregation strategy provides a global image representation for fine-tuning.

## Key Innovations

- **Semantic visual tokens**: VQ-KD tokens capture high-level semantics (from CLIP/DINO teachers) rather than low-level visual details (from dVAE).
- **Better pre-training targets**: Semantic tokens provide a more informative training signal for the ViT.
- **Patch aggregation**: Improved global feature extraction for classification tasks.
- **State-of-the-art MIM**: Achieves 85.5% on ImageNet-1K with ViT-B, significantly outperforming BEiT v1.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| BEiT v2: Masked Image Modeling with Vector-Quantized Visual Tokenizers (Peng et al.) | 2022 | [arXiv:2208.06366](https://arxiv.org/abs/2208.06366) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
