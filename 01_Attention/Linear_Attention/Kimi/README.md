# Kimi Linear Attention (Moonshot AI)

A linear attention variant developed by Moonshot AI for the Kimi model series, focusing on efficient long-context processing with enhanced expressiveness.

## Architecture

Kimi's linear attention builds on gated linear attention principles:

```
o_t = G_t ⊙ (S_t * q_t)
S_t = α_t * S_{t-1} + k_t ⊗ v_t
```

Where:
- `G_t` is a data-dependent gating mechanism
- `α_t` provides element-wise decay for memory management
- The state `S_t` maintains a compressed representation of context
- Queries retrieve information from the recurrent hidden state

## Key Innovations

- **Long-context efficiency**: Designed to handle Kimi's signature long-context capabilities (200K+ tokens)
- **Gated decay**: Adaptive forgetting mechanism prevents memory saturation over long sequences
- **Hardware co-design**: Implementation optimized for modern GPU memory hierarchies
- **Hybrid integration**: Used alongside standard attention layers in a mixed architecture
- **Scalable training**: Supports efficient parallelization during training while maintaining recurrent inference

## Performance

- Powers Kimi's 200K+ context window in production
- Maintains quality over extremely long documents
- Efficient inference with constant memory cost per new token
- Trained at scale (billions of parameters) by Moonshot AI

## Usage

Kimi linear attention is used in:
- Long-document understanding and summarization
- Extended conversation contexts
- Tasks requiring reasoning over very long inputs
- Production-scale language model serving

## Reference

| Paper | Year | Link |
|-------|------|------|
| Kimi k1.5: Scaling Reinforcement Learning with LLMs | 2025 | [arXiv](https://arxiv.org/abs/2501.12599) |
| Various Moonshot AI technical reports on linear attention | 2024 | [Moonshot AI](https://www.moonshot.cn/) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
