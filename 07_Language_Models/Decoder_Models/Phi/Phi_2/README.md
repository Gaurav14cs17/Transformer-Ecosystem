# Phi-2: Small Language Model with Outsized Performance

## Overview

Phi-2, released by Microsoft Research in December 2023, is a 2.7B parameter model that continues the Phi series' focus on data quality over model size. Trained on a mixture of synthetic textbook-quality data and carefully filtered web data, Phi-2 demonstrates near state-of-the-art performance among models under 13B parameters, outperforming many much larger models on complex reasoning tasks.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 2.7B
- **Layers:** 32
- **Hidden Size:** 2560
- **Attention Heads:** 32
- **Context Length:** 2048 tokens
- **Vocabulary:** CodeGen tokenizer (50,295 tokens)
- **Activation:** GELU
- **Training Data:** 1.4T tokens (synthetic + filtered web)
- **Training Compute:** 14 days on 96 A100 GPUs

## Key Innovations

1. **Scaled Data Quality:** Extended textbook-quality approach to general knowledge domains
2. **Knowledge Transfer:** Leveraged knowledge from Phi-1.5 through curriculum learning
3. **Synthetic + Web Mix:** Combined GPT-4-generated synthetic data with curated web content
4. **No RLHF:** Achieves strong instruction following without reinforcement learning
5. **Reasoning Focus:** Training data curated for logical and analytical reasoning

## Performance Highlights

- Outperforms Llama 2 7B and Mistral 7B on many reasoning benchmarks
- Competitive with Llama 2 70B on multi-step reasoning tasks
- MMLU: 56.7% (surpassing models 5× its size)
- GSM8K: 57.2%
- Strong coding performance (HumanEval: 47.6%)
- Excellent common-sense reasoning for its size

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Phi-2: The Surprising Power of Small Language Models |
| Authors | Microsoft Research |
| Year | 2023 |
| Institution | Microsoft Research |
| Link | [Microsoft Research Blog](https://www.microsoft.com/en-us/research/blog/phi-2-the-surprising-power-of-small-language-models/) |
