const fullName = ['Asraful', 'Alam']
const bioData = [1, 26, 'male', ...fullName]
console.log(bioData)

var shooterGames = ['Call of Duty', 'Far Cry', 'Resident Evil', 'Call of Duty', 'Far Cry', 'Resident Evil']
var racingGames = ['Need for Speed', 'Gran Turismo', 'Burnout']
var games = [...shooterGames, ...racingGames]
console.log(games)

// 3rd cases
var shooterGames = ['Call of Duty', 'Far Cry', 'Resident Evil']
var [first, ...remaining] = shooterGames
console.log(first)
console.log(remaining)


const arr = ['Hello', 'How', 'Are', 'You', '?', 'Fine and', 'you?']
// console.log(arr)

const arrInArr = [...arr]
console.log(arrInArr)


// Object
const fullNames = {
   fName: 'Asraful',
   lName: 'Alam',
}

const bioDatas = {
   id: 1,
   ...fullNames,
   age: 26,
   gender: 'male'
}
console.log(bioDatas)