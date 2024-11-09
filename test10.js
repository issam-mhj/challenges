function shortword(words) {
    let count=0 ;
    for(let i=0 ; i<words.length;i++){
        if (words[i].length<4){
            words[i]="";
        }
    }
    for(let i=0 ; i<words.length-1;i++){
        if (words[i]!==""){
            count++;
        }
    }
    
    let array = Array[count];
    for(let i=0;i<array;i++){
        for(let y=0 ; y<words.length;y++){
            if (words[i] !== ""){
                array[i]=words[y];
            }
        }
    }
    return array;
}
Example:

console.log(shortword(["cat", "mouse", "dog"]))

shortword(["cat", "mouse", "dog"]) // Should return ["cat", "dog"]