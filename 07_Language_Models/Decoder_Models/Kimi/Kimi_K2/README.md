# Kimi K2: Trillion-Parameter MoE with Agent Swarm

## Overview

Kimi K2, released by Moonshot AI in July 2025, is a 1 trillion parameter Mixture-of-Experts model featuring the novel MuonClip optimizer and Agent Swarm capabilities. With 32B active parameters per token, K2 achieves frontier performance while introducing innovative approaches to optimizer design and multi-agent coordination, challenging the dominance of Adam-based training.

## Architecture Details

- **Type:** Decoder-only Transformer with Mixture-of-Experts
- **Total Parameters:** 1T (1 trillion)
- **Active Parameters:** 32B per token
- **Context Length:** 128K tokens
- **MoE:** Fine-grained routing with large expert count
- **Optimizer:** MuonClip (novel Muon-family optimizer)
- **Normalization:** RMSNorm
- **Activation:** SwiGLU
- **Position Encoding:** RoPE
- **Training:** Multi-stage with extensive RLHF

## Key Innovations

1. **MuonClip Optimizer:** Novel optimizer extending Muon with gradient clipping for stable trillion-scale training
2. **Agent Swarm:** Architecture enabling coordinated multi-agent task execution
3. **1T MoE Scale:** Efficient trillion-parameter model with only 32B active
4. **Tool-Integrated Reasoning:** Deep integration of tool use within reasoning chains
5. **Agentic Capabilities:** Native support for complex multi-step agent workflows

## Performance Highlights

- Competitive with GPT-4o and Claude 3.5 Sonnet on reasoning benchmarks
- State-of-the-art on agentic task benchmarks
- Strong code generation and mathematical reasoning
- Excellent tool-use and multi-step planning performance
- SWE-bench: among top open models

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Kimi K2: A Trillion-Parameter Mixture-of-Experts Model |
| Authors | Moonshot AI |
| Year | 2025 |
| Institution | Moonshot AI |
| arXiv | [2507.04205](https://arxiv.org/abs/2507.04205) |
