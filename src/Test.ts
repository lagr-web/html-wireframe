interface me{

    parent:string;
    child:string[];
    innerchild:string[]
}

export class Test{

    constructor(obj:me){

        console.log("test");
       console.log(obj);

       
    }


}