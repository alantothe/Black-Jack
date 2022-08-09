for (let i=1; i < dealerHand.length; i++ ){
   let result = dealerHand[i]
   
   //Diamonds//
   if(result === DiamondJack ){
      dealerHand[1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src="./png/JD.png" 
      dealerCard.setAttribute("width", "100px" )   
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === DiamondQueen ){
      dealerHand[1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/QD.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === DiamondKing ){
      dealerHand[1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/KD.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
     
   }
   if(result === DiamondAce ){
      dealerHand[1] = 11
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/AD.png"
      dealerCard.setAttribute("width", "100px" )     
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Diamond2 ){
      dealerHand[1] = 2
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/2D.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === Diamond3 ){
      dealerHand[1] = 3
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/3D.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
 
   }
   if(result === Diamond4 ){
      dealerHand[1] = 4
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/4D.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Diamond5 ){
      dealerHand[1] = 5
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/5D.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Diamond6 ){
      dealerHand[1] = 6
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/6D.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Diamond7 ){
      dealerHand[1] = 7
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/7D.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Diamond8 ){
      dealerHand[1] = 8
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/8D.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Diamond9 ){
      dealerHand[1] = 9
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/9D.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }

   if(result === Diamond10 ){
      dealerHand[1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/10D.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   
    //Hearts//

    if(result === HeartJack ){
      dealerHand[1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src="./png/JH.png" 
      dealerCard.setAttribute("width", "100px" )   
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === HeartQueen ){
      dealerHand[1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/QH.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === HeartKing ){
      dealerHand[1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/KH.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
     
   }
   if(result === HeartAce ){
      dealerHand[1] = 11
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/AH.png"
      dealerCard.setAttribute("width", "100px" )     
      dealerHandDiv.appendChild(dealerCard)
   
   }
   if(result === Heart2 ){
      dealerHand[1] = 2
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/2H.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === Heart3 ){
      dealerHand[1] = 3
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/3H.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
 
   }
   if(result === Heart4 ){
      dealerHand[1] = 4
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/4H.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Heart5 ){
      dealerHand[1] = 5
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/5H.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Heart6 ){
      dealerHand[1] = 6
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/6H.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Heart7 ){
      dealerHand[1] = 7
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/7H.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Heart8 ){
      dealerHand[1] = 8
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/8H.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Heart9 ){
      dealerHand[1] = 9
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/9H.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }

   if(result === Heart10 ){
      dealerHand[1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/10H.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
    //Club//

   if(result === ClubJack ){
      dealerHand[1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src="./png/JC.png" 
      dealerCard.setAttribute("width", "100px" )   
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === ClubQueen ){
      dealerHand[1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/QC.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === ClubKing ){
      dealerHand[1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/KC.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
     
   }
   if(result === ClubAce ){
      dealerHand[1] = 11
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/AC.png"
      dealerCard.setAttribute("width", "100px" )     
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Club2 ){
      dealerHand[1] = 2
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/2C.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === Club3 ){
      dealerHand[1] = 3
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/3C.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
 
   }
   if(result === Club4 ){
      dealerHand[1] = 4
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/4C.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Club5 ){
      dealerHand[1] = 5
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/5C.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Club6 ){
      dealerHand[1] = 6
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/6C.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Club7 ){
      dealerHand[1] = 7
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/7C.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Club8 ){
      dealerHand[1] = 8
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/8C.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Club9 ){
      dealerHand[1] = 9
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/9C.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }

   if(result === Club10 ){
      dealerHand[1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/10C.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   } 
   
   //Spade//
   
   if(result === SpadeJack ){
      dealerHand[1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src="./png/JS.png" 
      dealerCard.setAttribute("width", "100px" )   
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === SpadeQueen ){
      dealerHand[1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/QS.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === SpadeKing ){
      dealerHand[1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/KS.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
     
   }
   if(result === SpadeAce ){
      dealerHand[1] = 11
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/AS.png"
      dealerCard.setAttribute("width", "100px" )     
      dealerHandDiv.appendChild(dealerCard)
      break;
   
   }
   if(result === Spade2 ){
      dealerHand[1] = 2
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/2S.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;

   }
   if(result === Spade3 ){
      dealerHand[1] = 3
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/3S.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === Spade4 ){
      dealerHand[1] = 4
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/4S.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === Spade5 ){
      dealerHand[1] = 5
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/5C.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === Spade6 ){
      dealerHand[1] = 6
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/6S.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === Spade7 ){
      dealerHand[1] = 7
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/7S.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === Spade8 ){
      dealerHand[1] = 8
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/8S.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   }
   if(result === Spade9 ){
      dealerHand[1] = 9
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/9S.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;
   }

   if(result === Spade10 ){
      dealerHand[1] = 10
      let dealerCard = document.createElement("img")
      dealerCard.src= "./png/10S.png"   
      dealerCard.setAttribute("width", "100px" )  
      dealerHandDiv.appendChild(dealerCard)
      break;      
   } 


   
}
