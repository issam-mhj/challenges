let count = 0;
function checknum(numbers) {
    for(let i =0 ;i< numbers.length;i++){
        if(numbers[i]%2 === 0 || numbers[i]%7 ===0 ){
            count++;
        }
    }
    if(count === 4){
        return true;
    }else{
        return false;
    }
}
