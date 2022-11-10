const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576

c.fillStyle='white'
c.fillRect(0,0,canvas.width, canvas.height)

const image = new Image()
image.src='./AssetsJeu/SmallTown.png'

const playerImage = new Image()
playerImage.src='./AssetsJeu/Images/playerDown.png'

class Sprite{
    constructor({position,velocity,image}){
        this.position = position
        this.image=image
        this.velocity = velocity
    }

    draw(){
        c.drawImage(this.image, this.position.x, this.position.y    )
    }
}

const background = new Sprite ({
    position : {
        x:-785,
        y:-650,
    },
    image : image    
})

const keys = {
    z:{
        pressed : false
    },

    q:{
        pressed : false
    },

    s:{
        pressed : false
    },

    d:{
        pressed : false
    }
}

function animate(){
    window.requestAnimationFrame(animate)
    background.draw()
    c.drawImage(
        playerImage,
        0,
        0,
        playerImage.width / 4,
        playerImage.height,
        (canvas.width / 2) - ((playerImage.width / 2) / 1,75),
        (canvas.height / 2) - (playerImage.height / 1,75),
        playerImage.width / 4,
        playerImage.height
    )

    if(keys.z.pressed) {
        background.position.y = background.position.y-3
    }
}

animate()

window.addEventListener('keydown', (e) => {
    //console.log(e.key)

    switch(e.key){
        case 'z':
        keys.z.pressed = true
        break

        case 's':
        keys.s.pressed = true
        break

        case 'q':
        keys.q.pressed = true
        break

        case 'd':
        keys.d.pressed = true
        break
    }
})

window.addEventListener('keyup', (e) => {
    //console.log(e.key)

    switch(e.key){
        case 'z':
        keys.z.pressed = false
        break

        case 's':
        keys.s.pressed = false
        break

        case 'q':
        keys.q.pressed = false
        break

        case 'd':
        keys.d.pressed = false
        break
    }
})

