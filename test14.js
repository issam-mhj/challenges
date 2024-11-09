function getcategory(age) {
    if (age>=0 && age <=12){
        return "child"
    }else if(age<=19) {
        return "teen"
    }else{
        return "adult"
    }
}
