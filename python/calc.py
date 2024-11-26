n1 = float(input("Enter the first number: "))
n2 = float(input("Enter the second number: "))
operation = input("Enter the operation (+, -, *, /): ")


if operation == "+":
    result = n1 + n2
    print(f"{n1} + {n2} = {result}")
elif operation == "-":
    result = n1 - n2
    print(f"{n1} - {n2} = {result}")
elif operation == "*":
    result = n1 * n2
    print(f"{n1} * {n2} = {result}")
elif operation == "/":
    if n2 != 0:
        result = n1 / n2
        print(f"{n1} / {n2} = {result}")
    else:
        print("Error! Division by zero is not allowed.")
else:
    print("Invalid operation. Please enter one of +, -, *, /.")