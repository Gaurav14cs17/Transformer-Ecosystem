# LLaVA-1.5 — Improved Baselines with Visual Instruction Tuning

## Overview

LLaVA-1.5 significantly improves upon the original LLaVA with simple modifications: upgrading the linear projection to a two-layer MLP, using higher resolution (336px), adding academic task-oriented VQA data to training, and scaling the LLM. These straightforward changes achieve state-of-the-art results on 11 benchmarks, establishing strong baselines that many subsequent VLMs build upon.

## Architecture & Mechanism

LLaVA-1.5 refines the LLaVA architecture:

1. **Vision encoder**: CLIP ViT-L/14@336px (higher resolution than LLaVA's 224px), producing 576 visual tokens.
2. **MLP projection**: Two-layer MLP with GELU activation (replacing the single linear layer), providing better cross-modal alignment.
3. **LLM**: Vicuna-13B (or Vicuna-7B for the smaller variant).
4. **Training data**: Adds ShareGPT data and academic VQA datasets (VQAv2, GQA, OCR-VQA, TextVQA, VisualGenome) to the instruction tuning mixture, totaling ~665K samples.
5. **Training**: Same two-stage process — pre-training (projection only) then fine-tuning (projection + LLM).

## Key Innovations

- **MLP connector**: The two-layer MLP significantly outperforms the linear projection by providing nonlinear cross-modal mapping.
- **Higher resolution**: 336px input captures more visual detail, critical for text reading and fine-grained understanding.
- **Academic VQA data**: Including structured VQA data improves performance on benchmarks without hurting conversational ability.
- **Strong baselines**: LLaVA-1.5-13B achieves state-of-the-art on 11 of 12 benchmarks at the time.
- **Reproducible**: Full training takes ~1 day on 8 A100 GPUs with publicly available data.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Improved Baselines with Visual Instruction Tuning (Liu et al.) | 2023 | [arXiv:2310.03744](https://arxiv.org/abs/2310.03744) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
