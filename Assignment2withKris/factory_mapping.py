

class FactoryMapping:

    @staticmethod
    def chose_factory(holiday, item):
        factory = None
        if item == "Candy":
            if holiday == "Halloween":
                print("halloween candy")
            if holiday == "Christmas":
                print("christmas candy")
            if holiday == "Easter":
                print("easter candy")
        if item == "Toy":
            if holiday == "Halloween":
                print("halloween toy")
            if holiday == "Christmas":
                print("christmas toy")
            if holiday == "Easter":
                print("easter toy")
        if item == "StuffedAnimal":
            if holiday == "Halloween":
                print("halloween stuffedanimal")
            if holiday == "Christmas":
                print("christmas stuffedanimal")
            if holiday == "Easter":
                print("easter stuffedanimal")
        return factory

