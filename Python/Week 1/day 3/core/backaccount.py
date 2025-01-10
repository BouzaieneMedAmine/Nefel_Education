class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate, balance):
        self.in_rate= int_rate
        self.balance= balance
    def deposit(self, amount):
        if amount>0:
            self.balance += amount
            return 'self.balance'
   
    def withdraw(self, amount1):
        if amount1 > self.balance:
            print(f'Insufficient funds you have been charged 5$ fee')
            self.balance-= 5
            return 'self.balance'
        else :
            self.balance-= amount1 
            return 'self.balance'
        
    def display_account_info(self):
        print (self.balance)
    
    
    def yield_interest(self):
        while self.balance > 0:
            self.balance+= self.in_rate 
            return 'self.balance'



account1 = BankAccount(0.01 , 1450)
account2 = BankAccount(0.06 , 5460)