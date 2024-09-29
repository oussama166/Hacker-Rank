# Non-Divisible Subset

## Problem Statement

Given a set of distinct integers, find the size of the largest subset such that the sum of any two numbers in the subset is not evenly divisible by \( k \).

## Algorithm

1. **Initialize a frequency array:**

   - Create an array `count` of size `k` and initialize all its elements to `0`. This array will be used to store the frequency of remainders when each element of the set is divided by \( k \).

2. **Count the frequency of remainders:**

   - For each element \( num \) in the given set:
     - Calculate \( \text{remainder} = num \mod k \).
     - Increment the count of `count[remainder]`.

3. **Determine the size of the largest subset:**

   - Initialize `result` to the minimum of `count[0]` and `1` (because at most one element that is evenly divisible by \( k \) can be included in the subset).
   - For \( i \) from \( 1 \) to \( \frac{k}{2} \):
     - Increment `result` by the maximum of `count[i]` and `count[k - i]`. This ensures that elements with remainders \( i \) and \( k - i \) don't add up to a multiple of \( k \).
   - If \( k \) is even, add 1 to `result` if `count[k/2]` is greater than 0. This takes care of the case where \( k \) is even and there's only one element with remainder \( k/2 \), as adding it with itself would result in a multiple of \( k \).

4. **Return the size of the largest subset (`result`).**

## Explanation

- The algorithm is based on the idea that if \( a + b \) is evenly divisible by \( k \), then \( (a \mod k) + (b \mod k) = k \). Therefore, we can count the frequency of remainders when each element of the set is divided by \( k \).
- By summing up the remainders of two elements \( a \) and \( b \), we can determine whether the sum is divisible by \( k \).
- We iterate over all possible remainders from \( 1 \) to \( \frac{k}{2} \) (inclusive) because if \( k - \text{remainder} = \text{remainder} \), they add up to \( k \), which we want to avoid.
- We also handle the special case when \( k \) is even, and we have only one element with remainder \( \frac{k}{2} \), which can be included in the subset if its count is greater than 0.
- Finally, we return the size of the largest subset found.

## Time Complexity:

The time complexity of this algorithm is \( O(n + k) \), where \( n \) is the number of elements in the input set and \( k \) is the value of the divisor. This is because we iterate over the input set once to count the remainders, which takes \( O(n) \), and then we iterate over the remainders (up to \( k \)), which takes \( O(k) \).
