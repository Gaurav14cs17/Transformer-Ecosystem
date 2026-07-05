# Lightning Attention

An IO-aware linear attention implementation that separates intra-block and inter-block computations to maximize GPU hardware utilization.

## Architecture

Lightning Attention splits the linear attention computation into two parts:

```
Intra-block: O_intra = (Q_i * K_i^T) * V_i   (quadratic, in SRAM)
Inter-block: O_inter = Q_i * S_i              (linear, accumulated state)
S_{i+1} = S_i + K_i^T * V_i                   (state update)
Output: O_i = O_intra + O_inter
```

Key design:
- Tiles the sequence into blocks that fit in GPU SRAM
- Intra-block uses standard quadratic attention (exact, in fast memory)
- Inter-block accumulates a running state matrix for cross-block information
- Cumulative sum structure enables causal masking

## Key Innovations

- **Tiling strategy**: Separates computation into SRAM-friendly blocks
- **Hybrid computation**: Quadratic within blocks, linear across blocks
- **IO-awareness**: Minimizes HBM reads/writes by keeping intermediates in SRAM
- **Causal support**: Lightning Attention-2 adds proper causal masking support
- **Kernel fusion**: All operations fused into efficient CUDA kernels

## Performance

- Achieves near-optimal hardware utilization on modern GPUs
- Significantly faster than naive linear attention implementations
- Scales linearly with sequence length while maintaining quality
- Lightning Attention-2 further improves speed with better causal masking

## Versions

- **Lightning Attention-1**: Basic tiled linear attention
- **Lightning Attention-2**: Adds causal mask support and improved tiling

## Reference

| Paper | Year | Link |
|-------|------|------|
| Lightning Attention-2: A Free Lunch for Handling Unlimited Sequence Lengths in Large Language Models | 2024 | [arXiv](https://arxiv.org/abs/2401.04658) |
| TransNormerLLM: A Faster and Better Large Language Model with Improved TransNormer | 2023 | [arXiv](https://arxiv.org/abs/2307.14995) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
