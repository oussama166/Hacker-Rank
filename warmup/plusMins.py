#
# Complete the 'plusMinus' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def plusMinus(arr):
    # Write your code here
    n = len(arr)
    len_pos = 0
    len_neg = 0
    len_none = 0

    for i in range(n):
        if arr[i] > 0:
            len_pos += 1
        elif arr[i] < 0:
            len_neg += 1
        elif arr[i] == 0:
            len_none += 1
    print(float("{:.6f}".format(len_pos / n)))
    print(float("{:.6f}".format(len_neg / n)))
    print(float("{:.6f}".format(len_none / n)))


n = int(input().strip())

arr = list(map(int, input().rstrip().split()))

plusMinus(arr[:n])
