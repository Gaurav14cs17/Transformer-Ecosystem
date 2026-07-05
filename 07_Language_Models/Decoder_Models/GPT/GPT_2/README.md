# GPT-2: Language Models are Unsupervised Multitask Learners

## Overview

GPT-2 was released by OpenAI in 2019 and demonstrated that language models trained on sufficiently large and diverse datasets can perform downstream tasks in a zero-shot setting without any parameter or architecture modification. The model was initially withheld from full release due to concerns about misuse potential.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 1.5B (largest variant)
- **Model Variants:** 117M, 345M, 762M, 1.5B
- **Layers:** 48 (for 1.5B)
- **Hidden Size:** 1600
- **Attention Heads:** 25
- **Context Length:** 1024 tokens
- **Vocabulary:** Byte-level BPE with 50,257 tokens
- **Training Data:** WebText (40GB, 8M web documents)

## Key Innovations

1. **Zero-Shot Task Transfer:** Demonstrated that language models implicitly learn to perform tasks without explicit supervision
2. **Byte-Level BPE:** Enabled open-vocabulary generation without preprocessing or tokenization losses
3. **Scale as a Driver:** Showed consistent improvement with model scale across all tasks
4. **Layer Normalization:** Moved to pre-activation position; added final layer norm after last self-attention block

## Performance Highlights

- Achieved state-of-the-art on 7 out of 8 language modeling benchmarks in zero-shot
- Coherent multi-paragraph text generation
- Zero-shot reading comprehension: 55 F1 on CoQA (matching 3/4 baselines)

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Language Models are Unsupervised Multitask Learners |
| Authors | Alec Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei, Ilya Sutskever |
| Year | 2019 |
| Institution | OpenAI |
| Link | [OpenAI Blog](https://openai.com/research/better-language-models) |
