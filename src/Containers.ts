
import htmlWireframe from './Wireframe.json';

export class Containers {

  constructor() {

    let child: HTMLElement;
    let getKey: string[];

    htmlWireframe.html.forEach((element: any, index: number) => {

      getKey = Object.keys(element.parent);

      const parent = document.createElement(element.parent.type);

      getKey[1] === "id"
        ? parent.id = element.parent.id 
        : parent.className = element.parent.class;

      document.body.appendChild(parent);

      
      if (htmlWireframe.html[index].hasOwnProperty("child")) {
        element.child.forEach((inner: any, index: number) => {

          child = document.createElement(inner.type);

          getKey[1] === "id"
            ? child.id = inner.id 
            : child.id = inner.class;

          parent.appendChild(child);

        });//END foreach for child

        if (htmlWireframe.html[index].hasOwnProperty("innerChild")) {
          this.create(element.innerChild, child);
        }
      }
    });//END forEach html

  }

  create(e: string[], p: HTMLElement) {

    e.forEach((inner: any, index: number) => {

      let getKeyInner = Object.keys(inner);

      const div = document.createElement(inner.type);

      getKeyInner[1] == "id"
        ? div.id = inner.id 
        : div.className = inner.class;

      p.appendChild(div);

    });

  }

  ref(element:string,add?:string){

    let el = document.querySelector(element) as HTMLElement;

    if (typeof add !== 'undefined') {
      let added = document.querySelector(add) as HTMLElement;
      el.appendChild(added);
    }

   return el;

  }

  
}
