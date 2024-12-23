const gamePad = document.getElementById('canvas')
const game_context = gamePad.getContext('2d')
const score_element = document.getElementById('score')
const unit = 25;
let Xvel = unit;
let Yvel = 0;
let score = 0;
let head
let foodX
let foodY
let gameOver = true