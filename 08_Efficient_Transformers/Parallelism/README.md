# Parallelism Strategies
## Sub-directories
| Directory | Description |
|-----------|-------------|
| [Data_Parallelism](Data_Parallelism/) | Replicate model, split data across GPUs |
| [Tensor_Parallelism](Tensor_Parallelism/) | Split weight matrices across GPUs |
| [Pipeline_Parallelism](Pipeline_Parallelism/) | Split layers across GPUs |
| [Sequence_Parallelism](Sequence_Parallelism/) | Split sequence across GPUs |
| [Context_Parallelism](Context_Parallelism/) | Partition sequence for long-context training |
| [Expert_Parallelism](Expert_Parallelism/) | Distribute MoE experts across GPUs |
| [ZeRO](ZeRO/) | Zero Redundancy Optimizer (Stages 1-3) |
| [FSDP](FSDP/) | Fully Sharded Data Parallel (PyTorch native) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
