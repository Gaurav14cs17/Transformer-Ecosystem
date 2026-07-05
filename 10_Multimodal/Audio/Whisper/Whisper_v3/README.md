# Whisper v3 — Improved Multilingual Speech Recognition

## Overview

Whisper v3 (large-v3) is the latest iteration of OpenAI's Whisper speech recognition model, featuring improved multilingual performance, reduced hallucination, and better handling of diverse audio conditions. It builds on the Whisper v2 architecture with expanded training data and refined training procedures, making it the most capable open-source speech recognition model available.

## Architecture & Mechanism

Whisper v3 uses the same base architecture as Whisper with refinements:

1. **Architecture**: Same encoder-decoder Transformer as Whisper large-v2 (1550M parameters, 32 encoder layers, 32 decoder layers).
2. **Improved training data**: Expanded multilingual training data with better coverage of low-resource languages and more diverse audio conditions.
3. **128 mel bins**: Increased from 80 to 128 mel-frequency bins in the spectrogram input, providing richer frequency resolution.
4. **Reduced hallucination**: Improved training procedures reduce the tendency to generate plausible-sounding but incorrect text for silent or noisy segments.
5. **Better timestamp accuracy**: Refined word-level and segment-level timestamp prediction.

## Key Innovations

- **Higher frequency resolution**: 128 mel bins (vs. 80) capture more acoustic detail, improving recognition of tonal languages and musical content.
- **Reduced hallucination**: Better handling of silence, background noise, and music reduces false transcriptions.
- **Improved multilingual performance**: Significant accuracy gains on low-resource languages.
- **Better long-form transcription**: Improved handling of long audio files with better segment-level chunking.
- **Open-source**: Freely available weights compatible with the Whisper ecosystem (faster-whisper, whisper.cpp, etc.).

## References

| **Model** | **Year** | **Link** |
|-----------|----------|----------|
| Whisper large-v3 | 2023 | [Hugging Face](https://huggingface.co/openai/whisper-large-v3) |
| Whisper (original paper) | 2022 | [arXiv:2212.04356](https://arxiv.org/abs/2212.04356) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
