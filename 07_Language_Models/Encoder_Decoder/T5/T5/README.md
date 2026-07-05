# T5: Text-to-Text Transfer Transformer

## Overview

T5 (Text-to-Text Transfer Transformer), released by Google Research in October 2019, introduced a unified text-to-text framework where every NLP task — classification, translation, summarization, QA — is cast as generating text conditioned on text input. The accompanying "Colossal Clean Crawled Corpus" (C4) and systematic study of transfer learning established best practices for the field.

## Architecture Details

- **Type:** Encoder-Decoder Transformer
- **Parameters:** Small (60M), Base (220M), Large (770M), 3B, 11B
- **Encoder/Decoder:** Equal depth (12 layers for Base, 24 for Large)
- **Hidden Size:** 768 (Base), 1024 (Large), 1024 (3B/11B)
- **Attention Heads:** 12 (Base), 16 (Large)
- **Context Length:** 512 tokens (input + output)
- **Vocabulary:** SentencePiece (32,000 tokens)
- **Normalization:** RMSNorm (pre-normalization)
- **Position Encoding:** Relative position bias (learned)
- **Training Data:** C4 (Colossal Clean Crawled Corpus, ~750GB)

## Key Innovations

1. **Text-to-Text Framework:** Unified input/output format for all NLP tasks
2. **C4 Dataset:** Introduced the Colossal Clean Crawled Corpus (publicly available)
3. **Systematic Study:** Comprehensive comparison of architectures, objectives, and strategies
4. **Relative Position Bias:** Learned relative attention biases instead of absolute embeddings
5. **Span Corruption:** Pre-training objective masking contiguous spans of tokens
6. **Multi-Task Mixture:** Pre-trained on multiple tasks simultaneously

## Performance Highlights

- State-of-the-art on SuperGLUE, SQuAD, and summarization at release
- T5-11B: SuperGLUE 90.3 (near human performance)
- Excellent on summarization (CNN/DailyMail, XSum)
- Strong translation performance despite text-only approach
- Foundation for subsequent models (Flan-T5, UL2, PaLM)

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer |
| Authors | Colin Raffel, Noam Shazeer, Adam Roberts, et al. |
| Year | 2019 |
| Institution | Google Research |
| arXiv | [1910.10683](https://arxiv.org/abs/1910.10683) |
