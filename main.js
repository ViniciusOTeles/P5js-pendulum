let r1 = 250,
    r2 = 250,
    m1 = 40,
    m2 = 40
    a1 = 0,
    a2 = 0,
    a1_v = 0,
    a2_v = 0,
    a1_a = 0.01,
    a2_a = -0.01,
    g = 0.98,
    w = 0,
    h = 0,
    num1 = 0,
    num2 = 0,
    num3 = 0

    
    let b1S,
    b2S,
    b2av,
    b1av

    
    
function setup()
{
    w = windowWidth
    h = windowHeight-00
    
    createElement('h4', 'First ball angle')
    b1S = createSlider(0, TWO_PI, PI/2, PI/8)
    
    createElement('h4', 'Second ball angle')
    b2S = createSlider(0, TWO_PI, 4*PI/6, PI/8)
    
    createCanvas(w, h)
    update()
}


function update()
{
    a1 = b1S.value()
    a2 = b2S.value()
    b2av = b2S.value()
    b1av = b1S.value()
}

function draw()
{

    num1 = -g * (2 * m1 + m2) * sin(a1)
    num2 = -m2 * g * sin(a1-2*a2)
    num3 = -2*sin(a1-a2)*m2
    num4 = a2_v*a2_v*r2+a1_v*a1_v*r1*cos(a1-a2)
    den = r1 * (2*m1+m2-m2*cos(2*a1-2*a2))
    a1_a = (num1 + num2 + num3*num4) / den

    num1 = 2 * sin(a1-a2);
    num2 = (a1_v*a1_v*r1*(m1+m2))
    num3 = g * (m1 + m2) * cos(a1)
    num4 = a2_v*a2_v*r2*m2*cos(a1-a2)
    den = r2 * (2*m1+m2-m2*cos(2*a1-2*a2))
    a2_a = (num1*(num2+num3+num4)) / den

    //frameRate(20)
    background(255, 160)
    
    stroke(0)
    strokeWeight(2)

    translate(w/2, h/4)

    x1 = r1 * sin(a1)
    y1 = r1 * cos(a1)

    x2 = x1 + r2 * sin(a2)
    y2 = y1 + r2 * cos(a2)



    stroke(100)
    // line 1
    line(0, 0, x1, y1)
    //line 2
    line(x1, y1, x2, y2)

    // ball 1 
    fill(253, 190, 90)
    ellipse(x1, y1, m1)
    // ball 2
    fill(150, 100, 200)
    ellipse(x2, y2, m2, m2)

    
    a1_v +=a1_a
    a2_v +=a2_a
    
    a1+=a1_v
    a2+=a2_v

    if (b1av != b1S.value())
       update()
    if (b2av != b2S.value())
      update()
    
}