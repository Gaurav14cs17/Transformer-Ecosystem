# LongLLaMA: Focused Transformer for Long-Context Language Models

## Overview

LongLLaMA, released in 2023, extends the LLaMA architecture to handle significantly longer contexts through the Focused Transformer (FoT) method. By using a contrastive learning approach to improve the attention mechanism's ability to distinguish relevant from irrelevant information in long contexts, LongLLaMA achieves strong performance on sequences far longer than its training length.

## Architecture Details

- **Type:** Decoder-only Transformer (extended context)
- **Base Model:** LLaMA (various sizes, primarily 3B and 7B)
- **Original Context:** 2048 tokens
- **Extended Context:** 100K+ tokens (via FoT)
- **Method:** Focused Transformer with memory attention
- **Memory:** External memory bank for key-value pairs
- **Attention:** Standard + cross-attention to memory
- **Position Encoding:** RoPE (inherited from LLaMA)

## Key Innovations

1. **Focused Transformer (FoT):** Contrastive learning objective to improve attention precision over long contexts
2. **External Memory:** Stores key-value representations from past context in memory bank
3. **Distractor Resistance:** Training with contrastive "distractors" makes attention more selective
4. **Length Generalization:** Handles contexts far beyond training length without quality degradation
5. **Plug-and-Play:** Can be applied to existing LLaMA-based models through continued training

## Performance Highlights

- Maintains perplexity quality at 100K+ context length
- Strong passkey retrieval at extreme lengths
- Improved long-range dependency modeling
- Effective on document QA and long-form reasoning
- Demonstrates viable path to extending pre-trained model context

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Focused Transformer: Contrastive Training for Context Scaling |
| Authors | Szymon Tworkowski, Konrad Staniszewski, Mikołaj Pacek, et al. |
| Year | 2023 |
| Institution | IDEAS NCBR, University of Warsaw |
| arXiv | [2307.03170](https://arxiv.org/abs/2307.03170) |
