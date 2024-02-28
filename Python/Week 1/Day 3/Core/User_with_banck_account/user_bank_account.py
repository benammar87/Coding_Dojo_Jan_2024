
class BankAccount:
    def __init__(self, int_rate=0.02, balance=0):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount 
        return self
    
    def withdrawal(self,amount):
        self.balance -=amount
        return self


class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)

    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self  
    
    def make_withdrawal(self,amount):
        self.account.withdrawal(amount)
        return self
    
    def display_user_account(self,amount):
        self.account.balance
        return self
        

user = User("John Doe", "john@example.com")
user.make_deposit(100).make_withdrawal(50)
print(user.account.balance)

    
    
        




        


