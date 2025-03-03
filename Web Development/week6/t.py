def solution(A):
    A.sort()  # Sorting the input list
    N = len(A)
    y = 10

    for i in range(N):
        if A[i] <= y:
            A[i] += 1
        else:
            A[i] -= 1

    print(A)

# Corrected function call
A = [2, 3, 5]  # Use a list instead of a set
solution(A)
