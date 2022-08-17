let SpadeAce = "Spade Ace"
let Spade2 = "Spade 2"
let Spade3 = "Spade 3"
let Spade4 = "Spade 4"
let Spade5 = "Spade 5"
let Spade6 = "Spade 6"
let Spade7 = "Spade 7"
let Spade8 = "Spade 8"
let Spade9 = "Spade 9"
let Spade10 = "Spade 10"
let SpadeJack = "Spade Jack 10"
let SpadeQueen = "Spade Queen 10"
let SpadeKing = "Spade King 10"

let SpadeArray = [SpadeAce, Spade2, Spade3, Spade4, Spade5, 
Spade6, Spade7, Spade8, Spade9, Spade10, SpadeJack, SpadeQueen, SpadeKing]

let DiamondAce = "Diamond Ace"
let Diamond2 = "Diamond 2"
let Diamond3 = "Diamond 3"
let Diamond4 = "Diamond 4"
let Diamond5 = "Diamond 5"
let Diamond6 = "Diamond 6"
let Diamond7 = "Diamond 7"
let Diamond8 = "Diamond 8"
let Diamond9 = "Diamond 9"
let Diamond10 = "Diamond 10"
let DiamondJack = "Diamond Jack 10"
let DiamondQueen = "Diamond Queen 10"
let DiamondKing = "Diamond King 10"

let DiamondArray = [DiamondAce, Diamond2, Diamond3, Diamond4, Diamond5, 
Diamond6, Diamond7, Diamond8, Diamond9, Diamond10, DiamondJack, DiamondQueen, DiamondKing ]


let HeartAce = "Heart Ace"
let Heart2 = "Heart 2"
let Heart3 = "Heart 3"
let Heart4 = "Heart 4"
let Heart5 = "Heart 5"
let Heart6 = "Heart 6"
let Heart7 = "Heart 7"
let Heart8 = "Heart 8"
let Heart9 = "Heart 9"
let Heart10 = "Heart 10"
let HeartJack = "Heart Jack 10"
let HeartQueen = "Heart Queen 10"
let HeartKing = "Heart King 10"

let HeartArray = [HeartAce, Heart2, Heart3, Heart4, Heart5, 
Heart6, Heart7, Heart8, Heart9, Heart10, HeartJack, HeartQueen, HeartKing ]
   

let ClubAce = "Club Ace"
let Club2 = "Club 2"
let Club3 = "Club 3"
let Club4 = "Club 4"
let Club5 = "Club 5"
let Club6 = "Club 6"
let Club7 = "Club 7"
let Club8 = "Club 8"
let Club9 = "Club 9"
let Club10 = "Club 10"
let ClubJack = "Club Jack 10"
let ClubQueen = "Club Queen 10"
let ClubKing = "Club King 10"

let ClubArray = [ClubAce, Club2, Club3, Club4, Club5, 
Club6, Club7, Club8, Club9, Club10, ClubJack, ClubQueen, ClubKing ]
   


let Shoe = SpadeArray.concat(DiamondArray, HeartArray, ClubArray)



//------------------------------------------------------------------------------------------------------------------------------------------------

//!Draw Function
function DrawCard(Deal){ 

let firstCard = Deal[Math.floor(Math.random() * Deal.length)]


for (let i=0 ;i <= Deal.length; i++){
 if (Deal[i] === firstCard ){
    Deal.splice(i, 1)
    break;   
  
  
 }
}



let hand = firstCard

return hand 
}

function dealerAddCard(){
//This is pushing the 1st card from the desk into dealer hand but its a string. 
dealerHand.push(DrawCard(Shoe))


return dealerHand

  

}

function playerAddCard(){
   //This is pushing the 1st card from the desk into player 1 hand but its a string. 
   player1Hand.push(DrawCard(Shoe))

   return player1Hand

}

function gamba (playerWin){

   if (playerWin === true) {
      let betAmount = Number(bet.value) 
      winAmount = betAmount * 2

      playerBalance = playerBalance + winAmount

      

      return playerBalance

      
      
   }

   if (playerWin === false) {


      return playerBalance

      
      
   }
   else{
      playerBalance = playerBalance + betAmount

      return playerBalance

   }



}



//! Hands
console.log(Shoe)
let playerBalance = 10000
let dealerHand = []
let player1Hand = []
//! Query Selector  
let deal = document.querySelector("#deal")
let bet = document.querySelector("#bet")
let balanceDiv = document.querySelector("#balance-div")
let dealerHandDiv = document.querySelector("#dealer-cards") 
let player1Div = document.querySelector("#player1-cards") 
let hit = document.querySelector("#hit")
let stand = document.querySelector("#stand")
let dealerSumTrackerDiv = document.querySelector("#dealer-sum-tracker")
let playerOneSumTrackerDiv = document.querySelector("#player1-sum-tracker")
let balance = document.createElement("h3")

//! Event Listeners 


addEventListener('load', function(event){




   event.preventDefault()
   

  
balanceDiv.appendChild(balance)
balance.innerText = `Balance: ${playerBalance} USD`
balance.setAttribute("id", "start-balance");












})

