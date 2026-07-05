# GPT-3: Language Models are Few-Shot Learners

## Overview

GPT-3, released by OpenAI in 2020, scaled the GPT architecture to 175 billion parameters and demonstrated remarkable few-shot and in-context learning abilities. Without any gradient updates or fine-tuning, GPT-3 could perform tasks by simply conditioning on a few examples provided in the prompt, fundamentally changing how practitioners interact with language models.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 175B (largest variant)
- **Model Variants:** 125M, 350M, 760M, 1.3B, 2.7B, 6.7B, 13B, 175B
- **Layers:** 96
- **Hidden Size:** 12288
- **Attention Heads:** 96
- **Context Length:** 2048 tokens
- **Training Data:** ~570GB filtered text (Common Crawl, WebText2, Books, Wikipedia)
- **Compute:** ~3640 petaflop/s-days

## Key Innovations

1. **In-Context Learning:** Task performance through prompt engineering without weight updates
2. **Few-Shot Prompting:** Dramatic performance improvements with just a handful of demonstrations
3. **Emergent Abilities:** Novel capabilities appearing at scale (arithmetic, code generation, translation)
4. **Scaling Laws Validated:** Confirmed smooth power-law improvements with increased model size and compute

## Performance Highlights

- Near state-of-the-art on many NLP benchmarks without fine-tuning
- Strong performance on novel tasks like arithmetic and word unscrambling
- SuperGLUE: 71.8 (few-shot) vs. human baseline of 89.8
- TriviaQA: 71.2% accuracy (closed-book, few-shot)

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Language Models are Few-Shot Learners |
| Authors | Tom Brown, Benjamin Mann, Nick Ryder, et al. |
| Year | 2020 |
| Institution | OpenAI |
| arXiv | [2005.14165](https://arxiv.org/abs/2005.14165) |
