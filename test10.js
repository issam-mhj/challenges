function shortword(words) {
    Array = [""]
    count =0;
    for(let i=0 ; i<words.length;i++){
        if (words[i].length<4){
            Array[count]= words[i];
            count++;
        }
    }
    return Array;
}
