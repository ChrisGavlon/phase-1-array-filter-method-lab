// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findingMatch(drivers, string){
    drivers.filter((driverNames)=>{
        if(driverNames.name === string){
            return console.log(driverNames)
        } else if(driverNames.name === string.toLowerCase()){
            return console.log(driverNames)
        } else if(driverNames.name === string.toUpperCase()){
            return console.log(driverNames)
        }


    })
}

function fuzzyMatch(driverNames, string){

}

function matchName(drivers, string){

}

 findingMatch(drivers, "Bobby")
 