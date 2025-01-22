
class Animal:
    def sound(self):
        raise NotImplementedError("Subclasses must implement this method.")


class Dog(Animal):
    def sound(self):
        return "A dog barks"


class Bird(Animal):
    def sound(self):
        return "A bird chirps "


class Cow(Animal):
    def sound(self):
        return "A cow moos"


class Snake(Animal):
    def sound(self):
        return "A snake hisses"


def display_sound(animal):
    print(animal.sound())


dog = Dog()
bird = Bird()
cow = Cow()
snake = Snake()


display_sound(dog)   
display_sound(bird)  
display_sound(cow)   
display_sound(snake)  