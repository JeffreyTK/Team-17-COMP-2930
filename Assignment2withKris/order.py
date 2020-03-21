

class Order:

    def __init__(self, order_number, product_id, item, name_of_item, product_details, factory):
        self._order_number = order_number
        self._product_id = product_id
        self._item = item
        self._name_of_item = name_of_item
        self._product_details = product_details
        self._factory = factory
