# SpeechT5 — Unified-Modal Encoder-Decoder Pre-Training for Spoken Language Processing

## Overview

SpeechT5 is a unified speech-text pre-training framework that uses a shared encoder-decoder backbone with modality-specific pre/post-networks. By treating speech and text as interchangeable modalities through a shared latent representation, SpeechT5 supports multiple spoken language processing tasks including automatic speech recognition (ASR), text-to-speech (TTS), speech translation, voice conversion, and speech enhancement.

## Architecture & Mechanism

SpeechT5 uses a shared-backbone architecture with modality adapters:

1. **Pre-nets** (modality-specific encoders):
   - **Speech pre-net**: Converts speech spectrograms to a sequence of hidden representations using a convolutional feature extractor.
   - **Text pre-net**: Embeds text tokens using a standard embedding layer + positional encoding.
2. **Shared encoder-decoder**: A Transformer encoder-decoder backbone processes the hidden representations regardless of input modality.
3. **Post-nets** (modality-specific decoders):
   - **Speech post-net**: Generates mel-spectrograms from the decoder output, followed by a vocoder (HiFi-GAN) for waveform synthesis.
   - **Text post-net**: A linear layer + softmax produces text token probabilities.
4. **Pre-training**: Cross-modal objectives (speech-to-text, text-to-speech) and within-modal objectives (masked modeling) are combined.

## Key Innovations

- **Unified framework**: A single pre-trained model handles ASR, TTS, speech translation, voice conversion, and speech enhancement.
- **Shared representation**: Speech and text are mapped to a shared latent space, enabling cross-modal transfer learning.
- **Modality-specific adapters**: Lightweight pre/post-nets adapt the shared backbone to each modality with minimal additional parameters.
- **Multi-task fine-tuning**: The pre-trained model can be fine-tuned for any speech-text task.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| SpeechT5: Unified-Modal Encoder-Decoder Pre-Training for Spoken Language Processing (Ao et al.) | 2021 | [arXiv:2110.07205](https://arxiv.org/abs/2110.07205) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
