dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}


def printInfos(some_list):
    for disctionary in some_list:
        print(disctionary)

print(printInfos(dojo['instructors']))
print(printInfos(dojo['locations']))

