function iscold(temperature) {
    if (temperature>=10){
        return "No, it isn't cold!"
    }else {
        return "Yes, it is cold!"
    }
}
Example:

console.log(iscold(10))
iscold(5)   // Should return "Yes, it is cold!"
iscold(15)  // Should return "No, it isn't cold!"