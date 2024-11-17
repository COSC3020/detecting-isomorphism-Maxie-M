# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?


## Runtime Analysis, Maxie M. 

**Worst-Case Time Complexity** 
- Since all permutations of vertices in the second graph is generated:
  - Complexity: $O(n!)$
    - $n$ is the number of veritces in the graph
- adjaceny matrices are compared for each permutation, which adds a cost of $O(n^2)$ for the matrix equality checks
- **Overall Time Complexity:** $O(n! \times n^2)$


## Plagiarism Statement:

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice. 

## Resources:
- https://towardsdatascience.com/testing-if-two-graphs-are-isomorphic-cf6c44ab551e
