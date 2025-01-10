
class BankAccount:
    def __init__(self, int_rate, balance=0):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
        else:
            print("Insufficient funds you have been charged 5$ fee")
            self.balance -= 5
        return self

    def display_account_info(self):
        print(f" {self.balance}$")
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance += self.balance * self.int_rate
        return self

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.accounts = {}

    def add_account(self, account_name, int_rate=0.02, balance=0):
        self.accounts[account_name] = BankAccount(int_rate, balance)

    def make_deposit(self, account_name, amount):
        if account_name in self.accounts:
            self.accounts[account_name].deposit(amount)
        else:
            print(f"Account {account_name} does not exist.")

    def make_withdrawal(self, account_name, amount):
        if account_name in self.accounts:
            self.accounts[account_name].withdraw(amount)
        else:
            print(f"Account {account_name} does not exist.")

    def display_user_balance(self, account_name):
        if account_name in self.accounts:
            print(f"{self.name}'s {account_name} account balance: ")
            self.accounts[account_name].display_account_info()
        else:
            print(f"Account {account_name} does not exist.")


user1 = User("A b", "a.b@example.com")
user1.add_account("savings", int_rate=0.03, balance=500)
user1.add_account("checking", int_rate=0.01, balance=1000)

user1.make_deposit("savings", 200)
user1.make_withdrawal("checking", 150)
user1.display_user_balance("savings")
user1.display_user_balance("checking")