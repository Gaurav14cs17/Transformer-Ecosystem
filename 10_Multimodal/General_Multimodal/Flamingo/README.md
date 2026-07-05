# Flamingo — A Visual Language Model for Few-Shot Learning

## Overview

Flamingo from DeepMind is a family of visual language models (VLMs) that can perform few-shot learning on a wide range of multimodal tasks given only a handful of examples. It bridges a frozen vision encoder and a frozen language model with novel cross-attention-based gating layers, enabling the model to process interleaved image/video and text inputs for tasks like visual question answering, captioning, and classification.

## Architecture & Mechanism

Flamingo connects pre-trained vision and language models:

1. **Vision encoder**: A frozen NFNet (or CLIP) image encoder processes images/video frames into visual tokens.
2. **Perceiver Resampler**: A Perceiver-based module reduces the variable number of visual tokens to a fixed set of visual tokens (typically 64), regardless of input resolution or number of frames.
3. **Gated cross-attention**: Novel cross-attention layers are interleaved between frozen LM layers. Each gated cross-attention layer:
   - Attends from text tokens to visual tokens.
   - Uses a learned gating parameter (initialized to zero) that controls the contribution of visual information.
   - `output = LM_output + tanh(α) · CrossAttn(LM_output, visual_tokens)`
4. **Frozen backbones**: Both the vision encoder and language model are kept frozen; only the Perceiver Resampler and gated cross-attention layers are trained.

## Key Innovations

- **Few-shot multimodal learning**: Achieves strong performance with just 4-32 in-context examples, no fine-tuning needed.
- **Gated cross-attention**: Elegant integration mechanism that preserves LM capabilities while adding vision.
- **Perceiver Resampler**: Efficiently handles variable-length visual inputs (different resolutions, multiple frames).
- **Interleaved inputs**: Natively handles sequences of interleaved images and text, enabling in-context learning.
- **Frozen backbones**: Leverages pre-trained models without catastrophic forgetting.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Flamingo: a Visual Language Model for Few-Shot Learning (Alayrac et al.) | 2022 | [arXiv:2204.14198](https://arxiv.org/abs/2204.14198) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
