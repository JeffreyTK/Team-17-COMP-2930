from Assignments.Assignment2.toy import Toy


class RobotBunny(Toy):

    def __init__(self, num_of_sounds, color, **kwargs):
        self._number_of_sounds = num_of_sounds
        self._color = color
        super().__init__(kwargs)
