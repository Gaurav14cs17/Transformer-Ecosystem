# Log-Softmax

log_softmax(x_i) = x_i - log(Σ_j exp(x_j))

Numerically stable computation of log-probabilities. Computed using the log-sum-exp trick to avoid overflow/underflow. Used with NLLLoss for classification.

## Key Properties
- More numerically stable than log(softmax(x))
- Standard output for language model training
- Combined with NLLLoss equals CrossEntropyLoss

## Reference
| Paper | Year | Link |
|-------|------|------|
| Numerical Recipes: The Art of Scientific Computing | — | [Cambridge](https://numerical.recipes/) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
