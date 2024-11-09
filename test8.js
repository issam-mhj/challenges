function hasfive(numbers) {
    let det = false;
    for (let i=0;i<=numbers.length;i++){
        if(numbers[i]===5){
            det = true
        }
    }
    return det;
}
