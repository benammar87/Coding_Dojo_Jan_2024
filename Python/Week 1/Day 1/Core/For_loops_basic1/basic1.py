
# basic

for i in range(0,151):
    print(i)

# multiple of five
    for i in range(5,1001,5):
        print(i)

# counting , the dojo way
for i in range(1,101):
    if (i % 10 ==0):
        print("coding dojo")
    elif (i % 5 ==0):
        print("coding")
    else:
        print(i)

# that sucker's huge
sum = 0
for i in range(0,500001):
  sum += i
  print(sum)
        
# countdown by fours
for i in range(2018,0,-4):
    print(i)

# flexible counter
    # variable
lownum = 0
highnum = 100
mult = 2

for i in range(lownum,highnum):
    if( i % mult ==0 ):
        print(i)