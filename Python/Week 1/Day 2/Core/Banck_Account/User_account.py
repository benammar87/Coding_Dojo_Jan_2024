class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate=0.01, balance=0):
        # your code here! (remember, instance attributes go here) 
        self.int_rate=int_rate
        self.balance=balance
        # don't worry about user info here; we'll involve the User class soon
    def deposit(self, amount):
        # your code here
        self.balance=self.balance +amount
        return f"{self.balance} is your balance"
    def withdraw(self, amount):
        # your code here
        if self.balance > amount:
            self.balance=self.balance -amount
            return self.balance
        else :
            print(f"Insufficient funds: Charging a $5 ")
            self.balance=self.balance -5
            return self.balance
            
    
    def display_account_info(self,balance):
        # your code here
        print(self.balance)
        return balance

    def yield_interest(self):
        # your code here
        if self.balance > 0:
            self.balance+=self.balance*self.int_rate
            return self.balance
            
        
b1 = BankAccount()
b2 = BankAccount()
print(b1.deposit(300))
print(b1.deposit(200))
print(b1.deposit(150))
print(b1.withdraw(500))
print(b1.balance)
print(b1.display_account_info(150),b1.yield_interest())
print("="*30)
print(b2.deposit(300))
print(b2.deposit(200))
print(b2.withdraw(150))
print(b2.withdraw(150))
print(b2.withdraw(150))
print(b2.withdraw(150))
print(b2.display_account_info(45),b2.yield_interest())