function hascolor(colors, favorite) {
    let det = false;
    for(let i=0;i<colors.length;i++){
        if(favorite=== colors[i]){
            det=true
        }
    }
    return det;
}
