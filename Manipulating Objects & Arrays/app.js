const array = [
    {
      name: 'John',
      age: 25,
      occupation: 'Developer',
      hobbies: ['reading', 'coding'],
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001'
      },
      skills: ['JavaScript', 'React', 'Node.js'],
      education: {
        degree: 'Bachelor of Science',
        major: 'Computer Science',
        university: 'Stanford University'
      },
      languages: ['English', 'Spanish'],
      isEmployed: true
    },
    {
      name: 'Sarah',
      age: 30,
      occupation: 'Designer',
      hobbies: ['painting', 'traveling'],
      address: {
        street: '456 Elm St',
        city: 'San Francisco',
        state: 'CA',
        zipCode: '94110'
      },
      skills: ['Photoshop', 'Illustrator', 'InDesign'],
      education: {
        degree: 'Master of Fine Arts',
        major: 'Graphic Design',
        university: 'Rhode Island School of Design'
      },
      languages: ['English', 'French'],
      isEmployed: true
    },
    {
      name: 'Michael',
      age: 35,
      occupation: 'Manager',
      hobbies: ['golfing', 'cooking'],
      address: {
        street: '789 Oak St',
        city: 'Chicago',
        state: 'IL',
        zipCode: '60611'
      },
      skills: ['Leadership', 'Project Management', 'Communication'],
      education: {
        degree: 'Master of Business Administration',
        major: 'Management',
        university: 'Harvard Business School'
      },
      languages: ['English', 'Mandarin'],
      isEmployed: true
    },
    {
      name: 'Emily',
      age: 27,
      occupation: 'Engineer',
      hobbies: ['hiking', 'photography'],
      address: {
        street: '101 Pine St',
        city: 'Seattle',
        state: 'WA',
        zipCode: '98101'
      },
      skills: ['Java', 'Python', 'C++'],
      education: {
        degree: 'Bachelor of Science',
        major: 'Computer Engineering',
        university: 'Massachusetts Institute of Technology'
      },
      languages: ['English', 'German'],
      isEmployed: true
    },
    {
      name: 'David',
      age: 40,
      occupation: 'Sales Representative',
      hobbies: ['fishing', 'camping'],
      address: {
        street: '555 Chestnut St',
        city: 'Denver',
        state: 'CO',
        zipCode: '80202'
      },
      skills: ['Sales', 'Negotiation', 'Customer Service'],
      education: {
        degree: 'Bachelor of Arts',
        major: 'Marketing',
        university: 'University of Michigan'
      },
      languages: ['English', 'Italian'],
      isEmployed: true
    }
  ];
  
  // 1
  // create a new array that contains only the objects where age is higher than 30
  
  // 2
  // create a new array where you change the isEmployed: true/false into isEmployed: 'yes' or 'no'
  
  // 3
  // loop thru the array and calculate the average age (add all the ages and split it with the total number of objects)
  
  // 4
  // create a new array which contains all the hobbies. If a hobby can be found twice, put it just once
  
  // 5
  // create a new array with all the laungages that the object has
  
  // 6
  // Create a new array and remove the address for each object
  
  // 7 
  // Create a new array, that contains all the objects that has a master degree. 
  
  //8
  // Create a new array with an object containing only name and age and order them in increasing number based on age.
  // From young to old
  // Once the new array is created, loop thru the object and with console log write (example: Michael is 35 years old)

 //========= 1 =========
  const olderThan30 = array.filter(({ age }) => age > 30);

  console.log(olderThan30); // space added
  //========= 2 =========
  const employeeStat = array.map(empolyeeStatus => empolyeeStatus.isEmployed ? 'yes' : 'no');

  console.log(employeeStat);

  //========= 3 =========
  const arrayAvgAge = (array) => {
  let sum = 0
   array.forEach(element => {
    (!isNaN(element.age)) ? sum += element.age : 0;
  });
  let avgAge = sum / array.length;
  return avgAge;
};
  console.log(arrayAvgAge(array));

  //========= 4 =========
  const listHobbies = (array) => {
    let hobbies = array.flatMap(obj => obj.hobbies);
    const uniqueHobby = [...new Set(hobbies)];
    return uniqueHobby;
  };
  console.log(listHobbies(array));

  //========= 5 =========
  const languages = (array) => {
    let lang = array.flatMap(obj => obj.languages);
    return console.log(lang);
  };

  languages(array);

  //========= 6 =========

const removeAddress = (array) => {
  array.forEach(obj => delete obj.address);
  return console.log(array);
}

removeAddress(array); // code snippet refactored, should be ok now.

//========= 7 =========
const masterDegree = (array) => {
  const regex = /master/i;
  return array.filter(obj => regex.test(obj.education.degree));
}

console.log(masterDegree(array));

//========= 8 =========
const nameAndAge = (array) => {
  return array.map(obj => ({name: obj.name, age: obj.age})).sort((a, b) => a.age - b.age).forEach(obj => console.log(`${obj.name} is ${obj.age} years.`))
};

nameAndAge(array);


//Create a functuion which dynamically deletes keys

const removeKeys = (param1, param2, array) => {
  console.log(array.map((obj) => {
    const newObj = {};

    Object.keys(obj).forEach((key) => {
      ![param1, param2].includes(key) ? newObj[key] = obj[key] : 0;
    });
    return newObj;
  }));
};

removeKeys('name', 'occupation', array);