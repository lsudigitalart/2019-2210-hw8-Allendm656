var head, wrinkle, ear, eye, mouth, facialhair, nose, eyebrow, hair
var r, g, b

function setup() {
  createCanvas(500, 750)
  background(random(255), random(255), random(255))

  head = 1 + int(random(3))
  wrinkle = 1 + int(random(6))
  ear = 1 + int(random(3))
  eye = 1 + int(random(3))
  mouth = 1 + int(random(3))
  facialhair = 1 + int(random(4))
  nose = 1 + int(random(3))
  eyebrow = 1 + int(random(3))
  hair = 1 + int(random(3))

  r = int(random(255))
  g = int(random(255))
  b = int(random(255))

}

function draw() {

//Heads
  if(head == 1){
    head1()
  }

  if(head == 2){
    head2()
  }

  if(head == 3){
    head3()
  }


//Wrinkles
  if(wrinkle == 1){
    w1()
  }

  if(wrinkle == 2){
    w2()
  }

  if(wrinkle == 3){
    w3()
  }

  if(wrinkle == 4){
    w4()
  }

  if(wrinkle == 5){
    w5()
  }

  if(wrinkle == 6){
  }

//Ears
  if(ear == 1){
    ear1()
  }

  if(ear == 2){
    ear2()
  }

  if(ear == 3){
    ear3()
  }


//Eyes
  if(eye == 1){
    eye1()
  }

  if(eye == 2){
    eye2()
  }

  if(eye == 3){
    eye3()
  }


//Mouths
  if(mouth == 1){
    m1()
  }

  if(mouth == 2){
    m2()
  }

  if(mouth == 3){
    m3()
  }


//Facial Hair
  if(facialhair == 1){
    fh1()
  }

  if(facialhair == 2){
    fh2()
  }

  if(facialhair == 3){
    fh3()
  }

  if(facialhair == 4){
  }

//Nose
  if(nose == 1){
    n1()
  }

  if(nose == 2){
    n2()
  }

  if(nose == 3){
    n3()
  }


//Eyebrows
  if(eyebrow == 1){
    eb1()
  }

  if(eyebrow == 2){
    eb2()
  }

  if(eyebrow == 3){
    eb3()
  }


//hair
  if(hair == 1){
    hair1()
  }

  if(hair == 2){
    hair2()
  }

  if(hair == 3){
    hair3()
  }

//Pupil and Eye color
  push()
  noStroke()
  fill(r, g, b)
  ellipse(183, 370, 27, 27)
  ellipse(317, 370, 27, 27)

  fill(0)
  ellipse(183, 370, 10, 10)
  ellipse(317, 370, 10, 10)
  pop()

}

//Head 1
function head1 (){
  push()
  stroke(0)
  strokeWeight(5)
  fill(255, 220, 177)

  beginShape()
  vertex(50,375)
  bezierVertex(50, 375, 50, 125, 250, 125)
  bezierVertex(250, 125, 450, 125, 450, 375)
  vertex(450, 375)
  vertex(425, 500)
  vertex(310, 625)
  vertex(190, 625)
  vertex(75 , 500)
  endShape(CLOSE)
  pop()
}

//Head 2
function head2 (){
  push()
  beginShape()
  stroke(0)
  strokeWeight(5)
  fill(255, 220, 177)

  vertex(50,375)
  bezierVertex(50, 375, 50, 125, 250, 125)
  bezierVertex(250, 125, 450, 125, 450, 375)
  vertex(450, 375)
  vertex(400, 550)
  vertex(310, 625)
  vertex(190, 625)
  vertex(100 , 550)
  endShape(CLOSE)
  pop()
}

//Head 3
function head3 () {
  push()
  stroke(0)
  strokeWeight(5)
  fill(255, 220, 177)

  beginShape()
  vertex(50,375)
  bezierVertex(50, 375, 50, 125, 250, 125)
  bezierVertex(250, 125, 450, 125, 450, 375)
  vertex(450, 375)
  vertex(430, 475)
  vertex(405, 520)
  vertex(340, 595)
  vertex(310, 615)
  vertex(250, 625)
  vertex(190, 615)
  vertex(160, 595)
  vertex(95, 520)
  vertex(70 , 475)
  endShape(CLOSE)
  pop()
}

