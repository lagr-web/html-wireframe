import { gsap } from "gsap";
import{Containers} from "./Containers";

interface Enemy {
    name: string;
    strength: number;
    lives: number;
}

export class ShowActors {

    static nameArray: string[] = [
        "Death Smokie",
        "Black Scum",
        "Ping Pang"
    ]

    static myContentArray: string[] = [
        "Ninja Killer dont touch him",
        "Black Scum is a Ninja Killer",
        "Just som penguin Shit"
    ];

    static imageArray: string[] = [
        "death-smokie.png",
        "black-alien-scum.png",
        "angry-ping.png"
    ]

    static information: { strength: number, lives: number }[] = [
        { "strength": 100, "lives": 10 },
        { "strength": 90, "lives": 5 },
        { "strength": 80, "lives": 4}
    ];

    static currentDataIndex: number = -1;

   pop:number;
    
    constructor() {

        this.pop=10;
    
        const Alien: Enemy = {
            name: "Death Smokie",
            strength: 100,
            lives: 10
        }

        const Black: Enemy = {
            name: "Black Scum",
            strength: 90,
            lives: 5
        }

        const Red: Enemy = {
            name: "Ping Pang",
            strength: 80,
            lives: 4
        }

        const enemyArray: Array<string> = [Alien.name, Black.name, Red.name];

        let con = new Containers();

        const imgNinja = require("./assets/images/ninja.png");//default card stamp startup
        const showImg = document.createElement("img");
        showImg.id = "showImg";
        showImg.src = imgNinja;
        document.querySelector('#imagecon').appendChild(showImg);
 

        //* START: Menu */

        let getMenuItems = document.querySelectorAll("#menuItemContainer > .menuItem");

        getMenuItems.forEach((element, index) => {

            element.setAttribute("data-index", `${index}`);
            element.textContent = enemyArray[index];
            element?.addEventListener("click", this.changeContent);
        })

        //*END menu */ 

       /*   let cardDeck = con.ref('#card');
        let infoText = con.ref('#info', '#infochild') */  
     
        let cardDeck = document.querySelector('#card');
        let infoText = document.querySelector('#info') as HTMLElement;
        let infoChild = document.querySelector('#infochild') as HTMLElement
        infoText.appendChild(infoChild); 
       
        cardDeck.addEventListener("click", (e) => {

            //e.stopPropagation();
           // e.preventDefault();

            if (ShowActors.currentDataIndex > -1) {
                
                infoText.style.display = "block";


                gsap.to(infoText, {
                    duration: 0.05,
                    rotate: 10,
                    scale:1.3,
                    repeat: 3,
                   transformOrigin: "center",
                    yoyo: true
                });

            let addInfo = ShowActors.information[ShowActors.currentDataIndex];
                  
            let mStrength = document.querySelector('#strength');
            mStrength.textContent=`${addInfo.strength}`
          
            let mLives = document.querySelector('#lives');
            mLives.textContent=`${addInfo.lives}`
           
               
            }//END if

        })

    }//END constructor

    changeContent(this: HTMLElement, event: Event) {

        console.log(this);

        let infoTextDisplayNone = document.querySelector('#info') as HTMLElement;
        infoTextDisplayNone.style.display = "none";

        ShowActors.currentDataIndex = parseInt(this.dataset.index);//now global in class

        let mHeadline = document.querySelector('#headline') as HTMLElement;
        mHeadline.textContent = ShowActors.nameArray[ShowActors.currentDataIndex];

        const imageSrc = ShowActors.imageArray[ShowActors.currentDataIndex];
        const img = require("./assets/images/" + imageSrc);
        let mImg = document.querySelector("#showImg") as HTMLImageElement;
        mImg.src = img;

        let mContent = document.querySelector('#content') as HTMLElement;
        mContent.textContent = ShowActors.myContentArray[ShowActors.currentDataIndex];

        let elem = document.querySelector('#cardContainer');

        gsap.to(elem, {
            duration: 0.05,
            scaleX: -1,
            alpha: 0,
            repeat: 3,
            yoyo: true,

        })

    }




}