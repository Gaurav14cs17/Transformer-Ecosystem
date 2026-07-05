# Transformer-XL Relative Positional Encoding

## Overview

Transformer-XL introduces a segment-level recurrence mechanism combined with a novel relative positional encoding scheme. This allows the model to capture dependencies beyond the fixed-length context window by reusing hidden states from previous segments while maintaining coherent position information across segment boundaries.

## Architecture & Mechanism

The key insight is decomposing the standard attention score into four terms and replacing absolute position encodings with relative ones:

**A_ij = E_xi^T W_q^T W_{k,E} E_xj + E_xi^T W_q^T W_{k,R} R_{i-j} + u^T W_{k,E} E_xj + v^T W_{k,R} R_{i-j}**

Where:
- **Term (a)**: Content-based addressing (query content to key content)
- **Term (b)**: Content-dependent positional bias (query content to relative position)
- **Term (c)**: Global content bias `u` (learned, replaces query position encoding)
- **Term (d)**: Global positional bias `v` (learned, replaces query position encoding)
- **R_{i-j}**: Sinusoidal encoding of relative distance, not learned

## Key Innovations

- **Segment-level recurrence**: Hidden states from previous segments are cached and reused, enabling long-range dependency modeling.
- **Relative position encoding**: Position information is encoded as relative distances rather than absolute indices, critical for maintaining correct position semantics across recurrent segments.
- **Global bias vectors**: Two learned vectors `u` and `v` replace the position-dependent query bias, simplifying the computation.
- **Extended context**: Effective context length grows linearly with the number of cached segments.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context (Dai et al.) | 2019 | [arXiv:1901.02860](https://arxiv.org/abs/1901.02860) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
