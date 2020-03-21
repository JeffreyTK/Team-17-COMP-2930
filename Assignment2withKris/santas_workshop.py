from Assignments.Assignment2.toy import Toy


class SantasWorkshop(Toy):

    def __init__(self, dimension=(0, 0), num_of_rooms=0, **kwargs):
        self._dimensions = dimension
        self._num_of_rooms = num_of_rooms
        super().__init__(kwargs)