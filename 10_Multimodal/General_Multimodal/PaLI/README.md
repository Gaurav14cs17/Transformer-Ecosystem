# PaLI — Pathways Language and Image Model

## Overview

PaLI (Pathways Language and Image model) is a jointly-scaled multilingual vision-language model from Google that combines a large ViT (ViT-e, 4B parameters) with a large language model (mT5-XXL, 13B parameters) for a total of 17B parameters. It processes images and text in a unified sequence-to-sequence framework, achieving state-of-the-art results across a wide range of vision-language benchmarks in over 100 languages.

## Architecture & Mechanism

PaLI follows a simple encoder-decoder design:

1. **Vision encoder**: ViT-e (4B parameters) processes the image into a sequence of visual tokens. The ViT is pre-trained using the JFT classification dataset.
2. **Language model**: mT5-XXL encoder-decoder (13B parameters) processes the concatenated visual and text tokens.
3. **Input format**: Visual tokens from the ViT are concatenated with text tokens and fed to the mT5 encoder. The decoder generates the output text.
4. **Multilingual**: The mT5 backbone supports 100+ languages, enabling multilingual visual question answering, captioning, and OCR.
5. **Training**: Multi-task mixture of captioning, VQA, OCR, and classification tasks across multiple datasets.

## Key Innovations

- **Joint scaling**: Both the vision encoder (4B) and language model (13B) are scaled together, showing that scaling both components yields compounding improvements.
- **Multilingual vision-language**: One of the first models to handle visual tasks in 100+ languages.
- **Simple architecture**: Direct concatenation of visual and text tokens — no special cross-attention or adapter modules.
- **Strong zero-shot**: Competitive zero-shot performance on many benchmarks without task-specific training.
- **OCR-capable**: Natively reads text in images across multiple scripts.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| PaLI: A Jointly-Scaled Multilingual Language-Image Model (Chen et al.) | 2022 | [arXiv:2209.06794](https://arxiv.org/abs/2209.06794) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
