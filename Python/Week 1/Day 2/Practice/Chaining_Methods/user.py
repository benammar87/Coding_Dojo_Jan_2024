class user :
    def __init__(self, first_name,last_name,email,age,is_awards_menbres=False,gold_cards_menbres=0):
        self.first_name=first_name
        self.last_name=last_name
        self.email=email
        self.age=age
        self.is_awards_mebres=is_awards_menbres
        self.gold_card_points=gold_cards_menbres

    def display_info(self):
        print(self.first_name)
        print(self.last_name)
        print(self.email)
        print(self.age)
        print(self.is_awards_mebres)
        print(self.gold_card_points)
        return self

    def enroll(self) :
        self.is_awards_mebres=True
        self.gold_card_points=200
        return self

    def spend_points(self,amount):
        self.gold_card_points=self.gold_card_points-amount
        return self

user1 = user("Mohamed","Ben Ammar","a@a.a",37)
user2 = user("Messi", "Lionel","messi@messi.com" ,38)

user1.display_info().enroll().spend_points(50).display_info()
user2.enroll().spend_points(80).display_info()


        