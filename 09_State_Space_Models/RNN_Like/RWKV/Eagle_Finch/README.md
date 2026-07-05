# RWKV-6 Eagle and Finch

## Overview

Eagle (RWKV-5) and Finch (RWKV-6) are successive improvements to the RWKV architecture that enhance its expressiveness and performance. Eagle introduces multi-headed matrix-valued states and improved token shifting, while Finch adds data-dependent decay rates, making the recurrent state dynamics adaptive to the input content, significantly closing the gap with Transformer models.

## Architecture & Mechanism

**Eagle (RWKV-5)** improvements:
- **Multi-headed matrix states**: Replaces the vector-valued recurrent state with a matrix-valued state per head, increasing the model's memory capacity.
- **Improved receptance and gating**: Enhanced gating mechanisms for better information flow.
- **Better token shift**: More sophisticated interpolation between current and previous tokens.

**Finch (RWKV-6)** further improvements:
- **Data-dependent decay**: The decay factor `w` becomes input-dependent: `w_t = f(x_t)`, allowing the model to dynamically decide how much to retain vs. forget based on the input content. This is analogous to Mamba's selective mechanism.
- **LoRA-like low-rank adaptation**: Internal projections use low-rank matrices for efficiency.
- **Improved initialization**: Better initialization strategies for stable training at scale.

## Key Innovations

- **Adaptive forgetting (Finch)**: Input-dependent decay enables selective memory retention, the key feature that makes Mamba effective, now incorporated into RWKV.
- **Matrix-valued states (Eagle)**: Richer recurrent state captures more complex temporal patterns.
- **Maintained efficiency**: Both Eagle and Finch preserve RWKV's O(1) per-token inference cost.
- **Scaling**: Models trained at 1.5B, 3B, and 7B parameters with competitive performance.
- **Community-driven**: Developed by the open-source RWKV Foundation.

## References

| **Model** | **Year** | **Link** |
|-----------|----------|----------|
| Eagle and Finch: RWKV with Matrix-Valued States and Dynamic Recurrence | 2024 | [arXiv:2404.05892](https://arxiv.org/abs/2404.05892) |
| RWKV Foundation | 2024 | [GitHub](https://github.com/BlinkDL/RWKV-LM) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
