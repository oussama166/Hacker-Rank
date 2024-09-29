
#
# Complete the 'diagonalDifference' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY arr as parameter.
#


def diagonalDifference(arr):
    # Write your code here
    count_row = len(arr)
    sum_left = 0
    sum_right = 0
    index_left = 0
    index_right = count_row - 1

    for i in range(count_row):
        sum_left += arr[i][index_left]
        sum_right += arr[i][index_right]
        index_left += 1
        index_right -= 1
    return abs(sum_left - sum_right)


# Main Section
# n = int(input().strip())
arr = [
    [11, 2, 4],
    [4, 4, 6],
    [10, 8, -12]
]


# for _ in range(n):
#     arr.append(list(map(int, input().rstrip().split())))

result = diagonalDifference(arr)

print(result)
