principle = 0
rate = 0
time = 0

while principle <= 0:
    principle = float(input("Enter the principle amount (greater than 0): "))
    if principle <= 0:
        print("Principle cant be less than or equal to 0. Please enter a valid amount.")
 

while rate <= 0:
    rate = float(input("Enter the interest rate (greater than 0): "))
    if rate <= 0:
        print("Interest rate cant be less than or equal to 0. Please enter a valid rate.")
   

while time <= 0:
    time = int(input("Enter the time period in years (greater than 0): "))
    if time <= 0:
        print("Time period cant be less than or equal to 0. Please enter a valid time period.")


total = principle * pow((1+ rate/100), time)
print ("---------------------------------------------------------")
print (f"The total amount after {time} years is ${total:.2f}")
print ("---------------------------------------------------------")