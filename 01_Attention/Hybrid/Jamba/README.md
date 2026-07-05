# Jamba (Hybrid Transformer-Mamba)

A production-scale hybrid architecture from AI21 Labs that interleaves Transformer attention layers with Mamba (SSM) layers and uses Mixture-of-Experts (MoE) for efficiency.

## Architecture

Jamba uses a repeating pattern of Mamba and attention layers with MoE:

```
Block pattern (repeated):
  [Mamba] → [Mamba] → [Attention] → [Mamba] → [Mamba] → [Attention] ...

Each layer can optionally use MoE:
  FFN → MoE(FFN₁, FFN₂, ..., FFN_E) with top-k routing

Ratio: ~7:1 Mamba-to-Attention (e.g., 6 Mamba layers per 1 Attention layer)
MoE: Applied on select layers (not all) to increase capacity without proportional compute

Inference:
  - Mamba layers: O(1) per token (recurrent state)
  - Attention layers: O(n) per token (KV-cache, but fewer layers)
  - Combined: Much smaller KV-cache than pure Transformer
```

## Key Innovations

- **Hybrid SSM + Attention**: Gets benefits of both — SSM for efficiency, attention for recall
- **Extreme ratio**: Far more Mamba layers than attention (reduces KV-cache dramatically)
- **MoE integration**: Increases model capacity while keeping active parameters low
- **Production-scale**: First publicly available hybrid SSM model at 52B parameters
- **256K context**: Supports very long context with manageable memory
- **Flexible ratio**: The Mamba-to-attention ratio is tunable for different latency/quality tradeoffs

## Performance

- Matches or exceeds Mixtral 8x7B and LLaMA-2 70B on benchmarks
- 3× throughput improvement over Mixtral at long sequences
- Fits 140K context on a single 80GB GPU (vs 11K for similar Transformer)
- 52B total parameters, 12B active per token (MoE)

## Usage

Jamba is used for:
- Long-context language modeling and generation
- Deployments requiring high throughput with bounded memory
- Applications needing both strong recall (attention) and fast processing (SSM)
- Production-scale language model serving

## Reference

| Paper | Year | Link |
|-------|------|------|
| Jamba: A Hybrid Transformer-Mamba Language Model | 2024 | [arXiv](https://arxiv.org/abs/2403.19887) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
