 //====================================================//
// one way of using the fetch api 
// it is the promisified code 
function getAnimalData (){
    fetch ( "https://fakerapi.it/api/v1/persons")
    .then(function(response){
        response.json()
        .then(function(finalData){
            console.log(finalData);
        })
    })
}
//====================================================//
// another way of using the fetchib api

async function getAnimalData (){
    const response = await fetch("https://fakerapi.it/api/v1/persons");
    const finalData = await response.json()
    console.log(finalData )
}