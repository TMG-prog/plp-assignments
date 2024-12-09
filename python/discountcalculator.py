def calculatediscount(price, dpercent):
    
    if dpercent >= 20:
        discount_amount = (dpercent / 100) * price
        return price - discount_amount
    return price


try:
    ogprice = float(input("Enter the original price of the item: "))
    discount_percentage = float(input("Enter the discount percentage: "))
    
    
    final_price = calculatediscount(ogprice, discount_percentage)
    
   
    if discount_percentage >= 20:
        print(f"The final price after a {discount_percentage}% discount is: {final_price:.2f}")
    else:
        print(f"No discount applied. The price remains: {ogprice:.2f}")
except ValueError:
    print("Invalid input. Please enter numeric values for price and discount percentage.")