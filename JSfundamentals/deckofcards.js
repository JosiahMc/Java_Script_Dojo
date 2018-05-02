class Cards
{
   constructor (suit, value, face)
   {
       this.suit = suit;
       this.value = value;
       this.face = face;
   }
}

class Deck
{
   //deck will have an array of cards
   constructor()
   {
       this.cards = [];
       this.reset();
   }

   reset()

   {
       this.cards=[];
       let suits = ["Club", "Diamond", "Heart", "Spade"];
       let cardInfo =
       {
           "Ace": 1,
           "Two": 2,
           "Three": 3,
           "Four":4,
           "Five":5,
           "Six":6,
           "Seven":7,
           "Eight":8,
           "Nine":9,
           "Ten":10,
           "Jack":11,
           "Queen":12,
           "King":13,
       }
       for(let suit of suits)
       {
           for(let card in cardInfo)
           {
               let newCard = new Cards(suit, cardInfo[card], card);
               // console.log("we just made a new card");
               // console.log(newCard);
               this.cards.push(newCard);
           }
       }
       shuffle(shuffles);
       {
           let s = 0;
           while(s <= shuffles){
            for(let i = this.cards.length-1; i > 0; i--) 
            {
                let rdx = Math.floor(Math.random()*52);
                let temp = this.cards[rdx];
                this.cards[rdx] = this.cards[i];
                this.cards[i]=temp;
                }
            }


       }
   }
}

let bob = new Deck ();
console.log(bob);


bob.shuffles(100);
bob.shuffle();

// for of loops 