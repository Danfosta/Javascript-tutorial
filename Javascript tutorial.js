var names = ['Sam',"Dan", "Krisi", 'Anu', 23, false]
console.log(names[3]);
console.log(names.length);
console.log("\n")
/*for (var n of names) {
    console.log(n);
}

names.forEach(function(n, index){
    console.log(index + " - " + n);
})
//represents single line comment

var addition = 2+2;
var addition = (3+4)*5;

console.log(addition)

function addnumbers(x,y) {
    console.log((x+y)*2);
}
addnumbers(1,3);
addnumbers(2,1);
addnumbers(0,5); 
console.log("\n")
function addNumbers (n1,n2) {
    var result = n1+n2;
    return result;
}
var result = addNumbers (10,20);
console.log(result)

console.log("\n")
console.log(Object.keys({name: "Femi", age:30  }));
console.log(Object.values({name: "Femi", age:30  }));

console.log("Adeleke Daniel Ayobamidele".toLowerCase());
console.log("Adeleke Daniel Ayobamidele".toUpperCase());
console.log("Adeleke Daniel Ayobamidele".startsWith("Adeleke"));

// while loop
 var number = 7;

while(number>=2) {
            console.log(number);
    number-=2;
}

//do...while loop
let countString = ''
let i = 0;
do {
    countString = countString + i; i++
} while (i < 5) ;
console.log (countString);  */

var name = 'Daniel'
console.log('   Daniel Adeleke        '.trim())
console.log(Math.floor(70*Math.random()))
console.log(Math.floor(87.14323))
console.log(Math.ceil(87.14323))
console.log(Number.isInteger(734.7654))
var oldName
oldName='Toke'
console.log(oldName)
oldName = 'Tade'
console.log(oldName)
console.log('\n')
let newName
newName='Kemi'
console.log(newName)
newName = 'Keji'
console.log(newName)
console.log('\n')
const futName='Lola'
console.log(futName)
console.log('\n')
let t=5
console.log(t-=3)
let p=-7
p++
console.log(p)
console.log(`My name is ${oldName} and I have a friend whose name is ${newName}.`)
console.log('CONDITIONALS')
if (true) {
    console.log('This is True')
}
if (0>4) {
    console.log('okay')
} else {
    console.log("0 is not greater than 4!")
}
if (0<4) {
    console.log('okay')
} else {
    console.log("0 is not less than 4!")
}
if (0==4) {
    console.log('okay')
} else {
    console.log("Not possible! Check again :)")
}
if (0<=4) {
    console.log('0 is less than or equal to 4')
} else {
    console.log("not okay!")
}
if (0>=4) {
    console.log('okay')
} else {
    console.log("How can 0 be greater than or equal to 4! think about it")
}
if (0!==4) {
    console.log('correct!')
} else {
    console.log("not okay!")
}
console.log('\n')
console.log('LOGICAL OPERATORS')
let mood = 'sleepy'
let tirednessLevel = 4
if (mood=='sleepy' && tirednessLevel>8) {
    console.log ('Go to bed')
} else {
    console.log('Keep working')
}
let myMood = 'sleepy'
let myTirednessLevel = 9
if (myMood=='sleepy' || myTirednessLevel>8) {
    console.log ('Go to bed')
} else {
    console.log('Keep working')
}
let yourMood = 'sleepy'
let yourTirednessLevel = 3
if (!(yourMood=='sleepy' && yourTirednessLevel>8)) {
    console.log ('Go to bed, you\'ve cheated')
} else {
    console.log('Keep working')
}
console.log('\n')
console.log('TRUTHY AND FALSY ASSIGNMENT')
let username=''
let defaultName=username||'Stranger'
console.log(defaultName)

console.log('\n')
console.log('TERNARY OPERATOR')
0>4? console.log('okay') : console.log ('0 is not greater than 4')

