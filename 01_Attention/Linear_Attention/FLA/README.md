# FLA (Flash Linear Attention)

A unified library providing efficient, hardware-aware implementations of various linear attention mechanisms and related recurrent architectures.

## Architecture

FLA provides optimized triton/CUDA kernels for the general gated linear attention framework:

```
General form:  o_t = q_t^T * S_t
               S_t = G_t ⊙ S_{t-1} + k_t * v_t^T

Chunkwise:     O_chunk = (Q * K^T) * V + Q * S_prev  (parallel within chunk)
               S_next = decay * S_prev + K^T * V     (sequential across chunks)
```

Supported architectures include:
- GLA (Gated Linear Attention)
- RetNet (Retentive Network)
- Mamba / Mamba-2
- DeltaNet
- HGRN (Hierarchical Gated Recurrent Network)
- RWKV-6
- Based, and more

## Key Innovations

- **Unified framework**: Single library covering many linear/recurrent attention variants
- **Chunkwise parallelism**: Efficient training by balancing parallelism and sequential computation
- **Triton kernels**: Hardware-aware kernels written in Triton for portability and performance
- **Modular design**: Easy to add new linear attention variants
- **Training + inference**: Supports both parallel training mode and recurrent inference mode

## Performance

- 2-10× faster than naive implementations across supported architectures
- Memory-efficient through tiling and kernel fusion
- Near-linear scaling with sequence length during training
- Constant memory per step during recurrent inference

## Usage

```python
from fla.layers import GatedLinearAttention, MultiScaleRetention, DeltaNet
from fla.models import GLAForCausalLM, RetNetForCausalLM

# Use any supported linear attention layer as a drop-in replacement
layer = GatedLinearAttention(d_model=1024, num_heads=8)
```

## Reference

| Paper | Year | Link |
|-------|------|------|
| Gated Linear Attention Transformers with Hardware-Efficient Training | 2024 | [arXiv](https://arxiv.org/abs/2312.06635) |
| FLA GitHub Repository | 2024 | [GitHub](https://github.com/sustcsonglin/flash-linear-attention) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
