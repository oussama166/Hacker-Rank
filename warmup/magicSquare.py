from math import pow as p


def generate_magic_square(n):
    magic_square = [[0] * n for _ in range(n)]

    i, j = 0, n // 2
    num = 1

    while num <= p(n, 2):
        magic_square[i][j] = num
        num += 1

        next_i, next_j = (i-1) % n, (j+1) % n

        if magic_square[next_i][next_j] != 0:
            i = (i+1) % n
        else:
            i, j = next_i, next_j
    return magic_square


def print_magic_square(magic_square):
    for row in magic_square:
        print(row)




all_magic_squares_3x3 = [
    [
        [8, 1, 6],
        [3, 5, 7],
        [4, 9, 2]
    ],
    [
        [6, 1, 8],
        [7, 5, 3],
        [2, 9, 4]
    ],
    [
        [4, 9, 2],
        [3, 5, 7],
        [8, 1, 6]
    ],
    [
        [2, 9, 4],
        [7, 5, 3],
        [6, 1, 8]
    ],
    [
        [6, 7, 2],
        [1, 5, 9],
        [8, 3, 4]
    ],
    [
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8]
    ],
    [
        [4, 3, 8],
        [9, 5, 1],
        [2, 7, 6]
    ],
    [
        [8, 3, 4],
        [1, 5, 9],
        [6, 7, 2]
    ]
]


def calcule_cost(square1, square2):
    cost = 0
    for i in range(3):
        for j in range(3):
            cost += abs(square1[i][j] - square2[i][j])
    return cost


def formingMagicSquare(s):
    return min([calcule_cost(s, square) for square in all_magic_squares_3x3])


input_square = [
    [4, 8, 2],
    [4, 5, 7],
    [6, 1, 6]
]

input_square_1 = [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 5]
]


print(formingMagicSquare(input_square))
print(formingMagicSquare(input_square_1))
