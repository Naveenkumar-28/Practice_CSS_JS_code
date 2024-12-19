const gamePad = document.getElementById('canvas')
const game_context = gamePad.getContext('2d')
const score_element = document.getElementById('score')
const unit = 25;
let Xvel = unit;
let Yvel = 0;
let score = 0;
let foodX
let foodY
let gameOver = true


const snake = [
  { x: unit * 3, y: 0 },
  { x: unit * 2, y: 0 },
  { x: unit, y: 0 },
  { x: 0, y: 0 }
]


const gameStart = () => {
  game_context.fillStyle = "black";
  game_context.fillRect(0, 0, 500, 500);
}


const foodCreate = () => {
  game_context.fillStyle = "red";
  foodX = (Math.floor(Math.random() * 20) * 25)
  foodY = (Math.floor(Math.random() * 20) * 25)
  game_context.fillRect(foodX, foodY, unit, unit);
}


const CreateSnake = () => {

  game_context.fillStyle = "aqua";
  game_context.strokeStyle = 'black';
  snake.forEach((sBody) => {
    game_context.strokeRect(sBody.x, sBody.y, unit, unit);
    game_context.fillRect(sBody.x, sBody.y, unit, unit);

  })
  snakeMove()
}

const snakeMove = () => {
  if (gameOver) {

    setTimeout(() => {
      let removeBody
      const head = { x: snake[0].x + Xvel, y: snake[0].y + Yvel }
      // if(!(head.x==500 | head.y==500 | head.x==0 | head.y==0)){
      // //  return gameOver=false
      // alert()
      // }
      console.log(head.x==500 , head.y==500 , head.x==0 ,head.y==0);
      
      console.log(head.x==500 | head.y==500 | head.x==0 | head.y==0);
      
      
      if (foodX == head.x && foodY == head.y) {
        score += 1
        if (score <= 9) {
          score_element.innerHTML = `0${score}`
        }
        else {
          score_element.innerHTML = score
        }
        foodCreate()
      }
      else {
        removeBody = snake.pop()
        clear(removeBody)
      }
      snake.unshift(head)

      CreateSnake()

    }, 400)
  }

}

const clear = (removeBody) => {
  game_context.fillStyle = "black";
  game_context.fillRect(removeBody.x, removeBody.y, unit, unit);
}


gameStart()


foodCreate()
CreateSnake()
snakeMove()


window.addEventListener('keydown', (event) => {

  switch (true) {
    case (event.code == "ArrowDown" && Yvel !== -unit):
      Xvel = 0;
      Yvel = unit

      break;
    case (event.code == "ArrowUp" && Yvel !== unit):
      Xvel = 0;
      Yvel = -unit
      break;
    case (event.code == "ArrowRight" && Xvel !== -unit):
      Xvel = unit;
      Yvel = 0;
      break;
    case (event.code == "ArrowLeft" && Xvel !== unit):
      Xvel = -unit;
      Yvel = 0;
      break;

    default:
      break;
  }

})