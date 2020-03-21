from Assignments.Assignment2.inventory_item import InventoryItem


class StuffedAnimal(InventoryItem):

    def __init__(self, stuffing, size, fabric, **kwargs):
        self._stuffing = stuffing
        self._size = size
        self._fabric = fabric
        super().__init__(kwargs)

