import { Component } from '@angular/core';
import {CallHeroService} from './call-hero.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  allArray = []
  heroName = '';
  inputValue = { allNumbers :"" , allLetters: "" };
  allNumbers = [ { 'Number':'1' , 'Letters': '@.?' },{'Number':'2' , 'Letters':'ABC'},{'Number':'3','Letters':'DEF' },{'Number':'4' , 'Letters':'GHI' },{ 'Number':'5','Letters': 'JKL' },{ 'Number':'6' , 'Letters':'MNO'},{ 'Number':'7', 'Letters':'PQRS'},{'Number':'8','Letters':'TUV'},{'Number':'9' , 'Letters': 'WXYZ' }, { 'Number': '*' ,'Letters':'send' },{ 'Number': '0' , 'Letters': 'Zero'} ,{ 'Number':'#','Letters':'space' }];
  constructor(private  service : CallHeroService){

  }

  sendCodes(data){
    switch(data.Number){
     case '#':
        this.inputValue.allNumbers +=  ' '
        this.inputValue.allLetters +=  ' '
        break;
      case '*':
        this.decodeName();
        break;
      default: 
        this.allArray.push(data);
        if(data.Letters != 'Zero') this.inputValue.allLetters += data.Letters;
        this.inputValue.allNumbers += data.Number;
    }
  }

  decodeName(){  
        this.service.decodeNumber(this.inputValue.allNumbers).subscribe((res)=>{
         if (res && res['superHeroName'] && res['superHeroName'].length > 0){
          this.heroName = `Calling ${res['superHeroName']} !!!!!!!....`
         }else{
          this.heroName = `Please try a proper combination` 
         }
        })
  }

}

