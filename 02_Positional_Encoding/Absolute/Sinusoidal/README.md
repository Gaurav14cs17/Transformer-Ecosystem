# Sinusoidal Positional Encoding

## Overview

Sinusoidal Positional Encoding is the original fixed positional encoding scheme introduced in the Transformer architecture. It injects absolute position information into token representations using deterministic sine and cosine functions of different frequencies, requiring no learned parameters.

## Architecture & Mechanism

The encoding for position `pos` and dimension `i` is defined as:

- **PE(pos, 2i) = sin(pos / 10000^(2i/d_model))**
- **PE(pos, 2i+1) = cos(pos / 10000^(2i/d_model))**

Each dimension of the positional encoding corresponds to a sinusoid with a wavelength forming a geometric progression from 2π to 10000·2π. The positional encodings are added element-wise to the input embeddings at the bottom of the encoder and decoder stacks.

## Key Innovations

- **No learned parameters**: The encoding is entirely deterministic, reducing model complexity.
- **Relative position awareness**: The authors hypothesized that sinusoidal functions allow the model to attend to relative positions, since PE(pos+k) can be represented as a linear function of PE(pos) for any fixed offset k.
- **Extrapolation potential**: Because the functions are continuous and periodic, the encoding can theoretically generalize to sequence lengths unseen during training.
- **Dimension-wise frequency variation**: Lower dimensions capture fine-grained position differences; higher dimensions capture coarser patterns.

## Limitations

- In practice, extrapolation to longer sequences is limited without additional techniques.
- Learned positional embeddings often match or slightly exceed performance on fixed-length tasks.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Attention Is All You Need (Vaswani et al.) | 2017 | [arXiv:1706.03762](https://arxiv.org/abs/1706.03762) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
