import { Injectable } from '@nestjs/common';
@Injectable()
export class PermutationService {
   keypad = {
     2:["A","B","B"],
     3:["D","E","F"],
     4:["G","H","I"],
     5:["J","K","L"],
     6:["M","N","O"],
     7:["P","Q","R","S"],
     8:["T","U","V"],
     9:["W","X","Y","Z"]
    };
  superHeros = ["SUPERMAN" , "THOR" , "ROBIN" , "IRONMAN" , "GHOSTRIDER" ,"CAPTAINAMERICA", "FLASH" , "WOLVERINE" ,"BATMAN" ,  "HULK" , "BLADE" ,"PHANTOM" ,"SPIDERMAN" ,"BLACKWIDOW" ,"HELLBOY" ,"PUNISHER"]
  public decodeSuperHeroName(data: string ){
       let keysPressed =  data.split('');
       let accumalator = [ ];
       let superHerosToCall = '';
       if(parseInt(keysPressed[0]) == 0 && keysPressed[1] == " "){    
       keysPressed = keysPressed.splice(2);   
       keysPressed.forEach( (key) => { 
        let tempArr=[ ];
        let keyAlphabats = this.keypad[ key ];
        
        keyAlphabats.forEach(  alpha  => { 
        if( accumalator.length == 0 ){
              tempArr.push(alpha);
        } else{
              accumalator.forEach( alphabet => { tempArr.push ( alphabet + alpha )  });
          } 
        });
        accumalator = [ ...tempArr]; 
        });
 
        accumalator.forEach(( permutaion )=>{
             let superHero =  this.superHeros.find( superhero => superhero == permutaion);
             if(superHero && superHero != undefined ){
                superHerosToCall = superHero;
             }   
        })
       return { decodedPermutation : accumalator , superHeroName : superHerosToCall  }
  
    }else{
      return { decodedPermutation : [] , superHeroName : ''  }
    }
   }


}
