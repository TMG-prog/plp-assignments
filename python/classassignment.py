class Car:
    def __init__(self, make, model, year, engine_power):
        self.make = make
        self.model = model
        self.year = year
        self.__engine_power = engine_power 

   
    def display_info(self):
        return f"{self.year} {self.make} {self.model}"

    def get_engine_power(self):
        return f"{self.__engine_power} HP"

   
    def start(self):
        return f"{self.display_info()} is starting."


class ElectricCar(Car):
    def __init__(self, make, model, year, battery_capacity):
        super().__init__(make, model, year, engine_power="Electric")
        self.battery_capacity = battery_capacity

   
    def display_info(self):
        return f"{self.year} {self.make} {self.model} (Electric, {self.battery_capacity} kWh)"

   
    def charge(self):
        return f"{self.display_info()} is charging"


#creating objects from class
car1 = Car("Toyota", "Camry", 2022, 203)
electric_car = ElectricCar("Tesla", "Model 3", 2023, 75)

print(car1.display_info()) 
print(car1.start())         
print(car1.get_engine_power()) 

print(electric_car.display_info())  
print(electric_car.charge())        