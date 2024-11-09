function totalprice(prices) {
    let total = 0;
    for(let i=0 ; i<prices.length ; i++){
        total=total + prices[i];
    }
    return total;
}
