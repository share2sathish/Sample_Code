from datetime import date
class Person:
    def __init__(self,name,age):
        self.name = name
        self.age = age

    @classmethod
    def from_birth_year(cls,name,year):
        return cls(name,date.today().year - year)

    @staticmethod
    def is_adult(age):
        return age > 18

person_obj1 = Person("sathish",33)
person_obj2 = Person.from_birth_year("Ryan",2019)
print(person_obj1.age)
print(person_obj2.age)
print(Person.is_adult(33))


