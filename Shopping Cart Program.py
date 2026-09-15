# Shopping Cart Program

foods = []
prices = []
total = 0 

while True:
    food = input("Enter a food item to buy : (Q to quit) ")
    if food.lower() == "q":
        break
    else:
        price = float(input(f"Enter the price of {food}: $"))
        foods.append(food)
        prices.append(price)
        total += price

print(f"You have selected the following items: {foods}")
print(f"The total price is: ${total:.2f}")