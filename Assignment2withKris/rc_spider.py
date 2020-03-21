from Assignments.Assignment2.toy import Toy

class RCSpider(Toy):

    def __init__(self, speed, jump_height, glow_in_dark, type_of_spider, **kwargs):
        self._speed = speed
        self._jump_height = jump_height
        self._glow = glow_in_dark
        self._type = type_of_spider
        super().__init__(kwargs)
