# Whisper — Robust Speech Recognition via Large-Scale Weak Supervision

## Overview

Whisper from OpenAI is a general-purpose speech recognition model trained on 680,000 hours of multilingual and multitask weakly-supervised web audio. By training on a massive and diverse dataset, Whisper achieves robust speech recognition that generalizes well to many domains and languages without fine-tuning, approaching human-level performance on standard benchmarks.

## Architecture & Mechanism

Whisper uses a standard encoder-decoder Transformer architecture:

1. **Audio processing**: Input audio is converted to an 80-channel log-mel spectrogram with 25ms windows and 10ms stride.
2. **Encoder**: A Transformer encoder (with sinusoidal positional embeddings and two initial convolution layers) processes 30-second audio segments, producing audio feature representations.
3. **Decoder**: A Transformer decoder generates text tokens autoregressively, with cross-attention to the encoder output.
4. **Multitask format**: Special tokens control the task:
   - `<|language|>`: Language identification
   - `<|transcribe|>` or `<|translate|>`: Transcription or English translation
   - `<|timestamps|>`: Optional word-level timestamp prediction
5. **Training data**: 680K hours of audio from the internet with automatically generated transcripts (weak supervision).

## Key Innovations

- **Scale of weak supervision**: 680K hours is 10-100× larger than previous speech datasets; weak labels from the internet are sufficient for strong performance.
- **Robustness**: Generalizes across accents, background noise, technical jargon, and recording conditions far better than models trained on clean speech.
- **Multilingual**: Supports 99 languages for recognition and translation to English.
- **Zero-shot generalization**: Competitive with fine-tuned models on many benchmarks without any task-specific training.
- **Multitask**: A single model handles transcription, translation, language identification, and timestamp prediction.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Robust Speech Recognition via Large-Scale Weak Supervision (Radford et al.) | 2022 | [arXiv:2212.04356](https://arxiv.org/abs/2212.04356) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
