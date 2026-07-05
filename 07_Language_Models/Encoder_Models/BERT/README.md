# BERT: Bidirectional Encoder Representations from Transformers

## Overview

BERT (Bidirectional Encoder Representations from Transformers), released by Google AI in October 2018, revolutionized NLP by introducing bidirectional pre-training of Transformers. Unlike previous models that read text left-to-right or right-to-left, BERT reads the entire sequence simultaneously, enabling deeper understanding of language context. BERT became the foundation for a new era of transfer learning in NLP.

## Architecture Details

- **Type:** Encoder-only Transformer
- **Variants:** BERT-Base (110M), BERT-Large (340M)
- **BERT-Base:** 12 layers, 768 hidden, 12 heads
- **BERT-Large:** 24 layers, 1024 hidden, 16 heads
- **Context Length:** 512 tokens
- **Vocabulary:** WordPiece (30,522 tokens)
- **Normalization:** LayerNorm
- **Activation:** GELU
- **Position Encoding:** Learned absolute positional embeddings
- **Training Data:** BooksCorpus + English Wikipedia (3.3B words)

## Key Innovations

1. **Masked Language Modeling (MLM):** Randomly masks 15% of tokens and predicts them, enabling bidirectional context
2. **Next Sentence Prediction (NSP):** Binary classification of sentence pair relationships
3. **Bidirectional Context:** Both left and right context used simultaneously for every token
4. **Fine-Tuning Paradigm:** Single architecture adaptable to diverse downstream tasks with minimal changes
5. **[CLS] Token:** Special token for classification tasks; [SEP] for sentence boundaries

## Performance Highlights

- State-of-the-art on 11 NLP benchmarks at release
- GLUE benchmark: 80.5% (7.7 point improvement over previous SOTA)
- SQuAD 1.1: F1 93.2 (surpassing human performance)
- Spawned hundreds of variants (RoBERTa, ALBERT, DistilBERT, etc.)
- Became the de facto standard for NLP feature extraction

## Paper Reference

| Field | Details |
|-------|---------|
| Title | BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding |
| Authors | Jacob Devlin, Ming-Wei Chang, Kenton Lee, Kristina Toutanova |
| Year | 2018 |
| Institution | Google AI |
| arXiv | [1810.04805](https://arxiv.org/abs/1810.04805) |
