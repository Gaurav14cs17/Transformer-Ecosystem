# V-JEPA — Video Joint-Embedding Predictive Architecture

## Overview

V-JEPA extends the I-JEPA framework to video, learning visual representations by predicting the latent representations of masked spatiotemporal regions from visible context. It demonstrates that feature prediction in video — without pixel-level reconstruction or text supervision — produces versatile representations that excel on both motion-centric and appearance-centric downstream tasks.

## Architecture & Mechanism

V-JEPA operates on video clips with a similar architecture to I-JEPA:

1. **Video tokenization**: Video frames are divided into spatiotemporal patches (e.g., 2×16×16 tube tokens).
2. **Masking strategy**: Large spatiotemporal regions are masked using a multi-block masking strategy. Masks span multiple frames to force temporal reasoning.
3. **Context encoder**: A Video ViT processes the visible (unmasked) spatiotemporal tokens.
4. **Target encoder**: A momentum-updated encoder (EMA) processes the complete video to produce target representations.
5. **Predictor**: A Transformer predicts the target representations for masked regions from context encoder outputs and positional information.
6. **Loss**: L2 distance in representation space (no pixel reconstruction).

## Key Innovations

- **Temporal feature prediction**: Masking across time forces learning of motion dynamics and temporal coherence.
- **No pixel reconstruction**: Avoids the bias toward low-level temporal features (optical flow, texture) that pixel-prediction methods exhibit.
- **No text supervision**: Unlike video-language models, V-JEPA learns purely from video data.
- **Frozen evaluation**: Representations are evaluated with frozen features + attentive probes, demonstrating the quality of the learned features.
- **Action recognition**: Strong performance on Kinetics-400, Something-Something v2, and other video benchmarks.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| V-JEPA: Revisiting Feature Prediction for Learning Visual Representations from Video (Bardes et al.) | 2024 | [arXiv:2404.08471](https://arxiv.org/abs/2404.08471) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