//Wrinkle 1
function w1 (){
  push()
  stroke(0)
  strokeWeight(5)
  noFill()

  beginShape()
  vertex(210, 455)
  bezierVertex(210, 455, 160, 500, 160, 570)
  vertex(160, 570)
  endShape()

  beginShape()
  vertex(290, 455)
  bezierVertex(290, 455, 340, 500, 340, 570)
  vertex(340, 570)
  endShape()
  pop()
}

//Wrinkle 2
function w2 (){
  push()
  stroke(0)
  strokeWeight(5)
  noFill()

  beginShape()
  vertex(225, 380)
  vertex(170, 400)
  endShape()

  beginShape()
  vertex(275, 380)
  vertex(330, 400)
  endShape()
  pop()
}

//Wrinkle 3
function w3 (){
  push()
  stroke(0)
  strokeWeight(5)
  noFill()

  beginShape()
  vertex(80, 380)
  vertex(120, 430)
  vertex(140, 550)
  endShape()

  beginShape()
  vertex(420, 380)
  vertex(380, 430)
  vertex(360, 550)
  endShape()
  pop()
}

//Wrinkle 4
function w4 (){
  push()
  stroke(0)
  strokeWeight(5)
  noFill()

  beginShape()
  vertex(225, 380)
  vertex(170, 400)
  endShape()

  beginShape()
  vertex(275, 380)
  vertex(330, 400)
  endShape()

  beginShape()
  vertex(210, 455)
  bezierVertex(210, 455, 160, 500, 160, 570)
  vertex(160, 570)
  endShape()

  beginShape()
  vertex(290, 455)
  bezierVertex(290, 455, 340, 500, 340, 570)
  vertex(340, 570)
  endShape()
  pop()
}

//Wrickle 5
function w5() {
  push()
  stroke(0)
  strokeWeight(5)
  noFill()

  beginShape()
  vertex(80, 380)
  vertex(120, 430)
  vertex(140, 550)
  endShape()

  beginShape()
  vertex(420, 380)
  vertex(380, 430)
  vertex(360, 550)
  endShape()

  beginShape()
  vertex(225, 380)
  vertex(170, 400)
  endShape()

  beginShape()
  vertex(275, 380)
  vertex(330, 400)
  endShape()
  pop()
}

//Ears 1
function ear1 (){
  push()
  stroke(0)
  strokeWeight(5)
  fill(255, 220, 177)

  beginShape()
  vertex(53, 370)
  vertex(50, 365)
  bezierVertex(50, 365, 43, 350, 35, 350)
  vertex(35, 350)
  bezierVertex(35, 350, 20, 345, 20, 370)
  vertex(20, 370)
  vertex(40, 450)
  bezierVertex(40, 450, 45, 465, 55, 465)
  vertex(55, 465)
  bezierVertex(55, 465, 65, 465, 65, 450)
  vertex(65, 450)
  vertex(65, 440)
  endShape()

  beginShape()
  vertex(447, 370)
  vertex(450, 365)
  bezierVertex(450, 365, 453, 350, 465, 350)
  vertex(465, 350)
  bezierVertex(465, 350, 480, 345, 480, 370)
  vertex(480, 370)
  vertex(460, 450)
  bezierVertex(460, 450, 455, 465, 445, 465)
  vertex(445, 465)
  bezierVertex(445, 465, 435, 465, 435, 450)
  vertex(435, 450)
  vertex(435, 440)
  endShape()

  noStroke()
  fill(255, 220, 177)

  beginShape()
  vertex(45, 375)
  vertex(55, 375)
  vertex(75, 435)
  vertex(60, 435)
  endShape()

  beginShape()
  vertex(455, 375)
  vertex(445, 375)
  vertex(425, 435)
  vertex(440, 435)
  endShape()
  pop()
}

