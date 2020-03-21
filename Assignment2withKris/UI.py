import pandas
from Assignments.Assignment2.order_processor import OrderProcessor


class UI:

    def display_main_menu(self):
        """
        Display the library menu allowing the user to either access the
        list of books, check out, return, find, add, remove a book.
        """
        user_input = None
        while user_input != 3:
            print("\nWelcome to the Cottage!")
            print("-----------------------")
            print("1. Process Web Orders")
            print("2. Check Inventory")
            print("3. Exit")
            print("-----------------------")

            user_input = self.validate_menu_input()

            if user_input == 1:
                print("Process Web Orders")
                # Should prompt user for filename
                op = OrderProcessor("orders.csv")
                op.load_data()
            elif user_input == 2:
                print("Check Inventory")

            elif user_input == 3:
                print("Thanks for shopping at The Cottage")
                pass

    def check_inventory(self):
        pass

    def process_web_orders(self):
        pass

    def validate_menu_input(self):
        """
        Function for ensuring integers are entered when required.
        :param message: prompt message to display for inputs.
        :return: integer selection
        """
        while True:
            try:
                validate = int(input("Make your selection!\n"))
            except ValueError:
                print("Please enter a number between 1 and 3")
                continue
            else:
                return validate


if __name__ == "__main__":
    ui = UI()
    ui.display_main_menu()
