
/* interface Enemy {

    name:string;
    strength:number;
    levelasign:number;
} */


import {Enemy, kaffe} from './interfaces/test';

export class Starter {

    static example:string = "my red ninja skills";
    static myConArray:string[] =["one"];

    constructor() {

        console.log(Starter.example);
       Starter.myConArray.push("two");
       console.log(Starter.myConArray);

        let name:string = "poul";

        console.log(name);

        let mArray:number[] = [1, 2, 3,"6"];

        const Alien:Enemy = { 
             
            name:'Ben',
            strength: 5,
            levelasign:6
      
        }

        const Dog: Enemy ={

            name:'Wow',
            strength:8,
            levelasign:10
        }

        //let think:string[] = []

        let myarray:Array<string> = [
            "./assets/images/ninja.png",
            "./assets/images/middle_box.png",
            "./assets/images/right_box.png"
        ];
           let myArray3 =[];

           const mixArray:(string | number | boolean )[] = ['a','b',1,2,true];
    }



}