//Ears 2
function ear2(){
  push()
  stroke(0)
  strokeWeight(5)
  fill(255, 220, 177)

  beginShape()
  vertex(53, 370)
  vertex(50, 365)
  bezierVertex(50, 365, 43, 350, 20, 340)
  vertex(20, 340)
  vertex(20, 370)
  vertex(25, 415)
  vertex(50, 450)
  bezierVertex(50, 450, 60, 465, 70, 465)
  vertex(70, 465)
  bezierVertex(70, 465, 80, 465, 75, 450)
  vertex(75, 450)
  vertex(73, 440)
  endShape()

  beginShape()
  vertex(447, 370)
  vertex(450, 365)
  bezierVertex(450, 365, 453, 350, 480, 340)
  vertex(480, 340)
  vertex(480, 370)
  vertex(475, 415)
  vertex(450, 450)
  bezierVertex(450, 450, 440, 465, 430, 465)
  vertex(430, 465)
  bezierVertex(430, 465, 420, 465, 425, 450)
  vertex(425, 450)
  vertex(427, 440)
  endShape()
}

//Ears 3
function ear3(){
  push()
  stroke(0)
  strokeWeight(5)
  fill(255, 220, 177)

  beginShape()
  vertex(53, 370)
  vertex(50, 365)
  bezierVertex(50, 365, 43, 350, 35, 350)
  vertex(35, 350)
  bezierVertex(35, 350, 20, 345, 15, 370)
  vertex(15, 370)
  vertex(20, 410)
  vertex(30, 435)
  vertex(40, 450)
  bezierVertex(40, 450, 45, 465, 55, 465)
  vertex(55, 465)
  bezierVertex(55, 465, 65, 465, 65, 450)
  vertex(65, 450)
  vertex(65, 440)
  endShape()

  beginShape()
  vertex(447, 370)
  vertex(450, 365)
  bezierVertex(450, 365, 453, 350, 465, 350)
  vertex(465, 350)
  bezierVertex(465, 350, 480, 345, 485, 370)
  vertex(485, 370)
  vertex(480, 410)
  vertex(470, 435)
  vertex(460, 450)
  bezierVertex(460, 450, 455, 465, 445, 465)
  vertex(445, 465)
  bezierVertex(445, 465, 435, 465, 435, 450)
  vertex(435, 450)
  vertex(435, 440)
  endShape()

  noStroke()
  fill(255, 220, 177)

  beginShape()
  vertex(45, 375)
  vertex(55, 375)
  vertex(75, 435)
  vertex(60, 435)
  endShape()

  beginShape()
  vertex(455, 375)
  vertex(445, 375)
  vertex(425, 435)
  vertex(440, 435)
  endShape()
  pop()
}

//eyes 1
function eye1(){
  push()
  stroke(0)
  strokeWeight(5)
  fill(255)

  beginShape()
  vertex(275, 375)
  bezierVertex(275, 375, 340, 330, 375, 365)
  vertex(375, 365)
  bezierVertex(375, 365, 360, 400, 275, 375)
  endShape()

  beginShape()
  vertex(225, 375)
  bezierVertex(225, 375, 160, 330, 125, 365)
  vertex(125, 365)
  bezierVertex(125, 365, 140, 400, 225, 375)
  endShape()
  pop()
}

//eyes 2
function eye2(){
  push()
  stroke(0)
  strokeWeight(5)
  fill(255)

  beginShape()
  vertex(275, 375)
  bezierVertex(275, 375, 310, 330, 375, 365)
  vertex(375, 365)
  bezierVertex(375, 365, 320, 400, 275, 375)
  endShape()

  beginShape()
  vertex(225, 375)
  bezierVertex(225, 375, 190, 330, 125, 365)
  vertex(125, 365)
  bezierVertex(125, 365, 180, 400, 225, 375)
  endShape()
  pop()
}

