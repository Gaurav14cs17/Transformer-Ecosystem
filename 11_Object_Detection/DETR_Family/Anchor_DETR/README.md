# Anchor DETR — Query Design for Transformer-Based Object Detection

## Overview

Anchor DETR proposes using anchor points as object queries in DETR, providing each query with an explicit spatial prior. Instead of learning abstract query embeddings from scratch, each query is associated with a specific anchor point in the image, and multiple queries can share the same anchor point with different learned patterns. This design accelerates convergence and reduces the tendency of multiple queries to predict the same object.

## Architecture & Mechanism

Anchor DETR modifies DETR's query design:

1. **Anchor points**: A regular grid of 2D anchor points is placed on the feature map (e.g., every pixel center at the feature map resolution).
2. **Anchor-based queries**: Each anchor point generates one or more queries. The query's positional embedding is derived from the anchor point coordinates via sinusoidal encoding.
3. **Multiple patterns per anchor**: Each anchor point can have `K` queries with different learned pattern embeddings, allowing detection of multiple objects near the same location.
4. **Row-column decoupled attention (RCDA)**: Decomposes 2D cross-attention into separate row and column attention operations, reducing complexity from O(HW) to O(H+W).
5. **Standard DETR pipeline**: Encoder → Decoder with cross-attention → prediction heads, with Hungarian matching loss.

## Key Innovations

- **Explicit spatial priors**: Anchor points give queries clear spatial meaning from initialization, unlike DETR's opaque learned queries.
- **Reduced duplicate predictions**: Queries anchored at different locations are less likely to predict the same object.
- **RCDA efficiency**: Row-column decoupled attention reduces cross-attention cost while maintaining comparable performance.
- **Faster convergence**: Spatial priors help the model converge faster than vanilla DETR.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Anchor DETR: Query Design for Transformer-Based Object Detection (Wang et al.) | 2021 | [arXiv:2109.07107](https://arxiv.org/abs/2109.07107) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
