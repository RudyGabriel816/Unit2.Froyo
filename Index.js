
//create an object named froyo 
const froyo = {

    //create keys flavors
    //create value of how many
    vanilla: 3,
    strawberry: 1,
    coffee: 2
    }
    
    //create an array of ice cream at table.
    //create console.log
        console.log(Object.keys(froyo));
       
    
    //create an array of the different ice cream at table.
       console.log(Object.values(froyo));
    
    //add the values of the ice cream at table to calculate the total froyo flavors. 
    const flavor = Object.values(froyo);
    let totalAmount = 0;
    
    for (let i = 0; i < many.length; i++) {
        totalAmount += many[i];
    }
    
    console.log(totalAmount);