//eyes 3
function eye3(){
  push()
  stroke(0)
  strokeWeight(5)
  fill(255)

  beginShape()
  vertex(275, 375)
  bezierVertex(275, 375, 300, 330, 375, 365)
  vertex(375, 365)
  bezierVertex(375, 365, 360, 400, 275, 385)
  endShape(CLOSE)

  beginShape()
  vertex(225, 375)
  bezierVertex(225, 375, 200, 330, 125, 365)
  vertex(125, 365)
  bezierVertex(125, 365, 140, 400, 225, 385)
  endShape(CLOSE)
  pop()
}

//Mouth 1
function m1 (){
  push()
  stroke(0)
  strokeWeight(5)
  noFill()

  beginShape()
  vertex(195, 526)
  vertex(190, 530)
  vertex(230, 525)
  vertex(250, 530)
  vertex(270, 525)
  vertex(310, 530)
  vertex(305, 526)
  endShape()
  pop()
}

//Mouth 2
function m2 (){
  push()
  noStroke()
  fill(250, 0, 0)

  beginShape()
  vertex(187, 528)
  bezierVertex(187, 528, 215, 510, 240, 510,)
  vertex(240, 510)
  vertex(250, 515)
  vertex(260, 510)
  bezierVertex(260, 510, 285, 510, 313, 528)
  vertex(313, 528)
  vertex(300, 535)
  vertex(250, 530)
  vertex(200, 535)
  endShape()

  stroke(0)
  strokeWeight(5)
  noFill()

  beginShape()
  vertex(190, 530)
  bezierVertex(190, 530, 210, 540, 250, 530)
  vertex(250, 530)
  bezierVertex(250, 530, 290, 540, 310, 530)
  vertex(310, 530)
  endShape()
  pop()
}

//Mouth 3
function m3(){
  push()
  stroke(0)
  strokeWeight(5)
  noFill()

  beginShape()
  vertex(190, 520)
  bezierVertex(190, 520, 210, 530, 235, 523)
  vertex(235, 523)
  vertex(250, 530)
  vertex(265, 523)
  bezierVertex(265, 523, 290, 530, 310, 520)
  vertex(310, 520)
  endShape()
  pop()
}

//Facial Hair 1
function fh1(){
  push()
  noStroke()
  fill(130, 100 , 50)
  
  beginShape()
  vertex(210, 470)
  vertex(290, 470)
  vertex(330, 485)
  vertex(340, 495)
  vertex(340, 510)
  vertex(330, 520)
  vertex(290, 505)
  vertex(210, 505)
  vertex(170, 520)
  vertex(160, 510)
  vertex(160, 495)
  vertex(170, 485)
  endShape()
  pop()
}

//facial Hair 2
function fh2(){
  push()
  noStroke()
  fill(130, 100 , 50)
  
  beginShape()
  vertex(210, 470)
  vertex(290, 470)
  vertex(330, 485)
  vertex(340, 495)
  vertex(340, 510)
  vertex(330, 520)
  vertex(290, 505)
  vertex(210, 505)
  vertex(170, 520)
  vertex(160, 510)
  vertex(160, 495)
  vertex(170, 485)
  endShape()

  beginShape()
  vertex(155, 590)
  vertex(160, 585)
  vertex(205, 605)
  vertex(230, 590)
  vertex(270, 590)
  vertex(295, 605)
  vertex(340, 585)
  vertex(345, 590)
  vertex(340, 605)
  vertex(310, 630)
  vertex(250, 640)
  vertex(190, 630)
  vertex(160, 605)
  endShape()
  pop()
}

