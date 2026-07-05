# GLM-5: Large-Scale Training on Huawei Ascend Chips

## Overview

GLM-5, released by Zhipu AI in 2025, is a 744B parameter model notable for being trained entirely on Huawei Ascend AI chips rather than NVIDIA GPUs. This represents a significant milestone for the Chinese AI ecosystem's push toward hardware independence. GLM-5 achieves competitive performance with global frontier models while demonstrating the viability of domestic Chinese AI hardware for large-scale training.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 744B
- **Context Length:** 128K+ tokens
- **Hardware:** Trained on Huawei Ascend 910B chips
- **Attention:** Optimized MHA for Ascend architecture
- **Normalization:** RMSNorm
- **Activation:** SwiGLU
- **Position Encoding:** RoPE
- **Training:** Distributed training with custom Ascend-optimized framework

## Key Innovations

1. **Ascend-Native Training:** First frontier-scale model trained entirely on Huawei Ascend hardware
2. **Hardware-Software Co-optimization:** Training framework optimized for Ascend chip topology
3. **Scale on Domestic Hardware:** Demonstrates viability of non-NVIDIA large-scale training
4. **Advanced Parallelism:** Custom tensor/pipeline/data parallelism strategies for Ascend clusters
5. **Bilingual Frontier:** Strong Chinese and English performance at 744B scale

## Performance Highlights

- Competitive with GPT-4-class models on Chinese language tasks
- Strong reasoning and knowledge benchmarks
- Demonstrates hardware-independent path for frontier AI
- Good multilingual and tool-use capabilities
- Proves large-scale training viability on Chinese AI chips

## Paper Reference

| Field | Details |
|-------|---------|
| Title | GLM-5 Technical Report |
| Authors | Zhipu AI |
| Year | 2025 |
| Institution | Zhipu AI |
| Link | [Zhipu AI](https://www.zhipuai.cn/) |