let color = 'red'
color=='green'? console.log('keep back') :
console.log('wear it')
console.log('\n')
console.log('IF...ELSE STATEMENT')
let cgpa=Math.random()*5
console.log(cgpa)
if (cgpa<2.5 && cgpa>=0) {
    console.log('You finished with a Third class')
} else if (cgpa<3.5 && cgpa>=2.5) {
    console.log('You finished with a Second class lower')
} else if (cgpa<4.5 && cgpa >= 3.5) {
    console.log('You finished with a Second class upper')
} else if (cgpa<=5 && cgpa>=4.5) {
    console.log ('Congratulations! You finished with a First class')
} else {
    console.log ('You have no CGPA!')
}
console.log('\n')
console.log('THE SWITCH KEYWORD')
let age = 3
switch (age) {
    case (3 && 5) : 
    console.log ('Toddler');
    break;
    case 13 : console.log ('Teenager');
    break;
    case 21 : console.log('Adult');
    break;
    default : console.log('no category')
    break;
}

let dressColor = 'red'
switch (dressColor) {
    case 'green' : console.log('Pull it!');
    break;
    case 'red' : console.log ('Looks good on you');
    break;
    case "blue" : console.log('Nice!');
    break;
    default :
    console.log('You can ask someone else');
    break;
}
console.log('\n')
console.log('FUNCTIONS')
function test() {
    console.log('This is a test')
    console.log('Hurray!')
}
test()

function perimeterOfSquare(length) {
    console.log(`${4*length}cm`)
}
perimeterOfSquare(10)

function greeting(name='Stranger') {
    console.log(`Hello ${name}`)
}
greeting ('Trinitress')

function makeShoppingList(item1='milk', item2='bread', item3='eggs') {
    console.log(`
    Remember to buy ${item1}
    Remember to buy ${item2}
    Remember to buy ${item3}
    `)
}
makeShoppingList('butter')

console.log('\n')
console.log('return KEYWORD IN FUNCTIONS')
function calculateAreaOfSquare(length) {
    const area = length*length
    return area
    console.log(area)
}

let areaOfSquare = calculateAreaOfSquare(10)
console.log(areaOfSquare)

console.log('\n')
console.log('HELPER FUNCTIONS')
function calculatePerimeter(width,height) {
    const perimeter = width*height
    return perimeter
    
}
let answer = calculatePerimeter(3,5)
console.log(answer)
function twicePerimeter(width, height) {
    return calculatePerimeter(width,height)*2
}
let valueOfTwicePerimeter = twicePerimeter(3,5)
console.log(valueOfTwicePerimeter)

console.log('\n')
console.log('FUNCTION EXPRESSION')
const shoppingDay = function(day) {
    if (day==='Saturday') {
        return 'Shopping Day!'
    } else if (day==='Sunday') {
        return'Worship Day!'
    } else {
        return 'Work Day!'
    }
}
let whatDay = shoppingDay('Thursday')
console.log (whatDay)

console.log('\n')
console.log('ARROW FUNCTION')
const celebrateBirthday = (date) => {
    if (date==='26/02') {console.log('HAPPY BIRTHDAY CHAMP!')
}else {console.log("It's another day")
}
}
celebrateBirthday('26/07')

console.log('\n')
console.log('CONCISE BODY ARROW FUNCTION')

const squareNum = num => num*num
console.log(squareNum(3));
console.log(squareNum(2))
console.log(squareNum(5))

const plantNeedsWater  = day => day==='Wednesday'? true : false;
console.log (plantNeedsWater('Wednesday'))

console.log('\n')
console.log('GLOBAL SCOPE')
const firstName = 'Daniel';
const middleName = 'Ayobamidele';
const lastName = 'Adeleke';
const fullName = () => `My fullname is ${firstName} ${middleName} ${lastName}. `
console.log(fullName())

const nameTest = (firstname, middlename, lastname) => 'My name is ' + firstname + ' ' + middlename + " " + lastname + '.' 
console.log(nameTest('Adeniji' , 'Jones', 'Sade'))

console.log('\n')
console.log('BLOCK/LOCAL SCOPE')
const skyColor = () => {
    let color = 'blue';
    return `The sky is ${color}.`
}
console.log(skyColor())
console.log(color)