function fh3(){
//facial Hair 3
  push()
  noStroke()
  fill(130, 100 , 50)
  
  beginShape()
  vertex(210, 470)
  vertex(290, 470)
  vertex(330, 485)
  vertex(340, 495)
  vertex(340, 510)
  vertex(330, 520)
  vertex(290, 505)
  vertex(210, 505)
  vertex(170, 520)
  vertex(160, 510)
  vertex(160, 495)
  vertex(170, 485)
  endShape()

  beginShape()
  vertex(235, 555)
  vertex(265, 555)
  vertex(260, 565)
  vertex(250, 570)
  vertex(240, 565)
  endShape()

  beginShape()
  vertex(50, 350)
  vertex(70, 350)
  vertex(80, 460)
  vertex(130, 490)
  vertex(155, 540)
  vertex(160, 520)
  vertex(165, 520)
  vertex(165, 585)
  vertex(205, 605)
  vertex(230, 590)
  vertex(270, 590)
  vertex(295, 605)
  vertex(335, 585)
  vertex(335, 520)
  vertex(340, 520)
  vertex(345, 540)
  vertex(370, 490)
  vertex(420, 460)
  vertex(430, 350)
  vertex(450, 350)
  vertex(430, 510)
  vertex(410, 550)
  vertex(370, 590)
  vertex(310, 630)
  vertex(250, 640)
  vertex(190, 630)
  vertex(130, 590)
  vertex(90, 550)
  vertex(70, 510)
  endShape()
  pop()
}

//Nose 1
function n1(){
  push()
  stroke(0)
  strokeWeight(5)
  fill(255, 220, 177)

  line(250, 375, 250, 450)

  beginShape()
  vertex(220, 460)
  bezierVertex(220, 460, 230, 465, 240, 480)
  vertex(240, 480)
  vertex(260, 480)
  bezierVertex(260, 480, 270, 465, 280, 460)
  vertex(280, 460)
  endShape()
  pop()
}

//Nose 2
function n2 (){
  push()
  stroke(0)
  strokeWeight(5)
  noFill()

  beginShape()
  vertex(215, 455)
  bezierVertex(215, 455, 205, 465, 215, 475)
  vertex(215, 475)
  endShape()

  beginShape()
  vertex(285, 455)
  bezierVertex(285, 455, 295, 465, 285, 475)
  vertex(285, 475)
  endShape()

  fill(255, 220, 177)
  beginShape()
  vertex(225, 465)
  vertex(230, 470)
  bezierVertex(230, 470, 235, 473, 240, 480)
  vertex(240, 480)
  vertex(250, 485)
  vertex(260, 480)
  bezierVertex(260, 480, 265, 473, 270, 470)
  vertex(275, 465)
  endShape()
  pop()
}

//Nose 3
function n3 (){
  push()
  stroke(0)
  strokeWeight(5)
  noFill()

  beginShape()
  vertex(215, 445)
  bezierVertex(215, 445, 205, 455, 215, 470)
  vertex(215, 470)
  endShape()

  beginShape()
  vertex(285, 445)
  bezierVertex(285, 445, 295, 455, 285, 470)
  vertex(285, 470)
  endShape()

  fill(255, 220, 177)
  beginShape()
  vertex(215, 470)
  bezierVertex(215, 470, 230, 470, 240, 480)
  vertex(240, 480)
  vertex(260, 480)
  bezierVertex(260, 480, 270, 470, 285, 470)
  vertex(285, 470)
  endShape()
  pop()
}

//Eyebrow 1
function eb1 (){
  push()
  noStroke()
  fill(130, 100 , 50)

  beginShape()
  vertex(225, 340)
  vertex(160, 330)
  vertex(120, 340)
  vertex(165, 320)
  vertex(225, 330)
  bezierVertex(225, 330, 235, 335, 225, 340)
  endShape()

  beginShape()
  vertex(275, 340)
  vertex(340, 330)
  vertex(380, 340)
  vertex(335, 320)
  vertex(275, 330)
  bezierVertex(275, 330, 265, 335, 275, 340)
  endShape()
  pop()
}

//Eyebrow 2
function eb2() {
  push()
  noStroke()
  fill(130, 100 , 50)

  beginShape()
  vertex(225, 340)
  bezierVertex(225, 340, 160, 300, 120, 340)
  vertex(120, 340)
  bezierVertex(120, 340, 160, 290, 225, 330)
  vertex(225, 330)
  bezierVertex(225, 330, 235, 335, 225, 340)
  endShape()

  beginShape()
  vertex(275, 340)
  bezierVertex(275, 340, 340, 300, 380, 340)
  vertex(380, 340)
  bezierVertex(380, 340, 340, 290, 275, 330)
  vertex(275, 330)
  bezierVertex(275, 330, 265, 335, 275, 340)
  endShape()
  pop()
}

