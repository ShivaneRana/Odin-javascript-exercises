const people = [
        {
          name: "Carly",
          yearOfBirth: 1066,
        },
        {
          name: "Ray",
          yearOfBirth: 1962,
          yearOfDeath: 2011,
        },
        {
          name: "Jane",
          yearOfBirth: 1912,
          yearOfDeath: 1941,
        },
      ]
    const findTheOldest = function(people) {
        const current = new Date().getFullYear();
        people.forEach((item) => {
            if(item.yearOfDeath === undefined){
                item.yearOfDeath = current
            }
    })
    const obj = people.sort((a,b) => {
        a = a.yearOfDeath - a.yearOfBirth;
        b = b.yearOfDeath - b.yearOfBirth;
         return b-a;
      })
      
      obj.forEach((item,index) => {
          console.log(`${item.name} total lifespan is: ${item.yearOfDeath-item.yearOfBirth}`)
      })

      return obj[0]
 };


console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;

