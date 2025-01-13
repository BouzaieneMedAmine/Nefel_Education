class User :
    def __init__(self,first_name,last_name,email,age) :
        self.first_name=first_name
        self.last_name=last_name
        self.email=email
        self.age=age
        self.is_reward_member=False
        self.gold_card_points=0

    def display_info(self):
        print(self.first_name)
        print(self.last_name)
        print(self.email)
        print(self.age)

    def enroll(self):
        if self.is_reward_member==True :
            print('user is already a member')
            return False
        return True
        self.gold_card_points=200

    def spend(self,amount) :
        if self.gold_card_points >= amount :
            self.gold_card_points=gold_card_points-amount