from Assignments.Assignment2.inventory_item import InventoryItem


class Candy(InventoryItem):

    def __init__(self, contains_nuts, contains_lactose, **kwargs):
        self._contains_nuts = contains_nuts
        self._contains_lactose = contains_lactose
        super().__init__(kwargs)