console.log('\n')
const dailyRoutine = () => {
    let time = '8am'
    let period = 'work'
    if (time==='5pm') {
        let period = 'Closing Time' 
        console.log(period)
    } console.log(period)
}
dailyRoutine()

console.log('\n')
console.log('ARRAYS')
const hobbies = ['swimming', 'travelling', 'dancing', 'flying']
let famousActivity = hobbies[0]
console.log(hobbies[3])
console.log(famousActivity)

console.log('\n')
console.log('UPDATING ARRAY ELEMENTS')
hobbies[3] = 'cycling'
console.log(hobbies)

console.log('\n')
console.log('.length ARRAY PROPERTY')
console.log(hobbies.length)

console.log('\n')
console.log('.push() ARRAY METHOD')
hobbies.push('skiing', 'gaming');
console.log(hobbies)

console.log('\n')
console.log('.pop() ARRAY METHOD')
const removed = hobbies.pop()
console.log(removed)
console.log(hobbies)

console.log('\n')
console.log('other ARRAY METHODS')
hobbies.shift()
console.log(hobbies)

hobbies.unshift('drawing')
console.log(hobbies)

console.log(hobbies.slice(1,4))

console.log(hobbies.indexOf('cycling'))

console.log('\n')
console.log('ARRAYS AND FUNCTIONS')
const flowers = ['lily', 'rose', 'hibiscus']
const addFlower = arr  => {
    arr.push('marigold')
}
addFlower(flowers)
console.log(flowers);

console.log('\n')
console.log('NESTED ARRAYS')
let familyTree = [['Mama', 'Baba'], ['Mom', "Dad"], ['Son', 'Daughter', 'Son']]
console.log(familyTree[2][1])
console.log(familyTree.indexOf('Son'))

console.log('\n')
console.log('LOOPS')
for ( let number = 5; number<11; number++) {
    console.log(number)
}

console.log('\n')
console.log('LOOPING IN REVERSE')
for ( let revNumber = 10; revNumber>=5; revNumber--) {
    console.log(revNumber)
}

console.log('\n')
console.log('LOOPING THROUGH ARRAYS')
for (let arrLoop = 0; arrLoop<flowers.length; arrLoop++)
console.log(flowers[arrLoop])

let vacationSpots = ['LasVegas', 'Tokyo', 'France', 'Columbia']
for (let i=0; i<vacationSpots.length; i++) {
    console.log(`I would love to visit ${vacationSpots[i]} for my vacation.`)
}

console.log('\n')
console.log('LOOPS')
let Array1 = [7,9,23,45,60,72]
let Array2 = [9,18,27,36,45,54,63,72]
for (let i=0; i<Array1.length; i++) {
    for (let j=0; j<Array2.length; j++) {
        console.log(Array1[i], Array2[j])
    }
}

console.log('\n')
console.log('NESTED LOOPS')
let myArray = [7,9,23,45,60,72]
let yourArray = [9,18,27,36,45,54,63,72]
for (let i =0 ; i<myArray.length; i++) {
    for (let j=0; j<yourArray.length; j++) {
        if (myArray[i]===yourArray[j]) {
            console.log('Both arrays have ' + myArray[i] + ' in common.')
        }
    }
}

console.log('\n')
console.log('another example on NESTED LOOPS')
let mutualFollowers = []
let christysFollowers = ['Femi', 'Sarah', 'Neto', 'Anu', 'Dad', 'Deji']
let dansFollowers = ['Anu', 'Dad', 'Max', 'Moses', "Femi", 'Cerkool']
for (let i=0; i<dansFollowers.length; i++) {
    for (let j=0; j<christysFollowers.length; j++) {
        if (dansFollowers[i]===christysFollowers[j]) {mutualFollowers.push(christysFollowers[j])
        console.log(mutualFollowers)
        }
    }
}


console.log('\n')
console.log('WHILE LOOPS')
let counter = 0
while (counter<7) {
    console.log(counter); counter++
}

const cards = ['diamond', 'spade', 'club', 'heart']
let currentCard;
while(currentCard!=='diamond') {
    currentCard=cards[Math.floor(Math.random()*4)]
    console.log(currentCard)
}

