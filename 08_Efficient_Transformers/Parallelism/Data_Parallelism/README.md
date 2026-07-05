# Data Parallelism
Replicates the model on each GPU and splits training data across devices. Each GPU computes gradients on its local batch, then gradients are synchronized via all-reduce before the optimizer step.
## Papers
| Paper | Year | Link |
|-------|------|------|
| PyTorch Distributed: Experiences on Accelerating Data Parallel Training | 2020 | [arXiv](https://arxiv.org/abs/2006.15704) |
| Scaling Distributed Machine Learning with the Parameter Server | 2014 | [OSDI](https://www.cs.cmu.edu/~muli/file/parameter_server_osdi14.pdf) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
