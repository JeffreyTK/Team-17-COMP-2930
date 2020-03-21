import abc


class ItemFactory(abc.ABC):
    """
    Abstract factory for the other factories to implement
    """

    def create_item(self, product_details):
        pass