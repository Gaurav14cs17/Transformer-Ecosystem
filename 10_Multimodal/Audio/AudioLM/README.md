# AudioLM — A Language Modeling Approach to Audio Generation

## Overview

AudioLM from Google frames audio generation as a language modeling task over discrete audio tokens. It generates high-quality, coherent audio (speech and music) by hierarchically modeling semantic tokens (from a self-supervised model) and acoustic tokens (from a neural codec), enabling long-term coherent generation while maintaining high audio fidelity.

## Architecture & Mechanism

AudioLM uses a hierarchical tokenization and generation approach:

1. **Semantic tokens**: A self-supervised speech model (w2v-BERT) produces semantic tokens that capture high-level content (linguistic content, musical structure) but lack acoustic detail.
2. **Acoustic tokens**: A neural audio codec (SoundStream) produces multi-level acoustic tokens that capture fine acoustic details (timbre, recording conditions) at multiple quantization levels.
3. **Hierarchical generation**:
   - **Stage 1**: A Transformer language model generates semantic tokens autoregressively.
   - **Stage 2**: A second Transformer generates coarse acoustic tokens conditioned on semantic tokens.
   - **Stage 3**: A third Transformer generates fine acoustic tokens conditioned on coarse acoustic tokens.
4. **Audio reconstruction**: SoundStream decoder converts acoustic tokens back to waveform.

## Key Innovations

- **Language modeling for audio**: Treats audio generation as next-token prediction, leveraging the power of Transformer language models.
- **Semantic-acoustic hierarchy**: Separating content (semantic) from acoustics (codec) enables coherent long-term structure with high fidelity.
- **No text supervision needed**: Generates speech and music without paired text-audio data.
- **Coherent continuation**: Given a few seconds of audio prompt, generates natural continuations that maintain speaker identity, prosody, and musical structure.
- **Foundation for subsequent work**: Inspired MusicLM, SoundStorm, and other audio generation models.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| AudioLM: a Language Modeling Approach to Audio Generation (Borsos et al.) | 2022 | [arXiv:2209.03143](https://arxiv.org/abs/2209.03143) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
