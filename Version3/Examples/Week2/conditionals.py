"""
Name: Conditionals.py
Author: Dominic Cicilio
Language: Python 3.3
"""
#Conditionals Statments

#Constant
ACTOR = "RobotA"

#If statement
if (ACTOR == "Robot"):
    print("I am a Robot!")


print("-----------------------------")
# If statement, elif statement, else statement
if (ACTOR == "Robot"):
    print("I am a Robot!")
elif (ACTOR == "Alien"):
    print("I am an Alien!")
elif (ACTOR == "Dog"):
    print("Ruff Ruff Ruff")
else:
    print("Unknown Creature")


print("-----------------------------")
#Number Comparisons
VALUE = 5


# If statement, elif statement, else statement
if (VALUE == 5):
    print("Value = 5")
elif (VALUE > 5):
    print("Value is greater than 5")
elif (VALUE < 5):
    print("Value is less than 5")
else:
    print("Wont Reach")


    
print("-----------------------------")
# Greater than and equal to >= and less than and equal to <=
if (VALUE >= 5):
    print("Value equals 5 or greater")
elif (VALUE < 5):
    print("Value is less than 5")
else:
    print("Should not reach")
