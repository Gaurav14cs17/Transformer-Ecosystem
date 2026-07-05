# InternVideo — General Video Foundation Models via Generative and Discriminative Learning

## Overview

InternVideo is a general-purpose video foundation model that unifies generative (masked video modeling) and discriminative (video-language contrastive learning) pre-training approaches. By combining VideoMAE-style masked modeling with CLIP-style video-text alignment, InternVideo learns versatile video representations that excel on action recognition, video-text retrieval, video question answering, and temporal grounding.

## Architecture & Mechanism

InternVideo uses a multi-stage training approach:

1. **Backbone**: Video ViT (ViT-L or ViT-H) as the core video encoder.
2. **Stage 1 - Masked video modeling**: VideoMAE-style pre-training with high masking ratio on unlabeled video data (Kinetics-710, ~660K videos). Learns strong spatiotemporal representations.
3. **Stage 2 - Video-language contrastive learning**: CLIP-style contrastive learning between video and text encoders on video-text pairs (WebVid-10M, ~10M pairs). Aligns video and language representations.
4. **Cross-model attention**: A cross-model attention module bridges the generative (VideoMAE) and discriminative (CLIP) representations.
5. **Unified representation**: The final model combines both pre-training paradigms for downstream tasks.

## Key Innovations

- **Unified pre-training**: Combines the complementary strengths of masked modeling (spatial/temporal features) and contrastive learning (semantic/language alignment).
- **Cross-model attention**: Novel mechanism to bridge generative and discriminative representations.
- **Broad task coverage**: A single model handles action recognition, video retrieval, video QA, and temporal grounding.
- **Scaling**: InternVideo-H achieves strong results across 39 video understanding benchmarks.
- **Open-source**: Weights and code released for community use.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| InternVideo: General Video Foundation Models via Generative and Discriminative Learning (Wang et al.) | 2022 | [arXiv:2212.03191](https://arxiv.org/abs/2212.03191) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
