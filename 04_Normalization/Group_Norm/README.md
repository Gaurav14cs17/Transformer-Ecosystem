# Group Normalization

## Overview

Group Normalization (GroupNorm) divides channels into groups and normalizes within each group, offering a middle ground between LayerNorm (all channels together) and InstanceNorm (each channel independently). It is independent of batch size, making it effective for tasks where small batch sizes are necessary, such as object detection and segmentation.

## Architecture & Mechanism

For an input `x ∈ ℝ^(C × H × W)` with `G` groups (each containing `C/G` channels):

1. **Partition channels**: Divide `C` channels into `G` groups: `{[0, C/G), [C/G, 2C/G), ...}`
2. **Per-group statistics**: For each group `g`, compute mean and variance over the spatial dimensions AND the channels within the group.
3. **Normalize**: `x̂ = (x - μ_g) / √(σ²_g + ε)` for all channels in group `g`.
4. **Affine transform**: `y = γ x̂ + β` with per-channel learned parameters.

Special cases:
- **G = 1**: Equivalent to LayerNorm (over channels + spatial).
- **G = C**: Equivalent to InstanceNorm (each channel is its own group).

## Key Innovations

- **Batch-size independent**: Unlike BatchNorm, performance does not degrade with small batches (even batch size 1).
- **Flexible granularity**: The number of groups `G` can be tuned to balance between LayerNorm and InstanceNorm behavior.
- **Strong for dense prediction**: Outperforms BatchNorm on detection/segmentation tasks with small batches.
- **Drop-in replacement**: Can directly replace BatchNorm in CNNs with minimal architecture changes.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Group Normalization (Wu & He) | 2018 | [arXiv:1803.08494](https://arxiv.org/abs/1803.08494) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
