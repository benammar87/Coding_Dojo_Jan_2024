# countdown

def countdown (i):

    count = []

    for num in range(i ,-1,-1):
       count.append(num)

    return count

result = countdown(10)
print(result)

# print and return

def print_and_return(list):
    print( list[0]);
    return list[1]

print_and_return([2,3])

# first_plus_lenght

def first_plus_length (list):   
    return list[0]+len(list)

print(first_plus_length([8,2,3,4,5]))

# greater than second

def greater_than_second(list):
    if len(list) < 2:
        return False
    list1 = []
    for i in range (0 , len(list)):
        if list[i] > list[1]:
            list1.append(list[i])
    print(len(list1))
    return list1
    
print(greater_than_second([12,5,9,4,5,6]))
print(greater_than_second([3]))

# this ligth that value
def legth_value(size,value):
    list = []
    for i in range(0 ,size):
        list.append(value)
    return list

print(legth_value(5,12))
print(legth_value(3,11))