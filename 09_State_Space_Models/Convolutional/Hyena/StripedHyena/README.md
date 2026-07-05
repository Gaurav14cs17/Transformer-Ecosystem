# StripedHyena — Moving Beyond Transformers with Hybrid Signal Processing Models

## Overview

StripedHyena is a hybrid architecture from Together AI that interleaves Hyena (long convolution) layers with a small number of attention layers, creating a model that is faster than pure Transformers while maintaining strong language modeling performance. It demonstrates that a mixture of attention and convolutional layers provides the best quality-efficiency tradeoff.

## Architecture & Mechanism

StripedHyena combines two types of layers:

- **Hyena layers (majority)**: Long convolution + gating layers that process the sequence in O(N log N) time. These form the bulk of the architecture.
- **Attention layers (sparse)**: Standard multi-head self-attention layers placed at regular intervals (e.g., every 6th layer). These provide the in-context learning and recall capabilities that pure convolutional models struggle with.
- **Architecture variants**:
  - **StripedHyena-Hessian-7B**: A 7B parameter model with ~85% Hyena layers and ~15% attention layers.
  - **StripedHyena-Nous-7B**: Chat/instruction-tuned version.
- **Training**: Trained on large-scale text data with standard autoregressive language modeling objective.

## Key Innovations

- **Hybrid efficiency**: By using attention only where needed (for recall-heavy tasks) and Hyena elsewhere, the model achieves better efficiency-quality tradeoffs than either pure approach.
- **Faster inference**: Significantly reduced KV cache (only for the few attention layers) enables faster inference, especially on long sequences.
- **Long context**: Hyena layers scale efficiently to long contexts, enabling longer effective context windows.
- **Open-source**: Fully open weights for both base and instruction-tuned models.

## References

| **Model/Paper** | **Year** | **Link** |
|-----------|----------|----------|
| StripedHyena (Together AI) | 2023 | [Blog Post](https://www.together.ai/blog/stripedhyena-7b) |
| Hyena Hierarchy (foundation) | 2023 | [arXiv:2302.10866](https://arxiv.org/abs/2302.10866) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
