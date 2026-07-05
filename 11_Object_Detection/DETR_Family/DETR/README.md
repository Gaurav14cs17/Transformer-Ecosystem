# DETR — End-to-End Object Detection with Transformers

## Overview

DETR (DEtection TRansformer) is the first end-to-end object detection framework that eliminates the need for hand-designed components like anchor generation, non-maximum suppression (NMS), and proposal generation. It uses a Transformer encoder-decoder architecture with a set-based Hungarian loss to directly predict a fixed set of object detections, fundamentally simplifying the detection pipeline.

## Architecture & Mechanism

DETR uses a three-stage pipeline:

1. **CNN backbone**: A CNN (ResNet-50/101) extracts feature maps from the input image, which are flattened into a sequence of feature vectors with positional encodings.
2. **Transformer encoder**: Self-attention layers process the feature sequence, enabling global reasoning about relationships between all spatial locations.
3. **Transformer decoder**: `N` learned object queries (e.g., N=100) attend to the encoder output via cross-attention. Each query independently predicts one detection (or "no object").
4. **Prediction heads**: Each decoder output is fed to FFN heads predicting: class label + bounding box (center_x, center_y, width, height).
5. **Hungarian matching loss**: A bipartite matching algorithm optimally assigns predictions to ground-truth objects, then computes classification + box regression loss on matched pairs.

## Key Innovations

- **No NMS**: Set-based prediction eliminates duplicate detection through unique assignment in the loss.
- **No anchors**: Learned object queries replace hand-designed anchor boxes.
- **End-to-end training**: The entire pipeline is differentiable — no post-processing needed.
- **Global reasoning**: Self-attention over the full image enables reasoning about object relationships.
- **Simple and elegant**: Dramatically simpler than Faster R-CNN and its variants.

## Limitations

- Slow convergence: 500 epochs (vs. ~36 for Faster R-CNN).
- Struggles with small objects due to limited feature resolution.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| End-to-End Object Detection with Transformers (Carion et al.) | 2020 | [arXiv:2005.12872](https://arxiv.org/abs/2005.12872) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
