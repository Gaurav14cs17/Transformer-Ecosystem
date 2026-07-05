# DeltaNet (Delta Rule for Linear Attention)

Applies the delta learning rule to linear attention, enabling online associative memory updates that can both write and erase key-value associations.

## Architecture

DeltaNet replaces the standard linear attention accumulation with a delta rule update:

```
S_t = S_{t-1} + β_t * (v_t - S_{t-1} * k_t) ⊗ k_t
o_t = S_t * q_t
```

Where:
- `S_t` is the recurrent state (associative memory matrix)
- `β_t` is a learned step size controlling update magnitude
- The term `(v_t - S_{t-1} * k_t)` computes the prediction error (delta)
- Keys and values are written/overwritten in the memory matrix

## Key Innovations

- **Delta rule update**: Unlike standard linear attention which only accumulates, DeltaNet can overwrite stale associations
- **Online learning**: Each token update corrects the memory based on prediction error
- **Selective erasure**: The subtraction term `S_{t-1} * k_t` enables forgetting outdated key-value pairs
- **Hardware-efficient**: Can be computed with a chunkwise parallel algorithm for GPU efficiency
- **Improved capacity**: Better utilization of finite memory capacity compared to purely additive linear attention

## Performance

- Outperforms standard linear attention (Linear Transformer) on language modeling
- Competitive with or exceeds other subquadratic architectures (Mamba, GLA, RetNet)
- Supports efficient chunkwise training with O(L/C) sequential steps for chunk size C
- Scales to long sequences with constant memory per token at inference

## Usage

DeltaNet is suitable for:
- Autoregressive language modeling with recurrent inference
- Tasks requiring in-context learning and association recall
- Long-sequence processing where memory capacity is critical

## Reference

| Paper | Year | Link |
|-------|------|------|
| Linear Transformers with Learnable Kernel Functions are Better In-Context Models | 2024 | [arXiv](https://arxiv.org/abs/2402.10644) |
| The Parallelism Tradeoff: Limitations of Log-Precision Transformers (DeltaNet theory) | 2024 | [arXiv](https://arxiv.org/abs/2407.00796) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
