from Assignments.Assignment2.inventory_item import InventoryItem


class Toy(InventoryItem):

    def __init__(self, battery_operated, min_age, **kwargs):
        self._battery = battery_operated
        self._min_age = min_age
        super().__init(kwargs)
