# MobileBERT — A Compact Task-Agnostic BERT for Resource-Limited Devices

## Overview

MobileBERT is a thin version of BERT designed specifically for mobile and edge deployment. Unlike DistilBERT (which reduces depth), MobileBERT maintains BERT's 24-layer depth but dramatically reduces the width, using bottleneck structures and a specially designed teacher (IB-BERT) to achieve 4.3× compression and 5.5× speedup while retaining competitive accuracy.

## Architecture & Mechanism

MobileBERT uses a novel bottleneck architecture with a specially designed teacher:

1. **IB-BERT teacher (Inverted Bottleneck BERT)**: A modified BERT-large with inverted bottleneck structure — wide intermediate layers (1024) but narrow input/output (512) per Transformer block. Trained first as the teacher.
2. **MobileBERT student**: Mirrors IB-BERT's structure but with much narrower hidden size (128 vs. 512):
   - **Bottleneck blocks**: Each layer has linear bottleneck layers that project from narrow (128) to wide (512) and back.
   - **Stacked FFN**: Multiple smaller FFN layers replace a single large FFN for better representation capacity.
   - **24 layers**: Maintains the same depth as the teacher for effective layer-wise distillation.
3. **Layer-wise distillation**: Each MobileBERT layer is distilled from the corresponding IB-BERT layer using feature map transfer, attention transfer, and prediction distillation.

## Key Innovations

- **Narrow but deep**: 24 layers with 128 hidden size — depth preserves representational capacity while narrowness reduces compute.
- **Bottleneck structure**: Enables layer-wise distillation between teacher and student with dimension-matched bottleneck layers.
- **IB-BERT teacher**: A specially designed teacher that matches the student's layer structure, enabling more effective distillation.
- **Mobile deployment**: Achieves 62ms latency on a Pixel 4 phone for GLUE tasks.
- **Task-agnostic**: Pre-distilled model can be fine-tuned on any downstream task.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| MobileBERT: a Compact Task-Agnostic BERT for Resource-Limited Devices (Sun et al.) | 2020 | [arXiv:2004.02984](https://arxiv.org/abs/2004.02984) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
