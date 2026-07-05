# GPT-1: Improving Language Understanding by Generative Pre-Training

## Overview

GPT-1 (Generative Pre-trained Transformer 1) was introduced by OpenAI in 2018 as one of the first models to demonstrate that unsupervised pre-training on large text corpora followed by supervised fine-tuning could achieve strong performance across diverse NLP tasks. It established the paradigm of "pre-train then fine-tune" that dominated NLP for years.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 117M
- **Layers:** 12 Transformer decoder blocks
- **Hidden Size:** 768
- **Attention Heads:** 12
- **Context Length:** 512 tokens
- **Vocabulary:** BPE with 40,000 merges
- **Activation:** GELU

## Key Innovations

1. **Unsupervised Pre-training:** Language modeling on BooksCorpus (7,000 unpublished books) to learn general representations
2. **Supervised Fine-tuning:** Task-specific adaptation with minimal architectural changes using traversal-style input transformations
3. **Transfer Learning for NLP:** Demonstrated that a single pre-trained model could be fine-tuned for classification, entailment, similarity, and QA tasks

## Performance Highlights

- Achieved state-of-the-art on 9 out of 12 NLP benchmarks at time of release
- Significant improvements on commonsense reasoning (Stories Cloze: +8.9%)
- Strong gains on textual entailment and semantic similarity tasks

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Improving Language Understanding by Generative Pre-Training |
| Authors | Alec Radford, Karthik Narasimhan, Tim Salimans, Ilya Sutskever |
| Year | 2018 |
| Institution | OpenAI |
| Link | [OpenAI Blog](https://openai.com/research/language-unsupervised) |
