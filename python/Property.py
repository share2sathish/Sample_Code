class Person():

    def __init__(self, firstname, lastname):
        self.first = firstname
        self.last = lastname

    @property
    def fullname(self):
        return self.first + ' ' + self.last

    @fullname.setter
    def fullname(self, name):
        firstname, lastname = name.split()
        self.first = firstname
        self.last = lastname

    @fullname.deleter
    def fullname(self):
        self.first = None
        self.last = None

    def email(self):
        return '{}.{}@email.com'.format(self.first, self.last)


# Init a Person
person = Person('sathish', 'kumar')
print(person.fullname)  # > selva prabhakaran

# Deleting fullname calls the deleter method, which erases self.first and self.last
del person.fullname

# Print the changed values of `first` and `last`
print(f"First name: {person.first}")  # > None
print(f"last Name: {person.last}")  # > None
