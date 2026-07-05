# Eagle & Finch (RWKV v5 & v6)

Eagle (RWKV-5) and Finch (RWKV-6) are the latest generations of RWKV, featuring matrix-valued states and data-dependent dynamic recurrence for enhanced expressiveness while preserving linear complexity.

## Architecture

### Eagle (RWKV-5): Matrix-Valued States
```
Multi-head recurrence with matrix state:
  s_t^h = diag(w^h) · s_{t-1}^h + k_t^h ⊗ v_t^h    (fixed decay w per head)
  o_t^h = (r_t^h)^T · s_t^h
```

### Finch (RWKV-6): Data-Dependent Dynamic Recurrence
```
Dynamic decay: w_t = W_w · (x_t' + τ_w)  (input-dependent, varies per timestep)
Bonus term:    u_t is also made data-dependent

s_t^h = diag(exp(-exp(w_t^h))) · s_{t-1}^h + k_t^h ⊗ v_t^h
o_t^h = (r_t^h)^T · (s_t^h + u_t^h · k_t^h ⊗ v_t^h)
```

Key difference: Finch (v6) makes the decay rate `w_t` a function of the current input, enabling the model to dynamically control how quickly it forgets — similar to Mamba's selectivity.

## Key Innovations

- **Matrix-valued states** (Eagle/v5): Richer memory than vector states in RWKV v4
- **Dynamic recurrence** (Finch/v6): Input-dependent decay rates (like selective SSMs)
- **Data-dependent forgetting**: Model decides per-token how much to retain vs forget
- **Lora-plus initialization**: Better parameter initialization for stable training
- **Multi-lingual training**: Trained on 1.12T tokens across 100+ languages
- **Linear RNN**: Both maintain O(n) training and O(1) per-token inference

## Performance

- RWKV-5 (Eagle): Strong improvement over v4, competitive with Transformers at 1.5B-7B scale
- RWKV-6 (Finch): Further gains from dynamic recurrence, narrows gap with Transformers
- Maintains constant memory and compute per token at inference
- Strong multilingual performance across 100+ languages
- Scales well from 0.4B to 7.5B parameters

## Usage

Eagle and Finch are used for:
- Multilingual language modeling
- Efficient inference on resource-constrained devices
- Long-context generation with constant memory
- Open-source community-driven AI research

## Reference

| Paper | Year | Link |
|-------|------|------|
| Eagle and Finch: RWKV with Matrix-Valued States and Dynamic Recurrence | 2024 | [arXiv](https://arxiv.org/abs/2404.05892) |
| RWKV: Reinventing RNNs for the Transformer Era | 2023 | [arXiv](https://arxiv.org/abs/2305.13048) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
