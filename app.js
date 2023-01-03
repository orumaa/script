// let my_age = 23 + 3
// console.log(my_age)
// let first_name = "oruma"

// let firt_batch= 5
// let second_batch = 7
// let count = firt_batch + second_batch
// console.log(count) 

// let myAge = 23
// let humanDogRatio= 50
// let myDogAge= myAge * humanDogRatio
// console.log(myDogAge)

// let bonusPoint = 50
// bonusPoint = bonusPoint + 50
// console.log(bonusPoint)
// bonusPoint= bonusPoint - 75
// console.log(bonusPoint)
// bonusPoint = bonusPoint + 45
// console.log(bonusPoint)

// function increment(){
//     console.log("this button was clicked")
// }

// function number(){
//     console.log(42)
// }
// number()

// let lap1 =34
// let lap2 = 33
// let lap3 = 36

// function laps(){
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }
// laps()



// let lapsCompleted = 0

// function incrementLap(){
//     lapsCompleted = lapsCompleted + 1
   
// }
// incrementLap()
// incrementLap()
// incrementLap()


// console.log(lapsCompleted)

let game_start = 5

function start(){
    game_start = game_start + 1
}

// console.log(game_start)

// let game1= 50
// let game2= 10
// let game3= 20
// let game4= 40

// function game_total(){
//     let total_sum = game1 - game2 + game3 * game4
//     console.log(total_sum)
// }
// game_total()

let count = 0
let countEl = document.getElementById("count-el")
console.log(countEl)

function increment(){
    // console.log("clicked")
    count = count + 1
    
    countEl.innerText= count
    console.log(count)
}