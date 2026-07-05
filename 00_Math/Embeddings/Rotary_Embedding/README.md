# Rotary Embedding (RoPE)

Encodes position information by rotating query and key vectors in 2D subspaces using rotation matrices derived from the position index.

## Architecture
- Pairs adjacent dimensions and applies rotation: R(θ_i · m) where m = position, θ_i = frequency
- Relative position naturally emerges: q_m^T · k_n depends only on (m - n)
- No extra parameters — uses fixed frequency schedule

## Key Properties
- Encodes both absolute and relative position
- Decays with distance (long-range forgetting)
- Extrapolates to longer sequences (with NTK-Aware/YaRN scaling)
- Default PE in LLaMA, Qwen, Gemma, Mistral, DeepSeek

## Reference
| Paper | Year | Link |
|-------|------|------|
| RoFormer: Enhanced Transformer with Rotary Position Embedding | 2021 | [arXiv](https://arxiv.org/abs/2104.09864) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