//Eyebrow 3
function eb3 (){
  push()
  noStroke()
  fill(130, 100 , 50)

  beginShape()
  vertex(230, 350)
  vertex(180, 335)
  vertex(130, 335)
  bezierVertex(130, 335, 110, 325, 135, 315)
  vertex(135, 315)
  vertex(180, 315)
  vertex(230, 330)
  bezierVertex(230, 330, 245, 345, 230, 350)
  endShape()

  beginShape()
  vertex(270, 350)
  vertex(320, 335)
  vertex(380, 335)
  bezierVertex(380, 335, 400, 325, 375, 315)
  vertex(375, 315)
  vertex(320, 315)
  vertex(270, 330)
  bezierVertex(270, 330, 255, 345, 270, 350)
  endShape()
  pop()
}

//Hair 1
function hair1(){
  push()
  noStroke()
  fill(130, 100 , 50)

  beginShape()
  vertex(50,375)
  bezierVertex(50, 375, 50, 125, 250, 125)
  bezierVertex(250, 125, 450, 125, 450, 375)
  vertex(450, 375)
  vertex(445, 410)
  vertex(430, 408)
  vertex(425, 400)
  vertex(425, 350)
  vertex(405, 320)
  vertex(400, 230)
  vertex(390, 220)
  vertex(250, 230)
  vertex(110, 220)
  vertex(100, 230)
  vertex(95, 320)
  vertex(75, 350)
  vertex(75, 400)
  vertex(70, 408) 
  vertex(55, 410)
  endShape()
  pop()
}

//Hair 2
function hair2(){
  push()
  noStroke()
  fill(130, 100 , 50)

  beginShape()
  vertex(50,375)
  bezierVertex(50, 375, 50, 125, 250, 125)
  bezierVertex(250, 125, 450, 125, 450, 375)
  vertex(450, 375)
  vertex(445, 410)
  vertex(430, 408)
  vertex(425, 400)
  vertex(425, 350)
  vertex(405, 320)
  vertex(400, 230)
  vertex(390, 220)
  vertex(250, 230)
  vertex(110, 220)
  vertex(100, 230)
  vertex(95, 320)
  vertex(75, 350)
  vertex(75, 400)
  vertex(70, 408) 
  vertex(55, 410)
  endShape()

  beginShape()
  vertex(65, 490)
  bezierVertex(65, 490, 40, 450, 40, 350)
  vertex(40, 350)
  bezierVertex(40, 350, 90, 50, 250, 110)
  vertex(250, 110)
  bezierVertex(250, 110, 410, 50, 460, 350)
  vertex(460, 350)
  bezierVertex(460, 350, 460, 450, 435, 490)
  vertex(435, 490)
  vertex(420, 250)
  vertex(350, 160)
  vertex(150, 160)
  vertex(80, 250)
  endShape()
  pop()
}

//Hair 3
function hair3(){
  push()
  noStroke()
  fill(130, 100 , 50)

  beginShape()
  vertex(50,375)
  bezierVertex(50, 375, 50, 125, 250, 125)
  bezierVertex(250, 125, 450, 125, 450, 375)
  vertex(450, 375)
  vertex(445, 410)
  vertex(430, 408)
  vertex(425, 400)
  vertex(425, 350)
  vertex(405, 320)
  vertex(400, 230)
  vertex(390, 220)
  vertex(250, 230)
  vertex(110, 220)
  vertex(100, 230)
  vertex(95, 320)
  vertex(75, 350)
  vertex(75, 400)
  vertex(70, 408) 
  vertex(55, 410)
  endShape()

  beginShape()
  vertex(55, 360)
  bezierVertex(50, 360, -30, -40, 375, 120)
  vertex(375, 120)
  bezierVertex(375, 120, 460, 70, 450, 360)
  vertex(450, 360)
  vertex(400, 205)
  vertex(100, 205)
  endShape()
  pop()
}
