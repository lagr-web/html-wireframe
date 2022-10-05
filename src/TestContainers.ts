
import htmlWireframe from './Wireframe.json';

export class TestContainers {

  constructor() {

    let child: HTMLElement;
    let getKey: string[];

    htmlWireframe.html.forEach((element: any, index: number) => {

      getKey = Object.keys(element.parent);
      console.log(getKey);

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

        });//END forEach for child

     if (htmlWireframe.html[index].hasOwnProperty("innerChild")) {
          this.createInnerChild(element.innerChild, child);
        } 
      }// END if checking for child

    });//END forEach

  }//END constructor

  createInnerChild(e:string[], p: HTMLElement) {

    e.forEach((inner: any, index: number) => {

      let getKeyInner = Object.keys(inner);

      const div = document.createElement(inner.type);

      getKeyInner[1] == "id"
        ? div.id = inner.id 
        : div.className = inner.class;

      p.appendChild(div);

    });

  }
  
}
