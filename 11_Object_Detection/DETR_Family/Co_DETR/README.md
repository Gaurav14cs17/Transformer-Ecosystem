# Co-DETR — DETRs with Collaborative Hybrid Assignments Training

## Overview

Co-DETR (Collaborative DETR) addresses the limited positive training samples problem in DETR by introducing auxiliary one-to-many label assignment heads alongside the standard one-to-one DETR head. During training, these collaborative heads provide richer supervision via traditional detection label assignment strategies (ATSS, Faster R-CNN), while inference uses only the original DETR head, achieving state-of-the-art detection performance.

## Architecture & Mechanism

Co-DETR augments DETR training with auxiliary heads:

1. **Primary DETR head**: Standard DETR decoder with one-to-one Hungarian matching (used for both training and inference).
2. **Auxiliary collaborative heads**: Multiple one-to-many assignment heads (e.g., ATSS head, Faster R-CNN RPN head) attached to the encoder output:
   - Each head uses traditional label assignment that assigns multiple positive samples per ground-truth object.
   - These heads provide dense supervision to the encoder features.
3. **Collaborative training**: Encoder features receive gradients from both the DETR decoder (one-to-one) and auxiliary heads (one-to-many), leading to better feature learning.
4. **Custom queries from collaborations**: Positive coordinates from auxiliary heads are used to generate additional decoder queries, enriching the DETR training signal.
5. **Inference**: Only the DETR head is used — auxiliary heads are discarded, adding zero inference cost.

## Key Innovations

- **Hybrid label assignment**: Combines one-to-one (DETR) and one-to-many (traditional) assignments for richer training supervision.
- **Better encoder features**: Auxiliary heads force the encoder to produce features suitable for both dense and sparse detection paradigms.
- **No inference overhead**: Auxiliary heads are training-only, maintaining DETR's clean inference pipeline.
- **State-of-the-art**: Co-DETR with Swin-L backbone achieves 66.0+ AP on COCO, among the highest reported.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| DETRs with Collaborative Hybrid Assignments Training (Zong et al.) | 2022 | [arXiv:2211.12860](https://arxiv.org/abs/2211.12860) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
