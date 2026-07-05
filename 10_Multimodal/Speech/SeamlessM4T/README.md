# SeamlessM4T — Massively Multilingual & Multimodal Machine Translation

## Overview

SeamlessM4T from Meta is a foundational multilingual and multimodal translation model that supports speech-to-speech, speech-to-text, text-to-speech, and text-to-text translation across nearly 100 languages. It unifies all translation modalities in a single model, enabling seamless communication across languages and modalities without cascading separate ASR, MT, and TTS systems.

## Architecture & Mechanism

SeamlessM4T uses a unified encoder-decoder architecture:

1. **Speech encoder**: w2v-BERT 2.0 (self-supervised speech model) processes input speech into representations, followed by a length adapter that compresses the speech sequence.
2. **Text encoder**: Standard Transformer text encoder for text input.
3. **Shared decoder**: A single Transformer decoder generates output in the target modality (text tokens or speech units).
4. **Text-to-Unit model (T2U)**: For speech output, a separate Transformer converts text decoder output to discrete speech units (HuBERT-derived).
5. **Vocoder**: A unit-based HiFi-GAN vocoder converts discrete speech units to waveform.
6. **Training data**: Mined from web data using SONAR (a multilingual/multimodal embedding space) for parallel data discovery.

## Key Innovations

- **Unified multimodal translation**: A single model replaces cascades of ASR + MT + TTS systems, reducing error propagation.
- **Nearly 100 languages**: Supports speech recognition in ~100 languages, speech-to-text translation for ~100 languages, and speech generation in ~35 languages.
- **SONAR data mining**: Novel embedding-based parallel data mining enables large-scale training data acquisition.
- **SeamlessAlign**: The largest open multimodal translation dataset (470K hours of speech-text alignments).
- **Streaming support**: SeamlessM4T v2 (SeamlessStreaming) adds simultaneous translation capabilities.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| SeamlessM4T: Massively Multilingual & Multimodal Machine Translation (Barrault et al.) | 2023 | [arXiv:2308.11596](https://arxiv.org/abs/2308.11596) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
