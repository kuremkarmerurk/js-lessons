function getDevisorsSum(num){
    let i = 2;
    let devisorsSum = 1;

    while( i < parseInt(num / 2)+1){
        if (num % i === 0){
            devisorsSum += i;
        }
        i++;
    }

    return devisorsSum;
}

function getFriendlyNumbers(start, end) {
    let result = [];
    if ( Number.isInteger(start) && Number.isInteger(end)){
        if(start <= end && start > 0){
            let i = start >= 220 ? start : 220;
            while(i <= end){
                let friend1 = getDevisorsSum(i);
                let friend2 = getDevisorsSum(friend1);
                if (friend2 == i && friend2 < friend1){
                    result.push([friend2, friend1]);
                }
                i++;
            }
            return result;
        }else{
            return false;
        }
    }else{
        return false;
    }    
}

module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}