deal.addEventListener('click', function(event){

   playerBalance = playerBalance - Number(bet.value)
   balance.innerText = `Balance: ${playerBalance} USD`
   console.log(playerBalance)




   
   
   event.preventDefault()
   deal.remove()
   dealerAddCard()
  
//This For loop will  change the string into a number & add photos into the div
   for (let i=0; i < dealerHand.length; i++ ){
      let result = dealerHand[i]
      
      //Diamonds//
      if(result === DiamondJack ){
         dealerHand[0] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src="./PNG/JD.png" 
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")   
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === DiamondQueen ){
         dealerHand[0] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/QD.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
  
      }
      if(result === DiamondKing ){
         dealerHand[0] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/KD.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
        
      }
      if(result === DiamondAce ){
         dealerHand[0] = 11
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/AD.png"
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")     
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond2 ){
         dealerHand[0] = 2
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/2D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === Diamond3 ){
         dealerHand[0] = 3
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/3D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
    
      }
      if(result === Diamond4 ){
         dealerHand[0] = 4
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/4D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond5 ){
         dealerHand[0] = 5
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/5D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond6 ){
         dealerHand[0] = 6
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/6D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond7 ){
         dealerHand[0] = 7
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/7D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond8 ){
         dealerHand[0] = 8
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/8D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond9 ){
         dealerHand[0] = 9
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/9D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }

      if(result === Diamond10 ){
         dealerHand[0] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/10D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      
       //Hearts//

       if(result === HeartJack ){
         dealerHand[0] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src="./PNG/JH.png" 
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")   
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === HeartQueen ){
         dealerHand[0] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/QH.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
  
      }
      if(result === HeartKing ){
         dealerHand[0] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/KH.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
        
      }
      if(result === HeartAce ){
         dealerHand[0] = 11
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/AH.png"
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")     
         dealerHandDiv.appendChild(dealerCard)
      
      }
      if(result === Heart2 ){
         dealerHand[0] = 2
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/2H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === Heart3 ){
         dealerHand[0] = 3
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/3H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
    
      }
      if(result === Heart4 ){
         dealerHand[0] = 4
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/4H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Heart5 ){
         dealerHand[0] = 5
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/5H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Heart6 ){
         dealerHand[0] = 6
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/6H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Heart7 ){
         dealerHand[0] = 7
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/7H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Heart8 ){
         dealerHand[0] = 8
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/8H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Heart9 ){
         dealerHand[0] = 9
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/9H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }

      if(result === Heart10 ){
         dealerHand[0] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/10H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
       //Club//

      if(result === ClubJack ){
         dealerHand[0] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src="./PNG/JC.png" 
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")   
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === ClubQueen ){
         dealerHand[0] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/QC.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
  
      }
      if(result === ClubKing ){
         dealerHand[0] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/KC.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
        
      }
      if(result === ClubAce ){
         dealerHand[0] = 11
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/AC.png"
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")     
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club2 ){
         dealerHand[0] = 2
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/2C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === Club3 ){
         dealerHand[0] = 3
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/3C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
    
      }
      if(result === Club4 ){
         dealerHand[0] = 4
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/4C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club5 ){
         dealerHand[0] = 5
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/5C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club6 ){
         dealerHand[0] = 6
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/6C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club7 ){
         dealerHand[0] = 7
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/7C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club8 ){
         dealerHand[0] = 8
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/8C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club9 ){
         dealerHand[0] = 9
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/9C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }

      if(result === Club10 ){
         dealerHand[0] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/10C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      } 
      
      //Spade//
      
      if(result === SpadeJack ){
         dealerHand[0] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src="./PNG/JS.png" 
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")   
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === SpadeQueen ){
         dealerHand[0] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/QS.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
  
      }
      if(result === SpadeKing ){
         dealerHand[0] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/KS.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
        
      }
      if(result === SpadeAce ){
         dealerHand[0] = 11
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/AS.png"
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")     
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Spade2 ){
         dealerHand[0] = 2
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/2S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === Spade3 ){
         dealerHand[0] = 3
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/3S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade4 ){
         dealerHand[0] = 4
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/4S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade5 ){
         dealerHand[0] = 5
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/5C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade6 ){
         dealerHand[0] = 6
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/6S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade7 ){
         dealerHand[0] = 7
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/7S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade8 ){
         dealerHand[0] = 8
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/8S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade9 ){
         dealerHand[0] = 9
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/9S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }

      if(result === Spade10 ){
         dealerHand[0] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/10S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;      
      } 


      
   }


//This adds the fake back card 
let dealerCardFake = document.createElement("img")
dealerCardFake.src="./PNG/Back.png" 
dealerCardFake.setAttribute("width", "102px" )   
dealerHandDiv.appendChild(dealerCardFake)


playerAddCard()
//This For loop will  change the 1st string into a number & add photos into the div
   for (let i=0; i < player1Hand.length; i++ ){
      let result = player1Hand[i]
      
      //Diamonds//
      if(result === DiamondJack ){
         player1Hand[0] = 10
         let player1Card = document.createElement("img")
         player1Card.src="./PNG/JD.png" 
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")   
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === DiamondQueen ){
         player1Hand[0] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/QD.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
  
      }
      if(result === DiamondKing ){
         player1Hand[0] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/KD.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
        
      }
      if(result === DiamondAce ){
         player1Hand[0] = 11
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/AD.png"
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")     
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Diamond2 ){
         player1Hand[0] = 2
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/2D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
   
      }
      if(result === Diamond3 ){
         player1Hand[0] = 3
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/3D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
    
      }
      if(result === Diamond4 ){
         player1Hand[0] = 4
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/4D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Diamond5 ){
         player1Hand[0] = 5
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/5D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Diamond6 ){
         player1Hand[0] = 6
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/6D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Diamond7 ){
         player1Hand[0] = 7
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/7D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Diamond8 ){
         player1Hand[0] = 8
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/8D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Diamond9 ){
         player1Hand[0] = 9
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/9D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
  
      if(result === Diamond10 ){
         player1Hand[0] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/10D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      
       //Hearts//
  
       if(result === HeartJack ){
         player1Hand[0] = 10
         let player1Card = document.createElement("img")
         player1Card.src="./PNG/JH.png" 
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")   
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === HeartQueen ){
         player1Hand[0] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/QH.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
  
      }
      if(result === HeartKing ){
         player1Hand[0] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/KH.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
        
      }
      if(result === HeartAce ){
         player1Hand[0] = 11
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/AH.png"
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")     
         player1Div.appendChild(player1Card)
      
      }
      if(result === Heart2 ){
         player1Hand[0] = 2
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/2H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
   
      }
      if(result === Heart3 ){
         player1Hand[0] = 3
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/3H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
    
      }
      if(result === Heart4 ){
         player1Hand[0] = 4
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/4H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Heart5 ){
         player1Hand[0] = 5
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/5H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Heart6 ){
         player1Hand[0] = 6
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/6H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Heart7 ){
         player1Hand[0] = 7
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/7H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Heart8 ){
         player1Hand[0] = 8
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/8H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Heart9 ){
         player1Hand[0] = 9
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/9H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
  
      if(result === Heart10 ){
         player1Hand[0] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/10H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
       //Club//
  
      if(result === ClubJack ){
         player1Hand[0] = 10
         let player1Card = document.createElement("img")
         player1Card.src="./PNG/JC.png" 
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")   
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === ClubQueen ){
         player1Hand[0] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/QC.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
  
      }
      if(result === ClubKing ){
         player1Hand[0] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/KC.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
        
      }
      if(result === ClubAce ){
         player1Hand[0] = 11
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/AC.png"
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")     
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Club2 ){
         player1Hand[0] = 2
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/2C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
   
      }
      if(result === Club3 ){
         player1Hand[0] = 3
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/3C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
    
      }
      if(result === Club4 ){
         player1Hand[0] = 4
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/4C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Club5 ){
         player1Hand[0] = 5
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/5C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Club6 ){
         player1Hand[0] = 6
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/6C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Club7 ){
         player1Hand[0] = 7
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/7C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Club8 ){
         player1Hand[0] = 8
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/8C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Club9 ){
         player1Hand[0] = 9
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/9C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
  
      if(result === Club10 ){
         player1Hand[0] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/10C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      } 
      
      //Spade//
      
      if(result === SpadeJack ){
         player1Hand[0] = 10
         let player1Card = document.createElement("img")
         player1Card.src="./PNG/JS.png" 
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")   
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === SpadeQueen ){
         player1Hand[0] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/QS.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
  
      }
      if(result === SpadeKing ){
         player1Hand[0] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/KS.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
        
      }
      if(result === SpadeAce ){
         player1Hand[0] = 11
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/AS.png"
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")     
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Spade2 ){
         player1Hand[0] = 2
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/2S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
   
      }
      if(result === Spade3 ){
         player1Hand[0] = 3
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/3S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === Spade4 ){
         player1Hand[0] = 4
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/4S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === Spade5 ){
         player1Hand[0] = 5
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/5C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === Spade6 ){
         player1Hand[0] = 6
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/6S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === Spade7 ){
         player1Hand[0] = 7
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/7S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === Spade8 ){
         player1Hand[0] = 8
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/8S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === Spade9 ){
         player1Hand[0] = 9
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/9S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      }
  
      if(result === Spade10 ){
         player1Hand[0] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/10S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;      
      } 
  
  
      
   }

playerAddCard()
 //This For loop will  change the 2nd string into a number & add photos into the div
   for (let i=1; i < player1Hand.length; i++ ){
      let result = player1Hand[i]
      
      //Diamonds//
      if(result === DiamondJack ){
         player1Hand[1] = 10
         let player1Card = document.createElement("img")
         player1Card.src="./PNG/JD.png" 
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")   
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === DiamondQueen ){
         player1Hand[1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/QD.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
  
      }
      if(result === DiamondKing ){
         player1Hand[1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/KD.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
        
      }
      if(result === DiamondAce ){
         player1Hand[1] = 11
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/AD.png"
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")     
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Diamond2 ){
         player1Hand[1] = 2
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/2D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
   
      }
      if(result === Diamond3 ){
         player1Hand[1] = 3
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/3D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
    
      }
      if(result === Diamond4 ){
         player1Hand[1] = 4
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/4D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Diamond5 ){
         player1Hand[1] = 5
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/5D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Diamond6 ){
         player1Hand[1] = 6
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/6D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Diamond7 ){
         player1Hand[1] = 7
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/7D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Diamond8 ){
         player1Hand[1] = 8
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/8D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Diamond9 ){
         player1Hand[1] = 9
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/9D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
  
      if(result === Diamond10 ){
         player1Hand[1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/10D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      
       //Hearts//
  
       if(result === HeartJack ){
         player1Hand[1] = 10
         let player1Card = document.createElement("img")
         player1Card.src="./PNG/JH.png" 
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")   
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === HeartQueen ){
         player1Hand[1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/QH.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
  
      }
      if(result === HeartKing ){
         player1Hand[1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/KH.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
        
      }
      if(result === HeartAce ){
         player1Hand[1] = 11
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/AH.png"
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")     
         player1Div.appendChild(player1Card)
      
      }
      if(result === Heart2 ){
         player1Hand[1] = 2
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/2H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
   
      }
      if(result === Heart3 ){
         player1Hand[1] = 3
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/3H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
    
      }
      if(result === Heart4 ){
         player1Hand[1] = 4
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/4H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Heart5 ){
         player1Hand[1] = 5
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/5H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Heart6 ){
         player1Hand[1] = 6
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/6H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Heart7 ){
         player1Hand[1] = 7
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/7H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Heart8 ){
         player1Hand[1] = 8
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/8H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Heart9 ){
         player1Hand[1] = 9
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/9H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
  
      if(result === Heart10 ){
         player1Hand[1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/10H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
       //Club//
  
      if(result === ClubJack ){
         player1Hand[1] = 10
         let player1Card = document.createElement("img")
         player1Card.src="./PNG/JC.png" 
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")   
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === ClubQueen ){
         player1Hand[1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/QC.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
  
      }
      if(result === ClubKing ){
         player1Hand[1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/KC.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
        
      }
      if(result === ClubAce ){
         player1Hand[1] = 11
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/AC.png"
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")     
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Club2 ){
         player1Hand[1] = 2
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/2C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
   
      }
      if(result === Club3 ){
         player1Hand[1] = 3
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/3C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
    
      }
      if(result === Club4 ){
         player1Hand[1] = 4
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/4C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Club5 ){
         player1Hand[1] = 5
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/5C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Club6 ){
         player1Hand[1] = 6
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/6C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Club7 ){
         player1Hand[1] = 7
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/7C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Club8 ){
         player1Hand[1] = 8
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/8C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Club9 ){
         player1Hand[1] = 9
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/9C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
  
      if(result === Club10 ){
         player1Hand[1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/10C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      } 
      
      //Spade//
      
      if(result === SpadeJack ){
         player1Hand[1] = 10
         let player1Card = document.createElement("img")
         player1Card.src="./PNG/JS.png" 
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")   
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === SpadeQueen ){
         player1Hand[1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/QS.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
  
      }
      if(result === SpadeKing ){
         player1Hand[1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/KS.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
        
      }
      if(result === SpadeAce ){
         player1Hand[1] = 11
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/AS.png"
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")     
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Spade2 ){
         player1Hand[1] = 2
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/2S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
   
      }
      if(result === Spade3 ){
         player1Hand[1] = 3
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/3S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === Spade4 ){
         player1Hand[1] = 4
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/4S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === Spade5 ){
         player1Hand[1] = 5
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/5C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === Spade6 ){
         player1Hand[1] = 6
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/6S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === Spade7 ){
         player1Hand[1] = 7
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/7S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === Spade8 ){
         player1Hand[1] = 8
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/8S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === Spade9 ){
         player1Hand[1] = 9
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/9S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      }
  
      if(result === Spade10 ){
         player1Hand[1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/10S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;      
      } 
  
  
      
   }



 //! Adds Hand Values 
let dealerSum = 0 
let playerSum = 0

//Adds The Hand Values
for (let i=0; i< dealerHand.length; i++ ){

   dealerSum += dealerHand[i];

 }
for (let i=0; i< player1Hand.length; i++ ){


   playerSum += player1Hand[i];


   


}
//Checking for Ace for Dealer
for (let i=0; i< dealerHand.length; i++ ){

   if(dealerHand[0]=== 11 ){
      console.log("Ace in Dealer Hand")
      console.log("Insurance? Y/N?")

      
   }
}
//Checking for Ace for Player 1
for (let i=0; i< player1Hand.length; i++ ){

//Not needed?
   // if(player1Hand[0]=== 11 && player1Hand[1]=== 11){
   //    console.log("2 Aces in Player Hand")
   //    console.log(playerSum)
   //    break;
      
   // }



   // if(player1Hand[0]=== 11){
   //    console.log("First Card Ace")
   //    if(playerSum > 21){
   //       player1Hand[0] = 1
   //    }
   //    console.log(playerSum)
   //    break;
      
   // }

   // if(player1Hand[1]=== 11){
   //    console.log("Second Card Ace")
   //    if(playerSum > 21){
   //       player1Hand[1] = 1
   //    }
   //    console.log(playerSum)
   //    break;
      
   // }






   


}


//!Hands
console.log(`Dealer Hand is : ${dealerHand}`)
console.log(`Dealer Hand Sum is : ${dealerSum}`)
console.log(`Player 1 Hand is : ${player1Hand}`)
console.log(`Player 1 Hand Sum is : ${playerSum}`)



//! If Player Hits Black Jack on Turn 1 
if (playerSum === 21){

    //Removes Fake Back Card
    dealerCardFake.remove()
    // Draws Dealers Real 2nd Card
    dealerHand.push(DrawCard(Shoe))
    // Below gives 2nd Card a picture 
    for (let i=1; i < dealerHand.length; i++ ){
       let result = dealerHand[i]
       
       //Diamonds//
       if(result === DiamondJack ){
          dealerHand[1] = 10
          let dealerCard = document.createElement("img")
          dealerCard.src="./PNG/JD.png" 
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")   
          dealerHandDiv.appendChild(dealerCard)
          break;
       }
       if(result === DiamondQueen ){
          dealerHand[1] = 10
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/QD.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
    
       }
       if(result === DiamondKing ){
          dealerHand[1] = 10
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/KD.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
         
       }
       if(result === DiamondAce ){
          dealerHand[1] = 11
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/AD.png"
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")     
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
       if(result === Diamond2 ){
          dealerHand[1] = 2
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/2D.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
    
       }
       if(result === Diamond3 ){
          dealerHand[1] = 3
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/3D.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
     
       }
       if(result === Diamond4 ){
          dealerHand[1] = 4
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/4D.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
       if(result === Diamond5 ){
          dealerHand[1] = 5
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/5D.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
       if(result === Diamond6 ){
          dealerHand[1] = 6
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/6D.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
       if(result === Diamond7 ){
          dealerHand[1] = 7
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/7D.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
       if(result === Diamond8 ){
          dealerHand[1] = 8
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/8D.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
       if(result === Diamond9 ){
          dealerHand[1] = 9
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/9D.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
    
       if(result === Diamond10 ){
          dealerHand[1] = 10
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/10D.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
       
        //Hearts//
    
        if(result === HeartJack ){
          dealerHand[1] = 10
          let dealerCard = document.createElement("img")
          dealerCard.src="./PNG/JH.png" 
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")   
          dealerHandDiv.appendChild(dealerCard)
          break;
       }
       if(result === HeartQueen ){
          dealerHand[1] = 10
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/QH.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
    
       }
       if(result === HeartKing ){
          dealerHand[1] = 10
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/KH.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
         
       }
       if(result === HeartAce ){
          dealerHand[1] = 11
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/AH.png"
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")     
          dealerHandDiv.appendChild(dealerCard)
       
       }
       if(result === Heart2 ){
          dealerHand[1] = 2
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/2H.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
    
       }
       if(result === Heart3 ){
          dealerHand[1] = 3
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/3H.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
     
       }
       if(result === Heart4 ){
          dealerHand[1] = 4
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/4H.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
       if(result === Heart5 ){
          dealerHand[1] = 5
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/5H.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
       if(result === Heart6 ){
          dealerHand[1] = 6
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/6H.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
       if(result === Heart7 ){
          dealerHand[1] = 7
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/7H.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
       if(result === Heart8 ){
          dealerHand[1] = 8
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/8H.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
       if(result === Heart9 ){
          dealerHand[1] = 9
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/9H.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
    
       if(result === Heart10 ){
          dealerHand[1] = 10
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/10H.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
        //Club//
    
       if(result === ClubJack ){
          dealerHand[1] = 10
          let dealerCard = document.createElement("img")
          dealerCard.src="./PNG/JC.png" 
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")   
          dealerHandDiv.appendChild(dealerCard)
          break;
       }
       if(result === ClubQueen ){
          dealerHand[1] = 10
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/QC.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
    
       }
       if(result === ClubKing ){
          dealerHand[1] = 10
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/KC.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
         
       }
       if(result === ClubAce ){
          dealerHand[1] = 11
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/AC.png"
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")     
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
       if(result === Club2 ){
          dealerHand[1] = 2
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/2C.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
    
       }
       if(result === Club3 ){
          dealerHand[1] = 3
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/3C.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
     
       }
       if(result === Club4 ){
          dealerHand[1] = 4
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/4C.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
       if(result === Club5 ){
          dealerHand[1] = 5
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/5C.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
       if(result === Club6 ){
          dealerHand[1] = 6
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/6C.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
       if(result === Club7 ){
          dealerHand[1] = 7
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/7C.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
       if(result === Club8 ){
          dealerHand[1] = 8
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/8C.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
       if(result === Club9 ){
          dealerHand[1] = 9
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/9C.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
    
       if(result === Club10 ){
          dealerHand[1] = 10
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/10C.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       } 
       
       //Spade//
       
       if(result === SpadeJack ){
          dealerHand[1] = 10
          let dealerCard = document.createElement("img")
          dealerCard.src="./PNG/JS.png" 
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")   
          dealerHandDiv.appendChild(dealerCard)
          break;
       }
       if(result === SpadeQueen ){
          dealerHand[1] = 10
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/QS.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
    
       }
       if(result === SpadeKing ){
          dealerHand[1] = 10
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/KS.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
         
       }
       if(result === SpadeAce ){
          dealerHand[1] = 11
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/AS.png"
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")     
          dealerHandDiv.appendChild(dealerCard)
          break;
       
       }
       if(result === Spade2 ){
          dealerHand[1] = 2
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/2S.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
    
       }
       if(result === Spade3 ){
          dealerHand[1] = 3
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/3S.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       }
       if(result === Spade4 ){
          dealerHand[1] = 4
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/4S.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       }
       if(result === Spade5 ){
          dealerHand[1] = 5
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/5C.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       }
       if(result === Spade6 ){
          dealerHand[1] = 6
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/6S.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       }
       if(result === Spade7 ){
          dealerHand[1] = 7
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/7S.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       }
       if(result === Spade8 ){
          dealerHand[1] = 8
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/8S.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       }
       if(result === Spade9 ){
          dealerHand[1] = 9
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/9S.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;
       }
    
       if(result === Spade10 ){
          dealerHand[1] = 10
          let dealerCard = document.createElement("img")
          dealerCard.src= "./PNG/10S.png"   
          dealerCard.setAttribute("width", "100px" )
          dealerCard.setAttribute("class", "png-white")  
          dealerHandDiv.appendChild(dealerCard)
          break;      
       } 
    
    
       
    }
    // Below Adds Hands
    let dealerSum = 0 
    let playerSum = 0
  
  
  
    for (let i=0; i< dealerHand.length; i++ ){
  
     dealerSum += dealerHand[i];
   }
  
    for (let i=0; i< player1Hand.length; i++ ){
  
     playerSum += player1Hand[i];
     
  
  
  }

if(dealerSum === playerSum) {
   function alertAll (){
      alert("PUSH!")
      

   }

   setTimeout (alertAll, 2000)

   function refresh(){
      location.reload();

   }
   setTimeout (refresh, 2800)
console.log(`Dealer Hand is : ${dealerHand}`)
console.log(`Dealer Hand Sum is : ${dealerSum}`)
console.log(`Player 1 Hand is : ${player1Hand}`)
console.log(`Player 1 Hand Sum is : ${playerSum}`)



} 
else{
   playerWin = true
   gamba(playerWin)
   balance.innerText = `Balance: ${playerBalance} USD`
  

   function alertAll (){
      alert("Black Jack Player 1 Wins")
      

   }

   setTimeout (alertAll, 2000)

   function refresh(){
      location.reload();

   }
   setTimeout (refresh, 2800)
console.log(`Dealer Hand is : ${dealerHand}`)
console.log(`Dealer Hand Sum is : ${dealerSum}`)
console.log(`Player 1 Hand is : ${player1Hand}`)
console.log(`Player 1 Hand Sum is : ${playerSum}`)
}




}

//This section will be for creating an element that will track of the dealer and player 1 sum .
let dealerSumTracker = document.createElement("p")
dealerSumTrackerDiv.appendChild(dealerSumTracker)
dealerSumTracker.innerText = dealerSum
dealerSumTracker.setAttribute("class", "edit-dealer-tracker");



let playerOneSumTracker = document.createElement("p")
playerOneSumTrackerDiv.appendChild(playerOneSumTracker)
playerOneSumTracker.innerText =playerSum
playerOneSumTracker.setAttribute("class", "edit-player-tracker");

   

//!Hit
hit.addEventListener('click', function(event){

   event.preventDefault()
  
   
   
   player1Hand.push(DrawCard(Shoe))

   

 //This For loop will  change the new string into a number & add photos into the div
   for (let i=player1Hand.length - 1; i <= player1Hand.length; i++ ){
      let result = player1Hand[i]
      
      //Diamonds//
      if(result === DiamondJack ){
         player1Hand[player1Hand.length - 1] = 10
         let player1Card = document.createElement("img")
         player1Card.src="./PNG/JD.png" 
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")   
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === DiamondQueen ){
         player1Hand[player1Hand.length - 1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/QD.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
   
      }
      if(result === DiamondKing ){
         player1Hand[player1Hand.length - 1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/KD.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
        
      }
      if(result === DiamondAce ){
         player1Hand[player1Hand.length - 1] = 11
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/AD.png"
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")     
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Diamond2 ){
         player1Hand[player1Hand.length - 1] = 2
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/2D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
   
      }
      if(result === Diamond3 ){
         player1Hand[player1Hand.length - 1] = 3
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/3D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
    
      }
      if(result === Diamond4 ){
         player1Hand[player1Hand.length - 1] = 4
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/4D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Diamond5 ){
         player1Hand[player1Hand.length - 1] = 5
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/5D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Diamond6 ){
         player1Hand[player1Hand.length - 1] = 6
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/6D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Diamond7 ){
         player1Hand[player1Hand.length - 1] = 7
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/7D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Diamond8 ){
         player1Hand[player1Hand.length - 1] = 8
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/8D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Diamond9 ){
         player1Hand[player1Hand.length - 1] = 9
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/9D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
   
      if(result === Diamond10 ){
         player1Hand[player1Hand.length - 1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/10D.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      
       //Hearts//
   
       if(result === HeartJack ){
         player1Hand[player1Hand.length - 1] = 10
         let player1Card = document.createElement("img")
         player1Card.src="./PNG/JH.png" 
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")   
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === HeartQueen ){
         player1Hand[player1Hand.length - 1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/QH.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
   
      }
      if(result === HeartKing ){
         player1Hand[player1Hand.length - 1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/KH.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
        
      }
      if(result === HeartAce ){
         player1Hand[player1Hand.length - 1] = 11
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/AH.png"
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")     
         player1Div.appendChild(player1Card)
      
      }
      if(result === Heart2 ){
         player1Hand[player1Hand.length - 1] = 2
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/2H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
   
      }
      if(result === Heart3 ){
         player1Hand[player1Hand.length - 1] = 3
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/3H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
    
      }
      if(result === Heart4 ){
         player1Hand[player1Hand.length - 1] = 4
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/4H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Heart5 ){
         player1Hand[player1Hand.length - 1] = 5
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/5H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Heart6 ){
         player1Hand[player1Hand.length - 1] = 6
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/6H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Heart7 ){
         player1Hand[player1Hand.length - 1] = 7
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/7H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Heart8 ){
         player1Hand[player1Hand.length - 1] = 8
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/8H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Heart9 ){
         player1Hand[player1Hand.length - 1] = 9
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/9H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
   
      if(result === Heart10 ){
         player1Hand[player1Hand.length - 1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/10H.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
       //Club//
   
      if(result === ClubJack ){
         player1Hand[player1Hand.length - 1] = 10
         let player1Card = document.createElement("img")
         player1Card.src="./PNG/JC.png" 
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")   
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === ClubQueen ){
         player1Hand[player1Hand.length - 1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/QC.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
   
      }
      if(result === ClubKing ){
         player1Hand[player1Hand.length - 1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/KC.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
        
      }
      if(result === ClubAce ){
         player1Hand[player1Hand.length - 1] = 11
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/AC.png"
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")     
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Club2 ){
         player1Hand[player1Hand.length - 1] = 2
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/2C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
   
      }
      if(result === Club3 ){
         player1Hand[player1Hand.length - 1] = 3
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/3C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
    
      }
      if(result === Club4 ){
         player1Hand[player1Hand.length - 1] = 4
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/4C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Club5 ){
         player1Hand[player1Hand.length - 1] = 5
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/5C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Club6 ){
         player1Hand[player1Hand.length - 1] = 6
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/6C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Club7 ){
         player1Hand[player1Hand.length - 1] = 7
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/7C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Club8 ){
         player1Hand[player1Hand.length - 1] = 8
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/8C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Club9 ){
         player1Hand[player1Hand.length - 1] = 9
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/9C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      }
   
      if(result === Club10 ){
         player1Hand[player1Hand.length - 1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/10C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      
      } 
      
      //Spade//
      
      if(result === SpadeJack ){
         player1Hand[player1Hand.length - 1] = 10
         let player1Card = document.createElement("img")
         player1Card.src="./PNG/JS.png" 
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")   
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === SpadeQueen ){
         player1Hand[player1Hand.length - 1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/QS.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
   
      }
      if(result === SpadeKing ){
         player1Hand[player1Hand.length - 1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/KS.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
        
      }
      if(result === SpadeAce ){
         player1Hand[player1Hand.length - 1] = 11
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/AS.png"
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")     
         player1Div.appendChild(player1Card)
         break;
      
      }
      if(result === Spade2 ){
         player1Hand[player1Hand.length - 1] = 2
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/2S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
   
      }
      if(result === Spade3 ){
         player1Hand[player1Hand.length - 1] = 3
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/3S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === Spade4 ){
         player1Hand[player1Hand.length - 1] = 4
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/4S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === Spade5 ){
         player1Hand[player1Hand.length - 1] = 5
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/5C.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === Spade6 ){
         player1Hand[player1Hand.length - 1] = 6
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/6S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === Spade7 ){
         player1Hand[player1Hand.length - 1] = 7
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/7S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === Spade8 ){
         player1Hand[player1Hand.length - 1] = 8
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/8S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      }
      if(result === Spade9 ){
         player1Hand[player1Hand.length - 1] = 9
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/9S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;
      }
   
      if(result === Spade10 ){
         player1Hand[player1Hand.length - 1] = 10
         let player1Card = document.createElement("img")
         player1Card.src= "./PNG/10S.png"   
         player1Card.setAttribute("width", "100px" )
         player1Card.setAttribute("class", "png-white-player")  
         player1Div.appendChild(player1Card)
         break;      
      } 

      else{



      }
   
   
      
   }

 
//Adds The Hand Values
   let playerSum = 0;
   for(let i= 0  ;i < player1Hand.length; i++ ){
      playerSum += player1Hand[i]
   }
//Looks for an ACE in Player 1 Hand and subtracts 10 from the total sum 
   for (let i=0; i< player1Hand.length; i++ ){

      
      
      if(player1Hand[0]=== 11){
         console.log("1st Card Ace")

         if(playerSum > 21){
            playerSum = playerSum - 10
            console.log(`Player 1 Hand is : ${player1Hand}`)
            console.log(`Player 1 Hand Sum is : ${playerSum}`)
            break;
            
         }
         console.log(playerSum)
         
         
      }
      if(player1Hand[1]=== 11){
         console.log("2nd Card Ace")

         if(playerSum > 21){
            playerSum = playerSum - 10
            console.log(`Player 1 Hand is : ${player1Hand}`)
            console.log(`Player 1 Hand Sum is : ${playerSum}`)
            break;
            
         }
         console.log(playerSum)
         
         
      }
      if(player1Hand[2]=== 11){
         console.log("3rd Card Ace")

         if(playerSum > 21){
            playerSum = playerSum - 10
            console.log(`Player 1 Hand is : ${player1Hand}`)
            console.log(`Player 1 Hand Sum is : ${playerSum}`)
            break;
            
         }
         console.log(playerSum)
         
         
      }
      if(player1Hand[3]=== 11){
         console.log("4th Card Ace")

         if(playerSum > 21){
            playerSum = playerSum - 10
            console.log(`Player 1 Hand is : ${player1Hand}`)
            console.log(`Player 1 Hand Sum is : ${playerSum}`)
            break;
            
         }
         console.log(playerSum)
         
         
      }
      if(player1Hand[4]=== 11){
         console.log("5th Card Ace")

         if(playerSum > 21){
            playerSum = playerSum - 10
            console.log(`Player 1 Hand is : ${player1Hand}`)
            console.log(`Player 1 Hand Sum is : ${playerSum}`)
            break;
            
         }
         console.log(playerSum)
         
         
      }
      if(player1Hand[5]=== 11){
         console.log("6th Card Ace")

         if(playerSum > 21){
            playerSum = playerSum - 10
            console.log(`Player 1 Hand is : ${player1Hand}`)
            console.log(`Player 1 Hand Sum is : ${playerSum}`)
            break;
            
         }
         console.log(playerSum)
         
         
      }
      if(player1Hand[6]=== 11){
         console.log("7th Card Ace")

         if(playerSum > 21){
            playerSum = playerSum - 10
            console.log(`Player 1 Hand is : ${player1Hand}`)
            console.log(`Player 1 Hand Sum is : ${playerSum}`)
            break;
            
         }
         console.log(playerSum)
         
         
      }

    
   
   
   
      
   
   
   }







   if( playerSum < 21){
      console.log("Hit Again?")
      console.log("Stand?")
      console.log(`Dealer Hand is : ${dealerHand}`)
      console.log(`Dealer Hand Sum is : ${dealerSum}`)
      console.log(`Player 1 Hand is : ${player1Hand}`)
      console.log(`Player 1 Hand Sum is : ${playerSum}`)
   }
   else if(playerSum === 21){
   //Removes Fake Back Card
   dealerCardFake.remove()
   // Draws Dealers Real 2nd Card
   dealerHand.push(DrawCard(Shoe))
   // Below gives 2nd Card a picture 
   for (let i=1; i < dealerHand.length; i++ ){
      let result = dealerHand[i]
      
      //Diamonds//
      if(result === DiamondJack ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src="./PNG/JD.png" 
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")   
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === DiamondQueen ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/QD.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === DiamondKing ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/KD.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
        
      }
      if(result === DiamondAce ){
         dealerHand[1] = 11
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/AD.png"
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")     
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond2 ){
         dealerHand[1] = 2
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/2D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === Diamond3 ){
         dealerHand[1] = 3
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/3D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
    
      }
      if(result === Diamond4 ){
         dealerHand[1] = 4
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/4D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond5 ){
         dealerHand[1] = 5
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/5D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond6 ){
         dealerHand[1] = 6
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/6D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond7 ){
         dealerHand[1] = 7
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/7D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond8 ){
         dealerHand[1] = 8
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/8D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond9 ){
         dealerHand[1] = 9
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/9D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
   
      if(result === Diamond10 ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/10D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      
       //Hearts//
   
       if(result === HeartJack ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src="./PNG/JH.png" 
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")   
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === HeartQueen ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/QH.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === HeartKing ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/KH.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
        
      }
      if(result === HeartAce ){
         dealerHand[1] = 11
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/AH.png"
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")     
         dealerHandDiv.appendChild(dealerCard)
      
      }
      if(result === Heart2 ){
         dealerHand[1] = 2
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/2H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === Heart3 ){
         dealerHand[1] = 3
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/3H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
    
      }
      if(result === Heart4 ){
         dealerHand[1] = 4
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/4H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Heart5 ){
         dealerHand[1] = 5
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/5H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Heart6 ){
         dealerHand[1] = 6
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/6H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Heart7 ){
         dealerHand[1] = 7
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/7H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Heart8 ){
         dealerHand[1] = 8
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/8H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Heart9 ){
         dealerHand[1] = 9
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/9H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
   
      if(result === Heart10 ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/10H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
       //Club//
   
      if(result === ClubJack ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src="./PNG/JC.png" 
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")   
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === ClubQueen ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/QC.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === ClubKing ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/KC.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
        
      }
      if(result === ClubAce ){
         dealerHand[1] = 11
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/AC.png"
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")     
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club2 ){
         dealerHand[1] = 2
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/2C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === Club3 ){
         dealerHand[1] = 3
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/3C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
    
      }
      if(result === Club4 ){
         dealerHand[1] = 4
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/4C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club5 ){
         dealerHand[1] = 5
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/5C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club6 ){
         dealerHand[1] = 6
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/6C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club7 ){
         dealerHand[1] = 7
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/7C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club8 ){
         dealerHand[1] = 8
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/8C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club9 ){
         dealerHand[1] = 9
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/9C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
   
      if(result === Club10 ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/10C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      } 
      
      //Spade//
      
      if(result === SpadeJack ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src="./PNG/JS.png" 
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")   
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === SpadeQueen ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/QS.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === SpadeKing ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/KS.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
        
      }
      if(result === SpadeAce ){
         dealerHand[1] = 11
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/AS.png"
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")     
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Spade2 ){
         dealerHand[1] = 2
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/2S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === Spade3 ){
         dealerHand[1] = 3
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/3S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade4 ){
         dealerHand[1] = 4
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/4S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade5 ){
         dealerHand[1] = 5
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/5C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade6 ){
         dealerHand[1] = 6
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/6S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade7 ){
         dealerHand[1] = 7
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/7S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade8 ){
         dealerHand[1] = 8
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/8S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade9 ){
         dealerHand[1] = 9
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/9S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
   
      if(result === Spade10 ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/10S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;      
      } 
   
   
      
   }
   // Below Adds Hands
   let dealerSum = 0 
   let playerSum = 0
    for (let i=0; i< dealerHand.length; i++ ){
 
    dealerSum += dealerHand[i];
  }
 
   for (let i=0; i< player1Hand.length; i++ ){
 
    playerSum += player1Hand[i];
    
 
 
 }

 if (playerSum === dealerSum){
   playerWin = undefined
   gamba(playerWin)
   balance.innerText = `Balance: ${playerBalance} USD`
  
   function alertAll (){
     alert("PUSH")
     
  
  }
  
  setTimeout (alertAll, 2000)
  
  function refresh(){
     location.reload();
  
  }
  setTimeout (refresh, 2800)
  

 }

 else{
   playerWin = true
   gamba(playerWin)
   balance.innerText = `Balance: ${playerBalance} USD`
  
   function alertAll (){
     alert("Black Jack Player 1 Wins")
     
  
  }
  
  setTimeout (alertAll, 2000)
  
  function refresh(){
     location.reload();
  
  }
  setTimeout (refresh, 2800)
  
 }

   }
  else if( playerSum > 21){

   
   console.log("Player 1 Cards: ")
   console.log(player1Hand)
   console.log("Player 1 Hand Total")
   console.log(playerSum)
   console.log("Player 1 Busted")

   

 
      //Removes Fake Back Card
      dealerCardFake.remove()
      // Draws Dealers Real 2nd Card
      dealerHand.push(DrawCard(Shoe))
      // Below gives 2nd Card a picture 
      for (let i=1; i < dealerHand.length; i++ ){
         let result = dealerHand[i]
         
         //Diamonds//
         if(result === DiamondJack ){
            dealerHand[1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src="./PNG/JD.png" 
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")   
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === DiamondQueen ){
            dealerHand[1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/QD.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === DiamondKing ){
            dealerHand[1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/KD.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
           
         }
         if(result === DiamondAce ){
            dealerHand[1] = 11
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/AD.png"
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")     
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Diamond2 ){
            dealerHand[1] = 2
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/2D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === Diamond3 ){
            dealerHand[1] = 3
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/3D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
       
         }
         if(result === Diamond4 ){
            dealerHand[1] = 4
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/4D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Diamond5 ){
            dealerHand[1] = 5
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/5D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Diamond6 ){
            dealerHand[1] = 6
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/6D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Diamond7 ){
            dealerHand[1] = 7
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/7D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Diamond8 ){
            dealerHand[1] = 8
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/8D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Diamond9 ){
            dealerHand[1] = 9
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/9D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
      
         if(result === Diamond10 ){
            dealerHand[1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/10D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         
          //Hearts//
      
          if(result === HeartJack ){
            dealerHand[1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src="./PNG/JH.png" 
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")   
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === HeartQueen ){
            dealerHand[1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/QH.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === HeartKing ){
            dealerHand[1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/KH.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
           
         }
         if(result === HeartAce ){
            dealerHand[1] = 11
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/AH.png"
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")     
            dealerHandDiv.appendChild(dealerCard)
         
         }
         if(result === Heart2 ){
            dealerHand[1] = 2
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/2H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === Heart3 ){
            dealerHand[1] = 3
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/3H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
       
         }
         if(result === Heart4 ){
            dealerHand[1] = 4
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/4H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Heart5 ){
            dealerHand[1] = 5
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/5H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Heart6 ){
            dealerHand[1] = 6
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/6H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Heart7 ){
            dealerHand[1] = 7
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/7H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Heart8 ){
            dealerHand[1] = 8
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/8H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Heart9 ){
            dealerHand[1] = 9
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/9H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
      
         if(result === Heart10 ){
            dealerHand[1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/10H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
          //Club//
      
         if(result === ClubJack ){
            dealerHand[1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src="./PNG/JC.png" 
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")   
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === ClubQueen ){
            dealerHand[1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/QC.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === ClubKing ){
            dealerHand[1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/KC.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
           
         }
         if(result === ClubAce ){
            dealerHand[1] = 11
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/AC.png"
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")     
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Club2 ){
            dealerHand[1] = 2
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/2C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === Club3 ){
            dealerHand[1] = 3
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/3C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
       
         }
         if(result === Club4 ){
            dealerHand[1] = 4
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/4C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Club5 ){
            dealerHand[1] = 5
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/5C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Club6 ){
            dealerHand[1] = 6
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/6C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Club7 ){
            dealerHand[1] = 7
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/7C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Club8 ){
            dealerHand[1] = 8
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/8C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Club9 ){
            dealerHand[1] = 9
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/9C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
      
         if(result === Club10 ){
            dealerHand[1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/10C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         } 
         
         //Spade//
         
         if(result === SpadeJack ){
            dealerHand[1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src="./PNG/JS.png" 
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")   
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === SpadeQueen ){
            dealerHand[1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/QS.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === SpadeKing ){
            dealerHand[1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/KS.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
           
         }
         if(result === SpadeAce ){
            dealerHand[1] = 11
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/AS.png"
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")     
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Spade2 ){
            dealerHand[1] = 2
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/2S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === Spade3 ){
            dealerHand[1] = 3
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/3S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === Spade4 ){
            dealerHand[1] = 4
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/4S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === Spade5 ){
            dealerHand[1] = 5
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/5C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === Spade6 ){
            dealerHand[1] = 6
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/6S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === Spade7 ){
            dealerHand[1] = 7
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/7S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === Spade8 ){
            dealerHand[1] = 8
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/8S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === Spade9 ){
            dealerHand[1] = 9
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/9S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
      
         if(result === Spade10 ){
            dealerHand[1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/10S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;      
         } 
      
      
         
      }

      dealerSum = 0 
      for (let i=0; i< dealerHand.length; i++ ){
    
       dealerSum += dealerHand[i];
     }

   
   playerWin = false
   gamba(playerWin)
   balance.innerText = `Balance: ${playerBalance} USD`
   function alertAll (){
      alert("Player 1 Bust! Dealer Wins ")
 
      

   }

   setTimeout (alertAll, 2000)

   function refresh(){
      location.reload();

   }
   setTimeout (refresh, 2800)
   
   
}

playerOneSumTracker.innerText = playerSum
dealerSumTracker.innerText =dealerSum


}



  

)
//!Stand
stand.addEventListener('click', function(){

   //Below Makes Sure Player 1 Hand is the same as before the stand button was clicked 
   console.log(player1Hand)
   let playerSum = 0;
   //Adds The Player Hand Values
      for(let i= 0  ;i < player1Hand.length; i++ ){
         playerSum += player1Hand[i]
      }
      // search for Ace in player 1 hand and minus 10 if there is an ACE 
    for (let i=0; i< player1Hand.length; i++ ){

      
      
      if(player1Hand[0]=== 11){
         console.log("First Card Ace")

         if(playerSum > 21){
            playerSum = playerSum - 10
            console.log(`Player 1 Hand is : ${player1Hand}`)
            console.log(`Player 1 Hand Sum is : ${playerSum}`)
            break;
            
         }
         console.log(playerSum)
         
         
      }
      if(player1Hand[1]=== 11){
         console.log("First Card Ace")

         if(playerSum > 21){
            playerSum = playerSum - 10
            console.log(`Player 1 Hand is : ${player1Hand}`)
            console.log(`Player 1 Hand Sum is : ${playerSum}`)
            break;
            
         }
         console.log(playerSum)
         
         
      }
      if(player1Hand[2]=== 11){
         console.log("First Card Ace")

         if(playerSum > 21){
            playerSum = playerSum - 10
            console.log(`Player 1 Hand is : ${player1Hand}`)
            console.log(`Player 1 Hand Sum is : ${playerSum}`)
            break;
            
         }
         console.log(playerSum)
         
         
      }
      if(player1Hand[3]=== 11){
         console.log("First Card Ace")

         if(playerSum > 21){
            playerSum = playerSum - 10
            console.log(`Player 1 Hand is : ${player1Hand}`)
            console.log(`Player 1 Hand Sum is : ${playerSum}`)
            break;
            
         }
         console.log(playerSum)
         
         
      }
      if(player1Hand[4]=== 11){
         console.log("First Card Ace")

         if(playerSum > 21){
            playerSum = playerSum - 10
            console.log(`Player 1 Hand is : ${player1Hand}`)
            console.log(`Player 1 Hand Sum is : ${playerSum}`)
            break;
            
         }
         console.log(playerSum)
         
         
      }
      if(player1Hand[5]=== 11){
         console.log("First Card Ace")

         if(playerSum > 21){
            playerSum = playerSum - 10
            console.log(`Player 1 Hand is : ${player1Hand}`)
            console.log(`Player 1 Hand Sum is : ${playerSum}`)
            break;
            
         }
         console.log(playerSum)
         
         
      }
      if(player1Hand[6]=== 11){
         console.log("First Card Ace")

         if(playerSum > 21){
            playerSum = playerSum - 10
            console.log(`Player 1 Hand is : ${player1Hand}`)
            console.log(`Player 1 Hand Sum is : ${playerSum}`)
            break;
            
         }
         console.log(playerSum)
         
         
      }

    
   
   
   
      
   
   
   }
   console.log(playerSum)



   //Removes Fake Back Card
   dealerCardFake.remove()
   // Draws Dealers Real 2nd Card
   dealerAddCard()
   setTimeout (dealerAddCard, 1500)
   // Below gives 2nd Card a picture 
   for (let i=1; i < dealerHand.length; i++ ){
      let result = dealerHand[i]
      
      //Diamonds//
      if(result === DiamondJack ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src="./PNG/JD.png" 
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")   
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === DiamondQueen ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/QD.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === DiamondKing ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/KD.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
        
      }
      if(result === DiamondAce ){
         dealerHand[1] = 11
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/AD.png"
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")     
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond2 ){
         dealerHand[1] = 2
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/2D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === Diamond3 ){
         dealerHand[1] = 3
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/3D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
    
      }
      if(result === Diamond4 ){
         dealerHand[1] = 4
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/4D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond5 ){
         dealerHand[1] = 5
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/5D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond6 ){
         dealerHand[1] = 6
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/6D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond7 ){
         dealerHand[1] = 7
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/7D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond8 ){
         dealerHand[1] = 8
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/8D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond9 ){
         dealerHand[1] = 9
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/9D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
   
      if(result === Diamond10 ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/10D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      
       //Hearts//
   
       if(result === HeartJack ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src="./PNG/JH.png" 
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")   
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === HeartQueen ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/QH.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === HeartKing ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/KH.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
        
      }
      if(result === HeartAce ){
         dealerHand[1] = 11
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/AH.png"
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")     
         dealerHandDiv.appendChild(dealerCard)
      
      }
      if(result === Heart2 ){
         dealerHand[1] = 2
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/2H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === Heart3 ){
         dealerHand[1] = 3
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/3H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
    
      }
      if(result === Heart4 ){
         dealerHand[1] = 4
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/4H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Heart5 ){
         dealerHand[1] = 5
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/5H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Heart6 ){
         dealerHand[1] = 6
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/6H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Heart7 ){
         dealerHand[1] = 7
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/7H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Heart8 ){
         dealerHand[1] = 8
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/8H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Heart9 ){
         dealerHand[1] = 9
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/9H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
   
      if(result === Heart10 ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/10H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
       //Club//
   
      if(result === ClubJack ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src="./PNG/JC.png" 
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")   
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === ClubQueen ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/QC.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === ClubKing ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/KC.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
        
      }
      if(result === ClubAce ){
         dealerHand[1] = 11
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/AC.png"
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")     
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club2 ){
         dealerHand[1] = 2
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/2C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === Club3 ){
         dealerHand[1] = 3
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/3C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
    
      }
      if(result === Club4 ){
         dealerHand[1] = 4
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/4C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club5 ){
         dealerHand[1] = 5
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/5C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club6 ){
         dealerHand[1] = 6
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/6C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club7 ){
         dealerHand[1] = 7
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/7C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club8 ){
         dealerHand[1] = 8
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/8C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club9 ){
         dealerHand[1] = 9
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/9C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
   
      if(result === Club10 ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/10C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      } 
      
      //Spade//
      
      if(result === SpadeJack ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src="./PNG/JS.png" 
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")   
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === SpadeQueen ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/QS.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === SpadeKing ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/KS.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
        
      }
      if(result === SpadeAce ){
         dealerHand[1] = 11
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/AS.png"
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")     
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Spade2 ){
         dealerHand[1] = 2
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/2S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === Spade3 ){
         dealerHand[1] = 3
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/3S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade4 ){
         dealerHand[1] = 4
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/4S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade5 ){
         dealerHand[1] = 5
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/5C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade6 ){
         dealerHand[1] = 6
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/6S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade7 ){
         dealerHand[1] = 7
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/7S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade8 ){
         dealerHand[1] = 8
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/8S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade9 ){
         dealerHand[1] = 9
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/9S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
   
      if(result === Spade10 ){
         dealerHand[1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/10S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;      
      } 
   
   
      
   }
   // Below Adds Hands
   let dealerSum = 0 
   for (let i=0; i< dealerHand.length; i++ ){
 
    dealerSum += dealerHand[i];
  }
// search for Ace in Dealer hand and minus 10 if there is an ACE 
for (let i=0; i< dealerHand.length; i++ ){

      
      
   if(dealerHand[0]=== 11){
      console.log("1st Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[1]=== 11){
      console.log("2nd Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[2]=== 11){
      console.log("3rd Card an Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[3]=== 11){
      console.log("4th Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[4]=== 11){
      console.log("5th Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[5]=== 11){
      console.log("6th Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[6]=== 11){
      console.log("7th Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }

 



   


}

 


  // Based on the two cards the dealer "bot" will act accordingly //-----------------------------------------------------------------------------  

   if( dealerSum === 21){

      if(dealerSum === playerSum) {
         function alertAll (){
            alert("PUSH")
            
      
         }
      
         setTimeout (alertAll, 2000)
      
         function refresh(){
            location.reload();
      
         }
         setTimeout (refresh, 2800)
   
         
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         console.log(`Player 1 Hand is : ${player1Hand}`)
         console.log(`Player 1 Hand Sum is : ${playerSum}`)
         dealerSumTracker.innerText =dealerSum
      } 
      else{
         function alertAll (){
            alert("Black Jack! Dealer Wins")
            
      
         }
      
         setTimeout (alertAll, 2000)
      
         function refresh(){
            location.reload();
      
         }
         setTimeout (refresh, 2800)
   
         
      console.log(`Dealer Hand is : ${dealerHand}`)
      console.log(`Dealer Hand Sum is : ${dealerSum}`)
      console.log(`Player 1 Hand is : ${player1Hand}`)
      console.log(`Player 1 Hand Sum is : ${playerSum}`)
      dealerSumTracker.innerText =dealerSum
      }
   }
   //-----------------------------------------------------------------------------2 Cards  
   else if (dealerSum <= 16 ){
      console.log("Dealer Hits")
      //Below Dealers 3rd Card will be drawn
      dealerHand.push(DrawCard(Shoe))
      //Below Gives 3rd Card a picture and adds to Div
      for (let i=dealerHand.length - 1; i <= dealerHand.length; i++ ){
         let result = dealerHand[i]
         
         //Diamonds//
         if(result === DiamondJack ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src="./PNG/JD.png" 
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")   
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === DiamondQueen ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/QD.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === DiamondKing ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/KD.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
           
         }
         if(result === DiamondAce ){
            dealerHand[dealerHand.length - 1] = 11
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/AD.png"
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")     
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Diamond2 ){
            dealerHand[dealerHand.length - 1] = 2
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/2D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === Diamond3 ){
            dealerHand[dealerHand.length - 1] = 3
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/3D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
       
         }
         if(result === Diamond4 ){
            dealerHand[dealerHand.length - 1] = 4
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/4D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Diamond5 ){
            dealerHand[dealerHand.length - 1] = 5
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/5D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Diamond6 ){
            dealerHand[dealerHand.length - 1] = 6
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/6D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Diamond7 ){
            dealerHand[dealerHand.length - 1] = 7
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/7D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Diamond8 ){
            dealerHand[dealerHand.length - 1] = 8
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/8D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Diamond9 ){
            dealerHand[dealerHand.length - 1] = 9
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/9D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
      
         if(result === Diamond10 ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/10D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         
          //Hearts//
      
          if(result === HeartJack ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src="./PNG/JH.png" 
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")   
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === HeartQueen ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/QH.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === HeartKing ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/KH.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
           
         }
         if(result === HeartAce ){
            dealerHand[dealerHand.length - 1] = 11
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/AH.png"
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")     
            dealerHandDiv.appendChild(dealerCard)
         
         }
         if(result === Heart2 ){
            dealerHand[dealerHand.length - 1] = 2
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/2H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === Heart3 ){
            dealerHand[dealerHand.length - 1] = 3
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/3H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
       
         }
         if(result === Heart4 ){
            dealerHand[dealerHand.length - 1] = 4
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/4H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Heart5 ){
            dealerHand[dealerHand.length - 1] = 5
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/5H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Heart6 ){
            dealerHand[dealerHand.length - 1] = 6
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/6H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Heart7 ){
            dealerHand[dealerHand.length - 1] = 7
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/7H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Heart8 ){
            dealerHand[dealerHand.length - 1] = 8
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/8H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Heart9 ){
            dealerHand[dealerHand.length - 1] = 9
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/9H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
      
         if(result === Heart10 ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/10H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
          //Club//
      
         if(result === ClubJack ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src="./PNG/JC.png" 
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")   
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === ClubQueen ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/QC.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === ClubKing ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/KC.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
           
         }
         if(result === ClubAce ){
            dealerHand[dealerHand.length - 1] = 11
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/AC.png"
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")     
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Club2 ){
            dealerHand[dealerHand.length - 1] = 2
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/2C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === Club3 ){
            dealerHand[dealerHand.length - 1] = 3
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/3C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
       
         }
         if(result === Club4 ){
            dealerHand[dealerHand.length - 1] = 4
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/4C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Club5 ){
            dealerHand[dealerHand.length - 1] = 5
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/5C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Club6 ){
            dealerHand[dealerHand.length - 1] = 6
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/6C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Club7 ){
            dealerHand[dealerHand.length - 1] = 7
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/7C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Club8 ){
            dealerHand[dealerHand.length - 1] = 8
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/8C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Club9 ){
            dealerHand[dealerHand.length - 1] = 9
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/9C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
      
         if(result === Club10 ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/10C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         } 
         
         //Spade//
         
         if(result === SpadeJack ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src="./PNG/JS.png" 
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")   
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === SpadeQueen ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/QS.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === SpadeKing ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/KS.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
           
         }
         if(result === SpadeAce ){
            dealerHand[dealerHand.length - 1] = 11
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/AS.png"
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")     
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Spade2 ){
            dealerHand[dealerHand.length - 1] = 2
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/2S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === Spade3 ){
            dealerHand[dealerHand.length - 1] = 3
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/3S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === Spade4 ){
            dealerHand[dealerHand.length - 1] = 4
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/4S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === Spade5 ){
            dealerHand[dealerHand.length - 1] = 5
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/5C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === Spade6 ){
            dealerHand[dealerHand.length - 1] = 6
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/6S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === Spade7 ){
            dealerHand[dealerHand.length - 1] = 7
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/7S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === Spade8 ){
            dealerHand[dealerHand.length - 1] = 8
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/8S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === Spade9 ){
            dealerHand[dealerHand.length - 1] = 9
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/9S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
      
         if(result === Spade10 ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/10S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;      
         } 
   
         else{
   
   
   
         }
      
      
         
      }
      //Adds the Dealers Hand
      let dealerSum = 0 
      for (let i=0; i< dealerHand.length; i++ ){
    
       dealerSum += dealerHand[i];
     }
     dealerSumTracker.innerText =dealerSum

// search for Ace in Dealer hand and minus 10 if there is an ACE 
for (let i=0; i< dealerHand.length; i++ ){

      
      
   if(dealerHand[0]=== 11){
      console.log("1st Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[1]=== 11){
      console.log("2nd Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[2]=== 11){
      console.log("3rd Card an Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[3]=== 11){
      console.log("4th Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[4]=== 11){
      console.log("5th Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[5]=== 11){
      console.log("6th Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[6]=== 11){
      console.log("7th Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }

 



   


}


 // Based on the three cards the dealer "bot" will act accordingly   

      if( dealerSum === 21){

         if(dealerSum === playerSum) {
            function alertAll (){
               alert("PUSH")
               
         
            }
         
            setTimeout (alertAll, 2000)
         
            function refresh(){
               location.reload();
         
            }
            setTimeout (refresh, 2800)
      
            
            console.log(`Dealer Hand is: `)
            console.log(dealerHand)
            console.log(`Dealer Hand Sum is: `)
            console.log(dealerSum)
            console.log(`Player 1 Hand is: `)
            console.log(player1Hand)
            console.log(`Player 1 Hand Sum is: `)
            console.log(playerSum)
            dealerSumTracker.innerText =dealerSum
         } 
         else{
            function alertAll (){
               alert("Black Jack! Dealer Wins!")
               
         
            }
         
            setTimeout (alertAll, 2000)
         
            function refresh(){
               location.reload();
         
            }
            setTimeout (refresh, 2800)
      
            
         console.log(`Dealer Hand is: `)
         console.log(dealerHand)
         console.log(`Dealer Hand Sum is: `)
         console.log(dealerSum)
         console.log(`Player 1 Hand is: `)
         console.log(player1Hand)
         console.log(`Player 1 Hand Sum is: `)
         console.log(playerSum)
         dealerSumTracker.innerText =dealerSum
         }
      }
      //----------------------------------------------------------------------------- 3 Cards 

      else if (dealerSum <= 16 ){
      console.log("Dealer Hits")
      //Below Dealers 4rd Card will be drawn
      dealerHand.push(DrawCard(Shoe))
      //Below Gives 4rd Card a picture 
      for (let i=dealerHand.length - 1; i <= dealerHand.length; i++ ){
         let result = dealerHand[i]
         
         //Diamonds//
         if(result === DiamondJack ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src="./PNG/JD.png" 
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")   
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === DiamondQueen ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/QD.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === DiamondKing ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/KD.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
           
         }
         if(result === DiamondAce ){
            dealerHand[dealerHand.length - 1] = 11
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/AD.png"
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")     
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Diamond2 ){
            dealerHand[dealerHand.length - 1] = 2
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/2D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === Diamond3 ){
            dealerHand[dealerHand.length - 1] = 3
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/3D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
       
         }
         if(result === Diamond4 ){
            dealerHand[dealerHand.length - 1] = 4
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/4D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Diamond5 ){
            dealerHand[dealerHand.length - 1] = 5
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/5D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Diamond6 ){
            dealerHand[dealerHand.length - 1] = 6
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/6D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Diamond7 ){
            dealerHand[dealerHand.length - 1] = 7
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/7D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Diamond8 ){
            dealerHand[dealerHand.length - 1] = 8
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/8D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Diamond9 ){
            dealerHand[dealerHand.length - 1] = 9
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/9D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
      
         if(result === Diamond10 ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/10D.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         
          //Hearts//
      
          if(result === HeartJack ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src="./PNG/JH.png" 
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")   
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === HeartQueen ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/QH.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === HeartKing ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/KH.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
           
         }
         if(result === HeartAce ){
            dealerHand[dealerHand.length - 1] = 11
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/AH.png"
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")     
            dealerHandDiv.appendChild(dealerCard)
         
         }
         if(result === Heart2 ){
            dealerHand[dealerHand.length - 1] = 2
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/2H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === Heart3 ){
            dealerHand[dealerHand.length - 1] = 3
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/3H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
       
         }
         if(result === Heart4 ){
            dealerHand[dealerHand.length - 1] = 4
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/4H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Heart5 ){
            dealerHand[dealerHand.length - 1] = 5
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/5H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Heart6 ){
            dealerHand[dealerHand.length - 1] = 6
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/6H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Heart7 ){
            dealerHand[dealerHand.length - 1] = 7
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/7H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Heart8 ){
            dealerHand[dealerHand.length - 1] = 8
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/8H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Heart9 ){
            dealerHand[dealerHand.length - 1] = 9
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/9H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
      
         if(result === Heart10 ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/10H.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
          //Club//
      
         if(result === ClubJack ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src="./PNG/JC.png" 
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")   
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === ClubQueen ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/QC.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === ClubKing ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/KC.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
           
         }
         if(result === ClubAce ){
            dealerHand[dealerHand.length - 1] = 11
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/AC.png"
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")     
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Club2 ){
            dealerHand[dealerHand.length - 1] = 2
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/2C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === Club3 ){
            dealerHand[dealerHand.length - 1] = 3
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/3C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
       
         }
         if(result === Club4 ){
            dealerHand[dealerHand.length - 1] = 4
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/4C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Club5 ){
            dealerHand[dealerHand.length - 1] = 5
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/5C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Club6 ){
            dealerHand[dealerHand.length - 1] = 6
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/6C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Club7 ){
            dealerHand[dealerHand.length - 1] = 7
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/7C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Club8 ){
            dealerHand[dealerHand.length - 1] = 8
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/8C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Club9 ){
            dealerHand[dealerHand.length - 1] = 9
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/9C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
      
         if(result === Club10 ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/10C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         } 
         
         //Spade//
         
         if(result === SpadeJack ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src="./PNG/JS.png" 
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")   
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === SpadeQueen ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/QS.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === SpadeKing ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/KS.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
           
         }
         if(result === SpadeAce ){
            dealerHand[dealerHand.length - 1] = 11
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/AS.png"
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")     
            dealerHandDiv.appendChild(dealerCard)
            break;
         
         }
         if(result === Spade2 ){
            dealerHand[dealerHand.length - 1] = 2
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/2S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
      
         }
         if(result === Spade3 ){
            dealerHand[dealerHand.length - 1] = 3
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/3S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === Spade4 ){
            dealerHand[dealerHand.length - 1] = 4
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/4S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === Spade5 ){
            dealerHand[dealerHand.length - 1] = 5
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/5C.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === Spade6 ){
            dealerHand[dealerHand.length - 1] = 6
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/6S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === Spade7 ){
            dealerHand[dealerHand.length - 1] = 7
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/7S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === Spade8 ){
            dealerHand[dealerHand.length - 1] = 8
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/8S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
         if(result === Spade9 ){
            dealerHand[dealerHand.length - 1] = 9
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/9S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;
         }
      
         if(result === Spade10 ){
            dealerHand[dealerHand.length - 1] = 10
            let dealerCard = document.createElement("img")
            dealerCard.src= "./PNG/10S.png"   
            dealerCard.setAttribute("width", "100px" )
            dealerCard.setAttribute("class", "png-white")  
            dealerHandDiv.appendChild(dealerCard)
            break;      
         } 
   
         else{
   
   
   
         }
      
      
         
      }
      //Below adds the hand
      let dealerSum = 0 
      for (let i=0; i< dealerHand.length; i++ ){
    
       dealerSum += dealerHand[i];
      }

     // search for Ace in Dealer hand and minus 10 if there is an ACE 
      for (let i=0; i< dealerHand.length; i++ ){

      
      
   if(dealerHand[0]=== 11){
      console.log("1st Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[1]=== 11){
      console.log("2nd Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[2]=== 11){
      console.log("3rd Card an Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[3]=== 11){
      console.log("4th Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[4]=== 11){
      console.log("5th Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[5]=== 11){
      console.log("6th Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[6]=== 11){
      console.log("7th Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }

 



   


      }




    

    // Based on the four cards the dealer "bot" will act accordingly   

   if( dealerSum === 21){

      if(dealerSum === playerSum){
         function alertAll (){
            alert("PUSH")
            
      
         }
      
         setTimeout (alertAll, 2000)
      
         function refresh(){
            location.reload();
      
         }
         setTimeout (refresh, 2800)
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         console.log(`Player 1 Hand is : ${player1Hand}`)
         console.log(`Player 1 Hand Sum is : ${playerSum}`)
         dealerSumTracker.innerText =dealerSum
      }
      else{
         function alertAll (){
            alert("Black Jack! Dealer Wins!")
            
      
         }
      
         setTimeout (alertAll, 2000)
      
         function refresh(){
            location.reload();
      
         }
         setTimeout (refresh, 2800)
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         console.log(`Player 1 Hand is : ${player1Hand}`)
         console.log(`Player 1 Hand Sum is : ${playerSum}`)
         dealerSumTracker.innerText =dealerSum
      }
   
     
   }
   //-----------------------------------------------------------------------------  4 cards

   else if (dealerSum <= 16 ){
   //Below Dealers 5th Card will be drawn
   dealerHand.push(DrawCard(Shoe))
   //Below Gives 5th Card a picture 
   for (let i=dealerHand.length - 1; i <= dealerHand.length; i++ ){
      let result = dealerHand[i]
      
      //Diamonds//
      if(result === DiamondJack ){
         dealerHand[dealerHand.length - 1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src="./PNG/JD.png" 
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")   
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === DiamondQueen ){
         dealerHand[dealerHand.length - 1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/QD.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === DiamondKing ){
         dealerHand[dealerHand.length - 1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/KD.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
        
      }
      if(result === DiamondAce ){
         dealerHand[dealerHand.length - 1] = 11
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/AD.png"
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")     
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond2 ){
         dealerHand[dealerHand.length - 1] = 2
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/2D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === Diamond3 ){
         dealerHand[dealerHand.length - 1] = 3
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/3D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
    
      }
      if(result === Diamond4 ){
         dealerHand[dealerHand.length - 1] = 4
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/4D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond5 ){
         dealerHand[dealerHand.length - 1] = 5
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/5D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond6 ){
         dealerHand[dealerHand.length - 1] = 6
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/6D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond7 ){
         dealerHand[dealerHand.length - 1] = 7
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/7D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond8 ){
         dealerHand[dealerHand.length - 1] = 8
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/8D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Diamond9 ){
         dealerHand[dealerHand.length - 1] = 9
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/9D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
   
      if(result === Diamond10 ){
         dealerHand[dealerHand.length - 1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/10D.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      
       //Hearts//
   
       if(result === HeartJack ){
         dealerHand[dealerHand.length - 1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src="./PNG/JH.png" 
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")   
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === HeartQueen ){
         dealerHand[dealerHand.length - 1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/QH.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === HeartKing ){
         dealerHand[dealerHand.length - 1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/KH.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
        
      }
      if(result === HeartAce ){
         dealerHand[dealerHand.length - 1] = 11
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/AH.png"
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")     
         dealerHandDiv.appendChild(dealerCard)
      
      }
      if(result === Heart2 ){
         dealerHand[dealerHand.length - 1] = 2
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/2H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === Heart3 ){
         dealerHand[dealerHand.length - 1] = 3
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/3H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
    
      }
      if(result === Heart4 ){
         dealerHand[dealerHand.length - 1] = 4
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/4H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Heart5 ){
         dealerHand[dealerHand.length - 1] = 5
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/5H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Heart6 ){
         dealerHand[dealerHand.length - 1] = 6
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/6H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Heart7 ){
         dealerHand[dealerHand.length - 1] = 7
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/7H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Heart8 ){
         dealerHand[dealerHand.length - 1] = 8
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/8H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Heart9 ){
         dealerHand[dealerHand.length - 1] = 9
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/9H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
   
      if(result === Heart10 ){
         dealerHand[dealerHand.length - 1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/10H.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
       //Club//
   
      if(result === ClubJack ){
         dealerHand[dealerHand.length - 1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src="./PNG/JC.png" 
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")   
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === ClubQueen ){
         dealerHand[dealerHand.length - 1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/QC.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === ClubKing ){
         dealerHand[dealerHand.length - 1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/KC.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
        
      }
      if(result === ClubAce ){
         dealerHand[dealerHand.length - 1] = 11
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/AC.png"
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")     
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club2 ){
         dealerHand[dealerHand.length - 1] = 2
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/2C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === Club3 ){
         dealerHand[dealerHand.length - 1] = 3
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/3C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
    
      }
      if(result === Club4 ){
         dealerHand[dealerHand.length - 1] = 4
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/4C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club5 ){
         dealerHand[dealerHand.length - 1] = 5
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/5C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club6 ){
         dealerHand[dealerHand.length - 1] = 6
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/6C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club7 ){
         dealerHand[dealerHand.length - 1] = 7
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/7C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club8 ){
         dealerHand[dealerHand.length - 1] = 8
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/8C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Club9 ){
         dealerHand[dealerHand.length - 1] = 9
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/9C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
   
      if(result === Club10 ){
         dealerHand[dealerHand.length - 1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/10C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      } 
      
      //Spade//
      
      if(result === SpadeJack ){
         dealerHand[dealerHand.length - 1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src="./PNG/JS.png" 
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")   
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === SpadeQueen ){
         dealerHand[dealerHand.length - 1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/QS.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === SpadeKing ){
         dealerHand[dealerHand.length - 1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/KS.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
        
      }
      if(result === SpadeAce ){
         dealerHand[dealerHand.length - 1] = 11
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/AS.png"
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")     
         dealerHandDiv.appendChild(dealerCard)
         break;
      
      }
      if(result === Spade2 ){
         dealerHand[dealerHand.length - 1] = 2
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/2S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
   
      }
      if(result === Spade3 ){
         dealerHand[dealerHand.length - 1] = 3
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/3S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade4 ){
         dealerHand[dealerHand.length - 1] = 4
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/4S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade5 ){
         dealerHand[dealerHand.length - 1] = 5
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/5C.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade6 ){
         dealerHand[dealerHand.length - 1] = 6
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/6S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade7 ){
         dealerHand[dealerHand.length - 1] = 7
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/7S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade8 ){
         dealerHand[dealerHand.length - 1] = 8
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/8S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
      if(result === Spade9 ){
         dealerHand[dealerHand.length - 1] = 9
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/9S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;
      }
   
      if(result === Spade10 ){
         dealerHand[dealerHand.length - 1] = 10
         let dealerCard = document.createElement("img")
         dealerCard.src= "./PNG/10S.png"   
         dealerCard.setAttribute("width", "100px" )
         dealerCard.setAttribute("class", "png-white")  
         dealerHandDiv.appendChild(dealerCard)
         break;      
      } 

      else{



      }
   
   
      
   }
   //Below adds the hand
   let dealerSum = 0 
   for (let i=0; i< dealerHand.length; i++ ){
 
    dealerSum += dealerHand[i];
  }
  // search for Ace in Dealer hand and minus 10 if there is an ACE 
   for (let i=0; i< dealerHand.length; i++ ){

      
      
   if(dealerHand[0]=== 11){
      console.log("1st Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[1]=== 11){
      console.log("2nd Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[2]=== 11){
      console.log("3rd Card an Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[3]=== 11){
      console.log("4th Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[4]=== 11){
      console.log("5th Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[5]=== 11){
      console.log("6th Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[6]=== 11){
      console.log("7th Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }

 



   


   }

  //Based on the 5 cards the bot will act accordingly 
  if(dealerSum === playerSum) {
   alert("Push !")
   console.log(`Dealer Hand is : ${dealerHand}`)
   console.log(`Dealer Hand Sum is : ${dealerSum}`)
   console.log(`Player 1 Hand is : ${player1Hand}`)
   console.log(`Player 1 Hand Sum is : ${playerSum}`)
}
else if( dealerSum === 21){
   function alertAll (){
      alert("Black Jack! Player 1 Wins!")
      

   }

   setTimeout (alertAll, 2000)

   function refresh(){
      location.reload();

   }
   setTimeout (refresh, 2800)

   
   if(dealerSum === playerSum){
      function alertAll (){
         alert("PUSH")
         
   
      }
   
      setTimeout (alertAll, 2000)
   
      function refresh(){
         location.reload();
   
      }
      setTimeout (refresh, 2800)

      
      console.log(`Dealer Hand is : ${dealerHand}`)
      console.log(`Dealer Hand Sum is : ${dealerSum}`)
      console.log(`Player 1 Hand is : ${player1Hand}`)
      console.log(`Player 1 Hand Sum is : ${playerSum}`)
      dealerSumTracker.innerText =dealerSum
   }
   else{
      console.log("Dealer Wins")
      alert("Dealer Wins!")
      console.log(`Dealer Hand is : ${dealerHand}`)
      console.log(`Dealer Hand Sum is : ${dealerSum}`)
      console.log(`Player 1 Hand is : ${player1Hand}`)
      console.log(`Player 1 Hand Sum is : ${playerSum}`)
      dealerSumTracker.innerText =dealerSum
   }

  
}
//----------------------------------------------------------------------------- 5 Cards
else if (dealerSum <= 16 ){
//Below Dealers 6th Card will be drawn
dealerHand.push(DrawCard(Shoe))
//Below Gives 6th Card a picture 
for (let i=dealerHand.length - 1; i <= dealerHand.length; i++ ){
   let result = dealerHand[i]
   
   //Diamonds//
   if(result === DiamondJack ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src="./PNG/JD.png" 
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")   
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === DiamondQueen ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/QD.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === DiamondKing ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/KD.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
     
   }
   if(result === DiamondAce ){
      dealerHand[dealerHand.length - 1] = 11
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/AD.png"
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")     
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Diamond2 ){
      dealerHand[dealerHand.length - 1] = 2
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/2D.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === Diamond3 ){
      dealerHand[dealerHand.length - 1] = 3
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/3D.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
 
   }
   if(result === Diamond4 ){
      dealerHand[dealerHand.length - 1] = 4
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/4D.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Diamond5 ){
      dealerHand[dealerHand.length - 1] = 5
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/5D.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Diamond6 ){
      dealerHand[dealerHand.length - 1] = 6
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/6D.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Diamond7 ){
      dealerHand[dealerHand.length - 1] = 7
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/7D.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Diamond8 ){
      dealerHand[dealerHand.length - 1] = 8
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/8D.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Diamond9 ){
      dealerHand[dealerHand.length - 1] = 9
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/9D.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }

   if(result === Diamond10 ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/10D.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   
    //Hearts//

    if(result === HeartJack ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src="./PNG/JH.png" 
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")   
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === HeartQueen ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/QH.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === HeartKing ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/KH.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
     
   }
   if(result === HeartAce ){
      dealerHand[dealerHand.length - 1] = 11
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/AH.png"
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")     
      dealerHandDiv.appendChild(dealerCard)
   
   }
   if(result === Heart2 ){
      dealerHand[dealerHand.length - 1] = 2
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/2H.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === Heart3 ){
      dealerHand[dealerHand.length - 1] = 3
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/3H.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
 
   }
   if(result === Heart4 ){
      dealerHand[dealerHand.length - 1] = 4
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/4H.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Heart5 ){
      dealerHand[dealerHand.length - 1] = 5
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/5H.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Heart6 ){
      dealerHand[dealerHand.length - 1] = 6
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/6H.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Heart7 ){
      dealerHand[dealerHand.length - 1] = 7
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/7H.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Heart8 ){
      dealerHand[dealerHand.length - 1] = 8
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/8H.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Heart9 ){
      dealerHand[dealerHand.length - 1] = 9
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/9H.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }

   if(result === Heart10 ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/10H.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
    //Club//

   if(result === ClubJack ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src="./PNG/JC.png" 
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")   
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === ClubQueen ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/QC.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === ClubKing ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/KC.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
     
   }
   if(result === ClubAce ){
      dealerHand[dealerHand.length - 1] = 11
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/AC.png"
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")     
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Club2 ){
      dealerHand[dealerHand.length - 1] = 2
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/2C.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === Club3 ){
      dealerHand[dealerHand.length - 1] = 3
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/3C.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
 
   }
   if(result === Club4 ){
      dealerHand[dealerHand.length - 1] = 4
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/4C.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Club5 ){
      dealerHand[dealerHand.length - 1] = 5
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/5C.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Club6 ){
      dealerHand[dealerHand.length - 1] = 6
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/6C.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Club7 ){
      dealerHand[dealerHand.length - 1] = 7
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/7C.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Club8 ){
      dealerHand[dealerHand.length - 1] = 8
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/8C.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Club9 ){
      dealerHand[dealerHand.length - 1] = 9
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/9C.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }

   if(result === Club10 ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/10C.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   } 
   
   //Spade//
   
   if(result === SpadeJack ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src="./PNG/JS.png" 
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")   
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === SpadeQueen ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/QS.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === SpadeKing ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/KS.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
     
   }
   if(result === SpadeAce ){
      dealerHand[dealerHand.length - 1] = 11
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/AS.png"
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")     
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Spade2 ){
      dealerHand[dealerHand.length - 1] = 2
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/2S.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === Spade3 ){
      dealerHand[dealerHand.length - 1] = 3
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/3S.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === Spade4 ){
      dealerHand[dealerHand.length - 1] = 4
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/4S.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === Spade5 ){
      dealerHand[dealerHand.length - 1] = 5
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/5C.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === Spade6 ){
      dealerHand[dealerHand.length - 1] = 6
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/6S.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === Spade7 ){
      dealerHand[dealerHand.length - 1] = 7
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/7S.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === Spade8 ){
      dealerHand[dealerHand.length - 1] = 8
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/8S.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === Spade9 ){
      dealerHand[dealerHand.length - 1] = 9
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/9S.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   }

   if(result === Spade10 ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/10S.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;      
   } 

   else{



   }


   
}
//Below adds the hand
let dealerSum = 0 
for (let i=0; i< dealerHand.length; i++ ){

 dealerSum += dealerHand[i];
}
// search for Ace in Dealer hand and minus 10 if there is an ACE 
for (let i=0; i< dealerHand.length; i++ ){

      
      
   if(dealerHand[0]=== 11){
      console.log("1st Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[1]=== 11){
      console.log("2nd Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[2]=== 11){
      console.log("3rd Card an Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[3]=== 11){
      console.log("4th Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[4]=== 11){
      console.log("5th Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[5]=== 11){
      console.log("6th Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }
   if(dealerHand[6]=== 11){
      console.log("7th Card Ace")

      if(dealerSum > 21){
         dealerSum = dealerSum - 10
         console.log(`Dealer Hand is : ${dealerHand}`)
         console.log(`Dealer Hand Sum is : ${dealerSum}`)
         break;
         
      }
      console.log(dealerSum)
      
      
   }

 



   


}
 // Based on the six cards the dealer "bot" will act accordingly   
if(dealerSum === playerSum) {
   function alertAll (){
      alert("PUSH")
      

   }

   setTimeout (alertAll, 2000)

   function refresh(){
      location.reload();

   }
   setTimeout (refresh, 2800)

   
   console.log(`Dealer Hand is : ${dealerHand}`)
   console.log(`Dealer Hand Sum is : ${dealerSum}`)
   console.log(`Player 1 Hand is : ${player1Hand}`)
   console.log(`Player 1 Hand Sum is : ${playerSum}`)
   dealerSumTracker.innerText =dealerSum
}
//----------------------------------------------------------------------------- 6 Cards
else if( dealerSum === 21){
   
   if(dealerSum === playerSum){
      function alertAll (){
         alert("PUSH")
         
   
      }
   
      setTimeout (alertAll, 2000)
   
      function refresh(){
         location.reload();
   
      }
      setTimeout (refresh, 2800)

      
      console.log(`Dealer Hand is : ${dealerHand}`)
      console.log(`Dealer Hand Sum is : ${dealerSum}`)
      console.log(`Player 1 Hand is : ${player1Hand}`)
      console.log(`Player 1 Hand Sum is : ${playerSum}`)
      dealerSumTracker.innerText =dealerSum
   }
   else{
      function alertAll (){
         alert("Black Jack! Dealer Wins!")
         
   
      }
   
      setTimeout (alertAll, 2000)
   
      function refresh(){
         location.reload();
   
      }
      setTimeout (refresh, 2800)

      
      console.log(`Dealer Hand is : ${dealerHand}`)
      console.log(`Dealer Hand Sum is : ${dealerSum}`)
      console.log(`Player 1 Hand is : ${player1Hand}`)
      console.log(`Player 1 Hand Sum is : ${playerSum}`)
      dealerSumTracker.innerText =dealerSum
   }

  
}
//----------------------------------------------------------------------------- 6 Cards
else if (dealerSum <= 16 ){
//Below Dealers 7th Card will be drawn
dealerHand.push(DrawCard(Shoe))
//Below Gives 7th Card a picture 
for (let i=dealerHand.length - 1; i <= dealerHand.length; i++ ){
   let result = dealerHand[i]
   
   //Diamonds//
   if(result === DiamondJack ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src="./PNG/JD.png" 
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")   
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === DiamondQueen ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/QD.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === DiamondKing ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/KD.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
     
   }
   if(result === DiamondAce ){
      dealerHand[dealerHand.length - 1] = 11
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/AD.png"
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")     
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Diamond2 ){
      dealerHand[dealerHand.length - 1] = 2
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/2D.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === Diamond3 ){
      dealerHand[dealerHand.length - 1] = 3
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/3D.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
 
   }
   if(result === Diamond4 ){
      dealerHand[dealerHand.length - 1] = 4
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/4D.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Diamond5 ){
      dealerHand[dealerHand.length - 1] = 5
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/5D.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Diamond6 ){
      dealerHand[dealerHand.length - 1] = 6
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/6D.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Diamond7 ){
      dealerHand[dealerHand.length - 1] = 7
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/7D.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Diamond8 ){
      dealerHand[dealerHand.length - 1] = 8
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/8D.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Diamond9 ){
      dealerHand[dealerHand.length - 1] = 9
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/9D.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }

   if(result === Diamond10 ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/10D.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   
    //Hearts//

    if(result === HeartJack ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src="./PNG/JH.png" 
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")   
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === HeartQueen ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/QH.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === HeartKing ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/KH.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
     
   }
   if(result === HeartAce ){
      dealerHand[dealerHand.length - 1] = 11
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/AH.png"
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")     
      dealerHandDiv.appendChild(dealerCard)
   
   }
   if(result === Heart2 ){
      dealerHand[dealerHand.length - 1] = 2
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/2H.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === Heart3 ){
      dealerHand[dealerHand.length - 1] = 3
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/3H.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
 
   }
   if(result === Heart4 ){
      dealerHand[dealerHand.length - 1] = 4
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/4H.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Heart5 ){
      dealerHand[dealerHand.length - 1] = 5
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/5H.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Heart6 ){
      dealerHand[dealerHand.length - 1] = 6
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/6H.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Heart7 ){
      dealerHand[dealerHand.length - 1] = 7
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/7H.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Heart8 ){
      dealerHand[dealerHand.length - 1] = 8
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/8H.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Heart9 ){
      dealerHand[dealerHand.length - 1] = 9
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/9H.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }

   if(result === Heart10 ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/10H.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
    //Club//

   if(result === ClubJack ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src="./PNG/JC.png" 
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")   
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === ClubQueen ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/QC.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === ClubKing ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/KC.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
     
   }
   if(result === ClubAce ){
      dealerHand[dealerHand.length - 1] = 11
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/AC.png"
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")     
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Club2 ){
      dealerHand[dealerHand.length - 1] = 2
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/2C.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === Club3 ){
      dealerHand[dealerHand.length - 1] = 3
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/3C.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
 
   }
   if(result === Club4 ){
      dealerHand[dealerHand.length - 1] = 4
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/4C.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Club5 ){
      dealerHand[dealerHand.length - 1] = 5
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/5C.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Club6 ){
      dealerHand[dealerHand.length - 1] = 6
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/6C.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Club7 ){
      dealerHand[dealerHand.length - 1] = 7
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/7C.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Club8 ){
      dealerHand[dealerHand.length - 1] = 8
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/8C.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Club9 ){
      dealerHand[dealerHand.length - 1] = 9
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/9C.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }

   if(result === Club10 ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/10C.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   } 
   
   //Spade//
   
   if(result === SpadeJack ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src="./PNG/JS.png" 
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")   
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === SpadeQueen ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/QS.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === SpadeKing ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/KS.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
     
   }
   if(result === SpadeAce ){
      dealerHand[dealerHand.length - 1] = 11
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/AS.png"
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")     
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Spade2 ){
      dealerHand[dealerHand.length - 1] = 2
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/2S.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === Spade3 ){
      dealerHand[dealerHand.length - 1] = 3
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/3S.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === Spade4 ){
      dealerHand[dealerHand.length - 1] = 4
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/4S.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === Spade5 ){
      dealerHand[dealerHand.length - 1] = 5
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/5C.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === Spade6 ){
      dealerHand[dealerHand.length - 1] = 6
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/6S.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === Spade7 ){
      dealerHand[dealerHand.length - 1] = 7
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/7S.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === Spade8 ){
      dealerHand[dealerHand.length - 1] = 8
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/8S.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === Spade9 ){
      dealerHand[dealerHand.length - 1] = 9
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/9S.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;
   }

   if(result === Spade10 ){
      dealerHand[dealerHand.length - 1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./PNG/10S.png"   
      dealerCard.setAttribute("width", "100px" )
      dealerCard.setAttribute("class", "png-white")  
      dealerHandDiv.appendChild(dealerCard)
      break;      
   } 

   else{



   }


   
}
//Below adds the hand
let dealerSum = 0 
for (let i=0; i< dealerHand.length; i++ ){

 dealerSum += dealerHand[i];
}
}
//----------------------------------------------------------------------------- 6 Cards
else if ( dealerSum >= 17 && dealerSum <=20 && dealerSum > playerSum){
   function alertAll (){
      alert("Dealer Wins!")
      

   }

   setTimeout (alertAll, 2000)

   function refresh(){
      location.reload();

   }
   setTimeout (refresh, 2800)

   

   console.log(`Dealer Hand is : ${dealerHand}`)
   console.log(`Dealer Hand Sum is : ${dealerSum}`)
   console.log(`Player 1 Hand is : ${player1Hand}`)
   console.log(`Player 1 Hand Sum is : ${playerSum}`)
   dealerSumTracker.innerText =dealerSum

}
//----------------------------------------------------------------------------- 6 Cards
else if(dealerSum >= 17 && dealerSum <=20 && dealerSum < playerSum  ){
   playerWin = true
   gamba(playerWin)
   balance.innerText = `Balance: ${playerBalance} USD`

   function alertAll (){
      alert("Player 1 Wins!")
      

   }

   setTimeout (alertAll, 2000)

   function refresh(){
      location.reload();

   }
   setTimeout (refresh, 2800)

   

   console.log(`Dealer Hand is : ${dealerHand}`)
   console.log(`Dealer Hand Sum is : ${dealerSum}`)
   console.log(`Player 1 Hand is : ${player1Hand}`)
   console.log(`Player 1 Hand Sum is : ${playerSum}`)
   dealerSumTracker.innerText =dealerSum

}
//----------------------------------------------------------------------------- 6 Cards
else if(dealerSum > 21){
   playerWin = true
   gamba(playerWin)
   balance.innerText = `Balance: ${playerBalance} USD`
   function alertAll (){
      alert("Dealer BUST! Player 1 Wins!")
      

   }

   setTimeout (alertAll, 2000)

   function refresh(){
      location.reload();

   }
   setTimeout (refresh, 2800)

   
 console.log(`Dealer Hand Sum is : ${dealerSum}`)
 
 console.log(`Player 1 Hand Sum is : ${playerSum}`)
 dealerSumTracker.innerText =dealerSum
}
}
//-----------------------------------------------------------------------------  5 Cards
else if ( dealerSum >= 17 && dealerSum <=20 && dealerSum > playerSum){
   function alertAll (){
      alert("Dealer Wins!")
      

   }

   setTimeout (alertAll, 2000)

   function refresh(){
      location.reload();

   }
   setTimeout (refresh, 2800)

   

   console.log(`Dealer Hand is : ${dealerHand}`)
   console.log(`Dealer Hand Sum is : ${dealerSum}`)
   console.log(`Player 1 Hand is : ${player1Hand}`)
   console.log(`Player 1 Hand Sum is : ${playerSum}`)
   dealerSumTracker.innerText =dealerSum

}
//----------------------------------------------------------------------------- 5 Cards
else if(dealerSum >= 17 && dealerSum <=20 && dealerSum < playerSum  ){
   playerWin = true
   gamba(playerWin)
   balance.innerText = `Balance: ${playerBalance} USD`

   function alertAll (){
      alert("Player 1 Wins")
      

   }

   setTimeout (alertAll, 2000)

   function refresh(){
      location.reload();

   }
   setTimeout (refresh, 2800)

   

   console.log(`Dealer Hand is : ${dealerHand}`)
   console.log(`Dealer Hand Sum is : ${dealerSum}`)
   console.log(`Player 1 Hand is : ${player1Hand}`)
   console.log(`Player 1 Hand Sum is : ${playerSum}`)
   dealerSumTracker.innerText =dealerSum

}
//-----------------------------------------------------------------------------  5 Cards
else if(dealerSum > 21){
   playerWin = true
   gamba(playerWin)
   balance.innerText = `Balance: ${playerBalance} USD`
   function alertAll (){
      alert("Dealer BUST! Player 1 Wins!")
      

   }

   setTimeout (alertAll, 2000)

   function refresh(){
      location.reload();

   }
   setTimeout (refresh, 2800)

   
   console.log(`Dealer Hand Sum is : ${dealerSum}`)
 
   console.log(`Player 1 Hand Sum is : ${playerSum}`)
   dealerSumTracker.innerText =dealerSum
}
//----------------------------------------------------------------------------- 5 Cards 
else if(dealerSum === playerSum) {
   function alertAll (){
      alert("PUSH")
      

   }

   setTimeout (alertAll, 2000)

   function refresh(){
      location.reload();

   }
   setTimeout (refresh, 2800)

   
   console.log(dealerHand)
   console.log(`Dealer Hand Sum is: `)
   console.log(dealerSum)
   console.log(`Player 1 Hand is: `)
   console.log(player1Hand)
   console.log(`Player 1 Hand Sum is: `)
   console.log(playerSum)
   dealerSumTracker.innerText =dealerSum
} 
//-----------------------------------------------------------------------------  4 cards


   }
   //-----------------------------------------------------------------------------  4 Cards

   else if ( dealerSum >= 17 && dealerSum <=20 && dealerSum > playerSum){
      function alertAll (){
         alert("Dealer Wins!")
         
   
      }
   
      setTimeout (alertAll, 2000)
   
      function refresh(){
         location.reload();
   
      }
      setTimeout (refresh, 2800)

      

      console.log(`Dealer Hand is : ${dealerHand}`)
      console.log(`Dealer Hand Sum is : ${dealerSum}`)
      console.log(`Player 1 Hand is : ${player1Hand}`)
      console.log(`Player 1 Hand Sum is : ${playerSum}`)
      dealerSumTracker.innerText =dealerSum

   }
   //-----------------------------------------------------------------------------  4 Cards

   else if(dealerSum >= 17 && dealerSum <=20 && dealerSum < playerSum  ){
      playerWin = true
      gamba(playerWin)
      balance.innerText = `Balance: ${playerBalance} USD`

      function alertAll (){
         alert("Player 1 Wins!")
         
   
      }
   
      setTimeout (alertAll, 2000)
   
      function refresh(){
         location.reload();
   
      }
      setTimeout (refresh, 2800)

      

      console.log(`Dealer Hand is : ${dealerHand}`)
      console.log(`Dealer Hand Sum is : ${dealerSum}`)
      console.log(`Player 1 Hand is : ${player1Hand}`)
      console.log(`Player 1 Hand Sum is : ${playerSum}`)
      dealerSumTracker.innerText =dealerSum

   }
   //-----------------------------------------------------------------------------  4 Cards

   else if(dealerSum > 21){
      playerWin = true
      gamba(playerWin)
      balance.innerText = `Balance: ${playerBalance} USD`
      function alertAll (){
         alert("Dealer BUST! Player 1 Wins!")
         
   
      }
   
      setTimeout (alertAll, 2000)
   
      function refresh(){
         location.reload();
   
      }
      setTimeout (refresh, 2800)

      
      console.log(`Dealer Hand Sum is : ${dealerSum}`)
 
      console.log(`Player 1 Hand Sum is : ${playerSum}`)
      dealerSumTracker.innerText =dealerSum
      
   }
   //-----------------------------------------------------------------------------  4 Cards
   else if(dealerSum === playerSum) {
      function alertAll (){
         alert("PUSH")
         
   
      }
   
      setTimeout (alertAll, 2000)
   
      function refresh(){
         location.reload();
   
      }
      setTimeout (refresh, 2800)

      
      console.log(`Dealer Hand is: `)
      console.log(dealerHand)
      console.log(`Dealer Hand Sum is: `)
      console.log(dealerSum)
      console.log(`Player 1 Hand is: `)
      console.log(player1Hand)
      console.log(`Player 1 Hand Sum is: `)
      console.log(playerSum)
      dealerSumTracker.innerText =dealerSum
   } 
   //-----------------------------------------------------------------------------  4 cards





      




      }
      //----------------------------------------------------------------------------- 3 Cards 

      else if ( dealerSum >= 17 && dealerSum <=20 && dealerSum > playerSum){
         function alertAll (){
            alert("Dealer Wins!")
            
      
         }
      
         setTimeout (alertAll, 2000)
      
         function refresh(){
            location.reload();
      
         }
         setTimeout (refresh, 2800)
   
         
   
         console.log(`Dealer Hand is: `)
         console.log(dealerHand)
         console.log(`Dealer Hand Sum is: `)
         console.log(dealerSum)
         console.log(`Player 1 Hand is: `)
         console.log(player1Hand)
         console.log(`Player 1 Hand Sum is: `)
         console.log(playerSum)
         dealerSumTracker.innerText =dealerSum
   
      }
      //----------------------------------------------------------------------------- 3 Cards 

      else if(dealerSum >= 17 && dealerSum <=20 && dealerSum < playerSum  ){
         playerWin = true
         gamba(playerWin)
         balance.innerText = `Balance: ${playerBalance} USD`

         function alertAll (){
            alert("Player 1 Wins")
            
      
         }
      
         setTimeout (alertAll, 2000)
      
         function refresh(){
            location.reload();
      
         }
         setTimeout (refresh, 2800)
   
         
         console.log(`Dealer Hand is: `)
         console.log(dealerHand)
         console.log(`Dealer Hand Sum is: `)
         console.log(dealerSum)
         console.log(`Player 1 Hand is: `)
         console.log(player1Hand)
         console.log(`Player 1 Hand Sum is: `)
         console.log(playerSum)
         dealerSumTracker.innerText =dealerSum
   
      }
      //-----------------------------------------------------------------------------  3 Cards

      else if(dealerSum > 21){
         playerWin = true
         gamba(playerWin)
         balance.innerText = `Balance: ${playerBalance} USD`
         function alertAll (){
            alert("Dealer BUST! Player 1 Wins")
            
      
         }
      
         setTimeout (alertAll, 2000)
      
         function refresh(){
            location.reload();
      
         }
         setTimeout (refresh, 2800)
   
         
               console.log(`Dealer Hand Sum is : ${dealerSum}`)
 
               console.log(`Player 1 Hand Sum is : ${playerSum}`)
               dealerSumTracker.innerText =dealerSum
      }
      //-----------------------------------------------------------------------------  3 cards
      else if(dealerSum === playerSum) {
         function alertAll (){
            alert("PUSH")
            
      
         }
      
         setTimeout (alertAll, 2000)
      
         function refresh(){
            location.reload();
      
         }
         setTimeout (refresh, 2800)
   
         
         console.log("Push!")
         console.log(`Dealer Hand is: `)
         console.log(dealerHand)
         console.log(`Dealer Hand Sum is: `)
         console.log(dealerSum)
         console.log(`Player 1 Hand is: `)
         console.log(player1Hand)
         console.log(`Player 1 Hand Sum is: `)
         console.log(playerSum)
         dealerSumTracker.innerText =dealerSum
      } 
      //-----------------------------------------------------------------------------  3 cards
      

   }
   //-----------------------------------------------------------------------------2 Cards  
   else if ( dealerSum >= 17 && dealerSum <=20 && dealerSum > playerSum){
      function alertAll (){
         alert("Dealer Wins!")
         
   
      }
   
      setTimeout (alertAll, 2000)
   
      function refresh(){
         location.reload();
   
      }
      setTimeout (refresh, 2800)

      
      console.log(`Dealer Hand is: `)
      console.log(dealerHand)
      console.log(`Dealer Hand Sum is: `)
      console.log(dealerSum)
      console.log(`Player 1 Hand is: `)
      console.log(player1Hand)
      console.log(`Player 1 Hand Sum is: `)
      console.log(playerSum)
      dealerSumTracker.innerText =dealerSum

   }
   //----------------------------------------------------------------------------- 2 Cards 
   else if(dealerSum >= 17 && dealerSum <=20 && dealerSum < playerSum  ){
      playerWin = true
      gamba(playerWin)
      balance.innerText = `Balance: ${playerBalance} USD`
     

      function alertAll (){
         alert("Player 1 Wins!")
         
   
      }
   
      setTimeout (alertAll, 2000)
   
      function refresh(){
         location.reload();
   
      }
      setTimeout (refresh, 2800)

      
      console.log(`Dealer Hand is: `)
      console.log(dealerHand)
      console.log(`Dealer Hand Sum is: `)
      console.log(dealerSum)
      console.log(`Player 1 Hand is: `)
      console.log(player1Hand)
      console.log(`Player 1 Hand Sum is: `)
      console.log(playerSum)
      dealerSumTracker.innerText =dealerSum
   }
   //----------------------------------------------------------------------------- 2 Cards  
   else if(dealerSum === playerSum) {
      function alertAll (){
         alert("PUSH")
         
   
      }
   
      setTimeout (alertAll, 2000)
   
      function refresh(){
         location.reload();
   
      }
      setTimeout (refresh, 2800)

      
      console.log(`Dealer Hand is : ${dealerHand}`)
      console.log(`Dealer Hand Sum is : ${dealerSum}`)
      console.log(`Player 1 Hand is : ${player1Hand}`)
      console.log(`Player 1 Hand Sum is : ${playerSum}`)
      dealerSumTracker.innerText =dealerSum
   } 
   //----------------------------------------------------------------------------- 2 Cards  
   
  
   




})
}
)































