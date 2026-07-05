# Dynamic Position Bias

## Overview

Dynamic Position Bias generates position-dependent attention biases using a small neural network rather than a fixed lookup table. This approach can model complex, non-linear relationships between positions and produces continuous bias functions that generalize better to unseen sequence lengths compared to learned bias tables.

## Architecture & Mechanism

Instead of storing a table of bias values, Dynamic Position Bias computes biases on-the-fly:

1. **Input**: The relative position `(i - j)` (or absolute positions) is provided as input.
2. **MLP computation**: A small multi-layer perceptron (MLP) maps the relative position scalar to a bias value: `b(i-j) = MLP(i - j)`.
3. **Per-head biases**: The MLP can output multiple values, one per attention head, allowing different heads to use different position bias functions.
4. **Addition to logits**: The computed biases are added to the attention logits before softmax, similar to ALiBi or T5 biases.

## Key Innovations

- **Continuous position function**: The MLP produces a continuous function over positions, enabling smooth interpolation and extrapolation to unseen distances.
- **Learnable bias shape**: Unlike ALiBi (which uses fixed linear decay) or T5 (which uses bucketed lookup), the bias function shape is entirely learned.
- **Parameter efficient**: A small MLP with a few layers can represent complex bias patterns with far fewer parameters than a full lookup table for long sequences.
- **Length generalization**: The continuous nature of the neural network function offers potential for better generalization to longer sequences than discrete learned biases.

## Limitations

- Adds computational overhead from the MLP forward pass, though this is typically small.
- The MLP must be carefully initialized to avoid unstable training dynamics.

## References

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| DPB in CrossFormer: Transformer Utilizing Cross-Dimension Dependency (Wang et al.) | 2021 | [arXiv:2108.00154](https://arxiv.org/abs/2108.00154) |
| DPB in iRPE: Conditional Positional Encodings for Vision Transformers (Chu et al.) | 2021 | [arXiv:2102.10882](https://arxiv.org/abs/2102.10882) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
