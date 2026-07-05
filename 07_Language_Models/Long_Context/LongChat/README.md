# LongChat: Extending Context in Chat Language Models

## Overview

LongChat, released by LMSYS (the organization behind Vicuna and Chatbot Arena) in 2023, addresses the challenge of extending context windows in chat-oriented language models. Through a combination of condensed rotary positional embeddings and fine-tuning on long conversations, LongChat extends Llama-based chat models from 2K to 16K-32K tokens while maintaining conversational quality.

## Architecture Details

- **Type:** Decoder-only Transformer (extended context chat model)
- **Base Models:** LLaMA-13B (LongChat-13B-16K)
- **Parameters:** 7B, 13B
- **Original Context:** 2048 tokens
- **Extended Context:** 16K tokens (LongChat-16K), 32K tokens (LongChat-32K)
- **Method:** Condensed rotary positional embeddings + long-context fine-tuning
- **Position Encoding:** Condensed RoPE (position interpolation)
- **Training Data:** Long conversations and documents

## Key Innovations

1. **Condensed Rotary Embeddings:** Interpolates RoPE positions to fit longer sequences into the same positional space
2. **Long Conversation Fine-Tuning:** Trained on extended multi-turn dialogues for chat coherence
3. **Position Interpolation:** Linear down-scaling of position indices for smooth extension
4. **Chat-Optimized:** Specifically designed for multi-turn conversational use cases
5. **Evaluation Framework:** Introduced long-context evaluation metrics and benchmarks

## Performance Highlights

- Maintains conversation quality at 16K token context
- Strong retrieval performance throughout extended context window
- Good coherence on multi-turn dialogues with long history
- LongChat-13B-16K competitive with GPT-3.5-16K on long-context tasks
- Practical for document-grounded chat applications

## Paper Reference

| Field | Details |
|-------|---------|
| Title | How Long Can Open-Source LLMs Truly Promise on Context Length? |
| Authors | Lianmin Zheng, Liangsheng Yin, Zhiqiang Xie, et al. |
| Year | 2023 |
| Institution | LMSYS Org (UC Berkeley) |
| Link | [LMSYS Blog](https://lmsys.org/blog/2023-06-29-longchat/) |
