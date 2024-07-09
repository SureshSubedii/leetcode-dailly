var averageWaitingTime = function(customers) {
    let prev = customers[0][0]
    let waitingTime = []
    for(customer of customers){
        prev = ((prev > customer[0])? prev : customer[0]) + customer[1]
        waitingTime.push(prev - customer[0] )
    }
    return waitingTime.reduce((acc, curr)=> acc + curr ,0)/waitingTime.length
    
};