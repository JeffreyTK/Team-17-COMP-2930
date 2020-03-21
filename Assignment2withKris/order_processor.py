import pandas
from Assignments.Assignment2.factory_mapping import FactoryMapping


class OrderProcessor:

    def __init__(self, url):
        self._file_path = url

    # FactoryMapping needs to map the holiday to the appropriate factory class and yield an order object

    def load_data(self):
        data = pandas.read_csv(self._file_path, header=0)
        for index, row in data.iterrows():
            # can use this to access the data items of each row
            # row["holiday"]
            print(row)
            factory = FactoryMapping.chose_factory(row["holiday"], row["item"])




