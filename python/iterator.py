
"""
    Iterables are objects capable of returning their members one at a time – they can be iterated over.
    Using iter() we can create iterate object
    using next() we can get next
    StopIteration exception is caught, then the loop ends.
"""
# instantiate a list object
list_instance = [1, 2, 3, 4]

# convert the list to an iterator
iterator = iter(list_instance)

# return items one at a time
print(next(iterator))
print(next(iterator))
print(next(iterator))