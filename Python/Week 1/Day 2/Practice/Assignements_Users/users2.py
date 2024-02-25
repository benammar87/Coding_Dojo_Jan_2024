class user :
    def __init__(self, first_name , last_name , email , age , is_awards_member = False , gold_card_points =0):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email 
        self.age = age
        self.is_awards_member= is_awards_member
        self.gold_card_points = gold_card_points
    def display_info(self):
        print(self.first_name)
        print(self.last_name)
        print(self.email)
        print(self.age)
        print(self.is_awards_member)
        print(self.gold_card_points)

    def enroll(self):
        self.is_awards_member =True
        self.gold_card_points = 200
    def spend_points(self,amount):
        self.gold_card_points = self.gold_card_points - amount







Mohamed = user("Mohamed","Ben Ammar","a@a.a",37)
Messi = user("Messi", "Lionel","messi@messi.com" ,38)
Ronaldo = user("Ronaldo", "cristiano","crist@cris.com",39)

Mohamed.enroll()
Mohamed.spend_points(100)
Mohamed.display_info()
print("="*50)
Messi.enroll()
Messi.spend_points(amount=50)
Messi.display_info()
print("="*50)
Ronaldo.enroll()
Ronaldo.spend_points(80)
Ronaldo.display_info()











