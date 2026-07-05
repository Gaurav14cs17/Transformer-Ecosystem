# YaRN — Yet Another RoPE Extension

## Overview

YaRN (Yet another RoPE extensioN) is a context window extension method that combines NTK-aware interpolation with a "NTK-by-parts" strategy. It allows pre-trained LLMs to handle significantly longer sequences (up to 128k tokens) with minimal fine-tuning, outperforming previous interpolation methods like PI and NTK-aware scaling.

## Architecture & Mechanism

YaRN operates on the RoPE frequency basis with a multi-pronged approach:

- **NTK-by-parts interpolation**: Divides RoPE dimensions into three groups based on their wavelength relative to the original context length:
  - **High-frequency dimensions** (wavelength < original length): No interpolation applied; these already capture local patterns well.
  - **Low-frequency dimensions** (wavelength > original length): Full linear interpolation applied.
  - **Medium-frequency dimensions**: A smooth ramp interpolates between no scaling and full scaling.
- **Temperature scaling**: A global attention temperature factor `√(1/t)` compensates for the entropy increase caused by interpolation, maintaining attention sharpness.
- **Minimal fine-tuning**: Only ~400 training steps on long documents are needed to adapt a model.

## Key Innovations

- **NTK-by-parts**: Selectively interpolates only the dimensions that need it, preserving high-frequency local position information.
- **Attention temperature correction**: Addresses the softmax entropy issue that degrades interpolation quality.
- **Compute efficient**: Requires only 0.1% of original pre-training compute for adaptation.
- **Broad applicability**: Works with LLaMA, Mistral, and other RoPE-based models.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| YaRN: Efficient Context Window Extension of Large Language Models (Peng et al.) | 2023 | [arXiv:2309.00071](https://arxiv.org/abs/2309.00071) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
