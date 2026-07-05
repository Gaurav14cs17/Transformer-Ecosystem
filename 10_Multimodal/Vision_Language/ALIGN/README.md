# ALIGN — Scaling Up Visual and Vision-Language Representation Learning With Noisy Text Supervision

## Overview

ALIGN (A Large-scale ImaGe and Noisy-text embedding) from Google demonstrates that contrastive vision-language learning can scale to over 1 billion noisy image-text pairs without expensive data filtering. By leveraging a massive noisy dataset (1.8B pairs from alt-text) and scaling both the image encoder (EfficientNet) and text encoder, ALIGN achieves strong zero-shot and fine-tuned performance on retrieval and classification tasks.

## Architecture & Mechanism

ALIGN uses a dual-encoder architecture similar to CLIP but with key differences:

- **Image encoder**: EfficientNet-L2 (480M parameters) — a large, efficient CNN backbone.
- **Text encoder**: BERT-Large (340M parameters) with the [CLS] token as the text representation.
- **Normalized contrastive loss**: Softmax-based contrastive loss (InfoNCE) over the batch, similar to CLIP.
- **Training data**: 1.8 billion image-text pairs from web alt-text, with only minimal filtering (removing pornographic content and very short text). No manual curation.
- **Scale**: Trained with a batch size of 16,384 for ~200K steps.

## Key Innovations

- **Noisy data at scale**: Demonstrates that data quantity can compensate for data quality — 1.8B noisy pairs outperform smaller curated datasets.
- **Minimal filtering**: Only basic content filtering, no expensive human-curated captions or complex data pipelines.
- **CNN image encoder**: Uses EfficientNet instead of ViT, showing that the contrastive approach is architecture-agnostic.
- **Strong retrieval**: State-of-the-art on Flickr30K and MSCOCO image-text retrieval benchmarks.
- **Zero-shot transfer**: Competitive zero-shot classification performance, validating the power of scale.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Scaling Up Visual and Vision-Language Representation Learning With Noisy Text Supervision (Jia et al.) | 2021 | [arXiv:2102.05918](https://arxiv.org/abs/2102.05918) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
