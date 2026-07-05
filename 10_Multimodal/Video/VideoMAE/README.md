# VideoMAE — Masked Autoencoders as Data-Efficient Learners for Self-Supervised Video Pre-Training

## Overview

VideoMAE extends the Masked Autoencoder (MAE) framework to video, demonstrating that video is an even better candidate for masked modeling than images due to higher temporal redundancy and information density. By masking an extremely high ratio (90-95%) of spatiotemporal tube tokens, VideoMAE forces the model to learn strong video representations that achieve state-of-the-art results on action recognition benchmarks.

## Architecture & Mechanism

VideoMAE adapts MAE for video data:

1. **Tube masking**: Input video is divided into spatiotemporal tubes (e.g., 2×16×16 patches across frames). Masking is applied to tubes (not individual patches), ensuring temporal consistency.
2. **Extremely high masking ratio**: 90-95% of tubes are masked (vs. 75% for image MAE), motivated by the high temporal redundancy in video.
3. **Encoder**: A Video ViT (ViT-B/L/H) processes only the visible (5-10%) tube tokens.
4. **Decoder**: A lightweight Transformer decoder receives encoded visible tokens + mask tokens with positional embeddings, reconstructing pixel values for masked tubes.
5. **Loss**: MSE on the pixel values of masked tubes.
6. **Fine-tuning**: The encoder is fine-tuned on downstream action recognition tasks.

## Key Innovations

- **Data-efficient video learner**: Pre-trains effective video representations with only 3.5K videos (Kinetics-400 subset), demonstrating extreme data efficiency.
- **Ultra-high masking ratio**: 90-95% masking exploits video's temporal redundancy to create a challenging reconstruction task.
- **Tube masking**: Temporally consistent masking prevents information leakage from adjacent frames.
- **No extra data needed**: Achieves strong results pre-training on the same dataset used for downstream evaluation.
- **State-of-the-art**: Achieves top results on Kinetics-400, Something-Something V2, and UCF101.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| VideoMAE: Masked Autoencoders as Data-Efficient Learners for Self-Supervised Video Pre-Training (Tong et al.) | 2022 | [arXiv:2203.12602](https://arxiv.org/abs/2203.12602) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
