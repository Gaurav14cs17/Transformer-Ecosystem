# ModernBERT: Modern Improvements to BERT Architecture

## Overview

ModernBERT (2024) applies modern architectural improvements discovered in the decoder-only LLM era back to the BERT encoder architecture. By incorporating techniques like RoPE, GeGLU activations, Flash Attention, unpadding, and training on significantly more data with modern optimizers, ModernBERT achieves substantially better performance than the original BERT while maintaining the encoder-only architecture suited for classification and retrieval tasks.

## Architecture Details

- **Type:** Encoder-only Transformer (modernized)
- **Parameters:** 140M (Base), 395M (Large)
- **Layers:** 22 (Base), 28 (Large)
- **Hidden Size:** 768 (Base), 1024 (Large)
- **Attention Heads:** 12 (Base), 16 (Large)
- **Context Length:** 8192 tokens
- **Vocabulary:** Improved tokenizer (~50K tokens)
- **Attention:** Flash Attention 2 with alternating local/global attention
- **Normalization:** RMSNorm (pre-normalization)
- **Activation:** GeGLU
- **Position Encoding:** RoPE (replacing learned absolute)

## Key Innovations

1. **RoPE Positional Encoding:** Replaced learned absolute positions with rotary embeddings
2. **GeGLU Activation:** Modern gated activation function replacing GELU
3. **Flash Attention 2:** Hardware-efficient attention with unpadding for variable-length sequences
4. **Alternating Attention:** Mix of local sliding-window and global attention layers
5. **8192 Context Length:** 16× increase over original BERT's 512
6. **Modern Training:** Trained on 2T tokens with modern optimizer and schedule
7. **Unpadding:** Efficient handling of variable-length sequences without wasted computation

## Performance Highlights

- Significantly outperforms BERT, RoBERTa on all NLU benchmarks
- Competitive with or exceeds DeBERTa V3 on many tasks
- 8192 context enables long-document classification and retrieval
- Efficient inference with Flash Attention and unpadding
- Strong on information retrieval and code search tasks

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Smarter, Better, Faster, Longer: A Modern Bidirectional Encoder for Fast, Memory Efficient, and Long Context Finetuning and Inference |
| Authors | Benjamin Warner, Antoine Chaffin, Benjamin Clavié, et al. |
| Year | 2024 |
| Institution | Answer.AI, LightOn |
| arXiv | [2412.13663](https://arxiv.org/abs/2412.13663) |
