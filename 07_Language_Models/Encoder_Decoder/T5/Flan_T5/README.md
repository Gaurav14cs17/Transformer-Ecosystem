# Flan-T5: Instruction-Tuned T5

## Overview

Flan-T5, released by Google Research in 2022, applies Flan (Fine-tuned Language Net) instruction tuning to T5 models. By fine-tuning on a mixture of 1,836 tasks formatted as instructions across diverse task types, Flan-T5 achieves dramatically better zero-shot and few-shot performance compared to the original T5, demonstrating the power of scaling instruction tuning.

## Architecture Details

- **Type:** Encoder-Decoder Transformer (instruction-tuned T5)
- **Parameters:** Small (80M), Base (250M), Large (780M), XL (3B), XXL (11B)
- **Base Architecture:** Same as T5 (encoder-decoder with relative position bias)
- **Context Length:** 512 tokens (input), 512 tokens (output)
- **Vocabulary:** SentencePiece (32,000 tokens)
- **Normalization:** RMSNorm
- **Position Encoding:** Relative position bias
- **Instruction Tuning:** 1,836 tasks from 473 datasets, 146 task categories

## Key Innovations

1. **Massive Instruction Tuning:** Fine-tuned on 1,836 tasks with diverse instruction templates
2. **Chain-of-Thought Tuning:** Includes CoT reasoning data in the fine-tuning mixture
3. **Task Scaling:** More tasks → better generalization to unseen tasks
4. **Zero-Shot Generalization:** Strong performance on tasks never seen during training
5. **Input Inversion:** Tasks formatted both as "input → output" and "output → input"

## Performance Highlights

- Flan-T5-XXL outperforms T5-XXL by 10%+ on average across benchmarks
- Strong zero-shot performance rivaling few-shot GPT-3
- MMLU (zero-shot): 55.1% (XXL)
- Excellent instruction following for its size
- Best open instruction-tuned model available at time of release

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Scaling Instruction-Finetuned Language Models |
| Authors | Hyung Won Chung, Le Hou, Shayne Longpre, et al. |
| Year | 2022 |
| Institution | Google Research |
| arXiv | [2210.11416](https://arxiv.org/abs/2210.11416) |
