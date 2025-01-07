1-
def count_Down() :
    number= int(input("enter a number"))
    list1=[]
    for i in range(number,-1,-1):
        list1.append(i)
    return list1
x=countDown()
print(x)

2-
def print_return(list2) :
    print(list2[0])
    return list2[1]
print(print_return([5,8]))

3-
def first_plus_length(list3) :
    sum = list3[0]+len(list3)
    return sum 
x=first_plus_length([5,9,3,7])
print(x)

4-
def greater_than_second(list4):
    new_list = []
    count = 0
    if len(list4) < 2:
        return False
    else:
        for i in list4:
            if i > list4[1]:
                count += 1
                print(count) 
                new_list.append(i)
    return new_list
x = greater_than_second([8, 3, 9, 7])
print(x)

5-
def length_that_value(size,value) :
    new_list=[]
    for var i in range size :
        new_list.append(value)
    return new_list
x=length_that_value(4,5)
print(x)
