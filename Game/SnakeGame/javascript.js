const gamePad = document.getElementById('canvas')
const game_context = gamePad.getContext('2d')
const score_element = document.getElementById('score')
const startBtn = document.getElementById('btn_start')
const pauseBtn = document.getElementById('btn_pause')
const ResetBtn = document.getElementById('btn_reset')
const snakeImg = document.getElementById('snake')
const highest_score = document.getElementById('highest_score')
const gameHeight = gamePad.height
const gameWidth = gamePad.width



addEventListener('load', () => {
  const snakeLocScore = localStorage.getItem('snakeGameScore')
  if (snakeLocScore) {

    highest_score.innerText = snakeLocScore
  }

})

const unit = 25;
let Xvel = unit;
let Yvel = 0;
let score = 0;
let head
let foodX
let foodY
let gameOver = false
let startGame = false
let gamePause = false

const snake = [
  { x: unit * 3, y: 0 },
  { x: unit * 2, y: 0 },
  { x: unit, y: 0 },
  { x: 0, y: 0 }
]

startBtn.addEventListener('click', () => {

  if (!startGame) {

    newTick()
    startGame = !startGame
    startBtn.style.backgroundColor = 'red'
    startBtn.classList.add('btn_disable')
    pauseBtn.classList.remove('btn_disable')
  }
})
pauseBtn.addEventListener('click', () => {

  if (startGame) {

    if (!gameOver) {

      gamePause = !gamePause
      if (!gamePause) {
        pauseBtn.innerText = 'pause'
        pauseBtn.style.backgroundColor = '#e79b0c'
        newTick()
        return;
      }
      pauseBtn.innerText = 'Resume'
      pauseBtn.style.backgroundColor = '#4caf16'
    }
  }

})
ResetBtn.addEventListener('click', () => {
  if (gameOver) {

    location.reload()
  }

})

const clearBoard = () => {
  game_context.fillStyle = "#302d2d";
  game_context.fillRect(0, 0, gameWidth, gameHeight);
}

const gameStart = () => {
  clearBoard()
  foodCreate()
  displayFood()
  CreateSnake()
  gameText('Pls Click Start Button', 'green', 'white', '30px')
}


const foodCreate = () => {
  foodX = (Math.floor(Math.random() * gameWidth / unit) * unit)
  foodY = (Math.floor(Math.random() * gameHeight / unit) * unit)
}
const displayFood = () => {
  game_context.beginPath()
  game_context.fillStyle = "red";
  game_context.arc(foodX + (unit / 2), foodY + (unit / 2), unit / 2, 0, 2 * Math.PI)
  game_context.fill()
}

const CreateSnake = () => {
  game_context.strokeStyle = '#302d2d';
  snake.forEach((sBody) => {
    game_context.fillStyle = "yellow";
    game_context.strokeRect(sBody.x, sBody.y, unit, unit);
    game_context.fillRect(sBody.x, sBody.y, unit, unit);
  })
}

const snakeMoveCheck = () => {
  if (snake[0].x >= gameWidth | snake[0].y >= gameHeight | snake[0].x == -unit | snake[0].y == -unit) {
    console.log(snake[0]);

    gameOver = true
  }
  newTick()

}
const newTick = () => {
  if (!gameOver) {
    if (!gamePause) {

      setTimeout(() => {
        clearBoard()
        displayFood()
        CreateSnake()
        snakeMove()
        snakeMoveCheck()
      }, 200)
    }
    else {
      gameText('Game Pause Now', "orange", "white", "30px")
    }

  }
  else {
    ResetBtn.classList.remove('btn_disable')
    pauseBtn.classList.add('btn_disable')
    gameText('Game Over !!', 'red', 'white', '50px')
  }
}
const gameText = (text, color, strokeColor, fontSize) => {
  game_context.fillStyle = color
  game_context.font = `${fontSize} Arial`
  game_context.textAlign = 'center'
  game_context.fillText(text, gameWidth / 2, gameHeight / 2)
  game_context.strokeStyle = strokeColor;
  game_context.strokeText(text, gameWidth / 2, gameHeight / 2)
}

const snakeMove = () => {

  head = { x: snake[0].x + Xvel, y: snake[0].y + Yvel }

  if (foodX == head.x && foodY == head.y) {
    score += 1

    if (score > highest_score.innerText) {
      if (highest_score.innerText <= 9) {
        highest_score.innerText = `0${score}`
      }
      else {
        highest_score.innerText = score
      }
      localStorage.setItem('snakeGameScore', highest_score.innerText)
    }
    if (score <= 9) {
      score_element.innerHTML = `0${score}`
    }
    else {
      score_element.innerHTML = score
    }
    foodCreate()
  }
  else {
    snake.pop()
  }
  snake.unshift(head)
}

gameStart()



window.addEventListener('keydown', (event) => {

  if (startGame) {

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
      case (event.code == "Enter" || event.code == "Space"):
        if (!gameOver) {

          gamePause = !gamePause
          if (!gamePause) {
            pauseBtn.innerText = 'pause'
            pauseBtn.style.backgroundColor = '#e79b0c'
            return newTick()
          }
          pauseBtn.innerText = 'Resume'
          pauseBtn.style.backgroundColor = '#4caf16'
        }
        break;
      case (event.code == "ArrowLeft" && Xvel !== unit):
        Xvel = -unit;
        Yvel = 0;
        break;

      default:

        break;
    }
  }

})
window.addEventListener('keydown', (event) => {
    if(!startGame){
      if(event.code == "Enter" || event.code == "Space"){

       newTick( )
       startGame=!startGame
       startBtn.style.backgroundColor = 'red'
       startBtn.classList.add('btn_disable')
       pauseBtn.classList.remove('btn_disable')
      } 
    }

})