console.log('\n')
console.log('DO...WHILE LOOPS')
let countString = ''
let i = 0;
do{
    countString = countString + i ; i++
} while ( i < 5);
console.log(countString);

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!';
do {
    console.log(firstMessage);
}  while (true===false) {
        console.log(secondMessage);
}

let cupsofSugarNeeded = 2
let cupsAdded = 0;
do {
    cupsAdded=cupsAdded+1
    console.log(cupsAdded + ' cup was added')
} while (cupsAdded<cupsofSugarNeeded);

let k=0
do {
    k++;
    console.log(k)
} while (k<5)

console.log('\n')
console.log('BREAKING OUT OF LOOPS')
for (let i = 0; i<100; i++) {
        if (i>2) {
        break;
    } console.log('Banana')
}
console.log('Orange! I broke out of the loop')

console.log('\n')
  for (let i = 1; i<=100; i++)
  {if (i>=7) {
      break;
  } console.log('fruit ' + i + ' today.')
}
console.log('I don\'t want fruits anymoe!')


console.log('\n')
let rappers = ['Eminem', 'Jay-Z', 'Chris Brown', 'Nasty-C']
for (let i=0; i<rappers.length; i=(Math.floor(Math.random()*4))) {
    console.log(rappers[i]);
    if (rappers[i]==='Chris Brown') {
        break;
    }
}
console.log('Now you know some rappers!')

console.log('\n')
console.log('FUNCTION AS DATA')
const checkThatTwoPlusTwoIsEqualToFour = () => {
    for (let i=1; i<=1000000; i++) {
        if (2+2!==4) {
            console.log('Something is very very wrong!')
        }
    } return ('2+2 = 4 otherwise argue with your calculator')
}

let is2p2 = checkThatTwoPlusTwoIsEqualToFour
console.log(is2p2())

console.log('\n')
console.log('.forEach() METHOD')
const typeList = ['super', 'mainframe', 'hybrid']
const computerTypes = typeList.forEach (function (computers) {
    console.log( `${computers} computer is a type of computer.`)
})
console.log(computerTypes)

console.log('\n')
console.log('.map() METHOD')
let states = ['Taraba', 'Rivers', 'Adamawa', 'Bayelsa', 'Anambra', 'Yobe', 'Ekiti']
const secretMesssage = states.map(firstLetter => {
    return firstLetter[0]})
    console.log(secretMesssage.join(''))

const num = [2,5,8,50,20]
const bigNumb= num.map(function (number) {
    return number*10
})
console.log(bigNumb)
const smallNumb = num.map((num)=>{
    return Math.ceil(num/3)
})
console.log(smallNumb)

console.log('\n')
console.log('.filter() METHOD')
const filterArray = ['egg', 'pepper', 'onion', 'salt', 'locust-beans']
const neededSpice = filterArray.filter(spice => {
console.log( spice.length>5);
return spice.length>5
})
console.log(neededSpice)

console.log('\n')
console.log('.findIndex() METHOD')
let found = [34,958,42,657,4,235].findIndex(num => {
    return num < 20;
})
console.log(found)

console.log('\n')
console.log('.reduce() METHOD')
let numOfItems = [1,2,3,4,5,6,7,10,20,30]
let reducedItem = numOfItems.reduce((acc,currVal) => {
    return acc + currVal
}, 10)
console.log(reducedItem)

console.log('\n')
console.log('.some() METHOD')
let personNames = ['Peter', 'Raphael','John','Mary', 'Jane']
let son = personNames.some((person) => {
return person.startsWith('J')
})
console.log(son)

console.log('\n')
console.log('.every() METHOD')
let girls = ['Toyin','Joan','Love']
var ladyStudent = girls.every(function (student) {
    return student.charAt (1) ==='o'
}) 
console.log(ladyStudent)

console.log('\n')
console.log('OBJECTS')
let spaceship = {
    'home&Planet' : 'Earth',
    color : 'blue'
}

console.log('\n')
console.log('DOT NOTATION')
console.log (spaceship.color)

console.log('\n')
console.log('BRACKET NOTATION')
console.log(spaceship['home&Planet'])

