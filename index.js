function distanceFromHqInBlocks(pickupLocation){

    let hqLocation = 42;

    return Math.abs(hqLocation - pickupLocation)

}


function distanceFromHqInFeet(pickupLocation){
    
    return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(pickupLocation, destinationLocation){

    return Math.abs(pickupLocation - destinationLocation) * 264;

}

function calculatesFarePrice(pickupLocation, destinationLocation){

    let distance = distanceTravelledInFeet(pickupLocation,destinationLocation);

    if (distance <= 400) {
        return 0;
    }
    
    else if (distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    } 
    
    else if (distance > 2000 && distance <= 2500){
        return 25;
    } 
    
    else {
        return 'cannot travel that far';
    }

}