console.log('\n')
let returnAnyProp = (objectName, propName) => {
    return objectName[propName];
}
console.log(returnAnyProp(spaceship,'color'))

console.log('\n')
console.log('OBJECT ASSIGNMENT')
spaceship['Fuel Type'] = 'diesel'
spaceship.color = 'brown'
console.log(spaceship)

console.log('\n')
console.log('DELETING A PROPERTY')
delete spaceship['color']
console.log(spaceship)

console.log('\n')
console.log('OBJECT METHODS')
const family = {
    father : 'Mr Rufus Adeleke',
    mother : 'Mrs Victoria Adeleke',
    children : function () {
        console.log('Anu, Tope and Dare')
    },
    'relatives': 'several'
}
family.children()

console.log('\n')
console.log('NESTED OBJECTS')
let ship = {
    passengers : 'null',
    telescope : {
        yearBuilt : 2020,
        model: '9834-IFW', 
        focalLength: 3255
    }, 
    crew: {
        captain: {
            name: 'Dele',
            degree: 'Marine Science',
            encourageTeam () {
                console.log('We always got this!')
            },
            favoriteFood: ['pounded yam', 'cakes', 'pizza']
        }
    },
    engine: {
        model : 'Mercedez 2016'
    },
    nanoelectronics : {
        computer: {
            size : '100 terabytes',
            monitors : 'HD'
        },
        'back-up': {
            battery : 'Lithium',
            size : '50 terabytes'

        }

    }
}
console.log(ship)
console.log(JSON.stringify(ship))

let capFave = ship.crew.captain.favoriteFood[1]
console.log(capFave)

let backupBatt = ship['nanoelectronics']['back-up']['battery']
console.log(backupBatt)

ship['passengers'] = [{
    name: 'Niel',
    gender:'male'
},
{
    name: 'Wany',
    gender: 'female'
}]
let firstPassenger = ship.passengers[0]
console.log(firstPassenger)

console.log('\n')
console.log('PASS BY REFERENCE')
let myLaptop = {
    brand : 'Dell',
    screen : '14"',
    storage : '1TB'
}
let storageUpgrade = obj => {
    obj.storage = '2TB'
    // property reassignment works out 
}
storageUpgrade(myLaptop)
console.log(myLaptop)

let objReassignment = obj => {
    obj = {
        RAM : '12GB',
        'CPU' : 'Intel Core i7'
        //object reassignment does not work out
    }
}
objReassignment(myLaptop)
console.log(myLaptop)


myLaptop = {
    RAM : '12GB',
'CPU' : 'Intel Core i7'
} // object reassignment works fine with the regular reassignment of variables declared with let keyword
console.log(myLaptop)

console.log('\n')
console.log('LOOPING THROUGH OBJECTS')
let craft = {
    crew: {
        captain: {
            name: 'Love',
            degree: 'Computer Engineering',
            cheerTeam() {console.log('You got this!')}
        },
        'chief officer': {
            name: 'Niel',
            degree: 'Aerospace Engineering',
            agree() {console.log('I agree, captain!')}
        },
        'medic': {
            name: 'Clement',
            degree: 'Physics',
            announce () {console.log('Jets on!')}
        },
        translator: {
            name: 'Sarah',
            degree: 'Conservation Science',
            powerFuel () {console.log('The tank is full!')}
        }
    }
}
for (let crewMember in craft.crew) {
    console.log( `${crewMember} : ${craft.crew[crewMember].name} - ${craft.crew[crewMember].degree}`)
}

console.log('\n')
console.log('this KEYWORD')
const cat= {
    dietType: 'worm',
    features: {
        tail: 1,
        head: 1,
        ear: 2,
        eye: 2,
        limbs: 4
    },
    colour: 'brown',
    mass: '4kg',
    makeSound: 'meow',
    diet() {console.log(this.dietType)},
    sizeOfAnimal () {console.log(`The cat weighs ${this['mass']}.`)},
    noOfHead () {console.log(this.features.head)}
}
cat.diet()
cat.sizeOfAnimal()
cat.noOfHead()

// Do not use arrow function with the this keyword in methods

