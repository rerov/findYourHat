const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░'
const pathCharacter = '*'

class Field {
    constructor(field){
        this.field = field
        this.yer = []    
    }
    
    print(){
        for(let i = 0; i < this.field.length; i++){
            let row = this.field[i].join('')
            console.log(row)
        }
    }

    findPosition () {
        let height = this.field.length
        let width = this.field[0].length
        for(let i= 0; i< height; i++){
            for(let j=0; j < width; j++){
                if(this.field[i][j] === pathCharacter){
                    this.yer = [i,j]
                }
            }
        }    
    }

    static generateField(height, width) {
        let field = []
        const options = [hole, fieldCharacter]
        
        for(let i = 0; i < height; i++){
            const row = []
            for(let j=0; j < width; j++){
                const randomOption = options[Math.floor(Math.random()*2)]
                row[j] = randomOption
            }
            field.push(row)
        }
        let k = 0 

        while(k < 5){
            const randomHeight = Math.floor(Math.random() * height)
            const randomWidth = Math.floor(Math.random() * width)
          
            const randomH = Math.floor(Math.random() * height)
            const randomW = Math.floor(Math.random() * width)
            if (randomHeight !== randomH && randomWidth !== randomW) {

                field[randomHeight][randomWidth] = pathCharacter
                field[randomH][randomW] = hat
          
                break
            }

        }
      
        return field
    }
}


let alan = new Field(Field.generateField(3,3))
alan.findPosition()


const askPrompt = require('prompt-sync')({sigint:true})

let i = 0 

while (i < 5) {
    console.log(alan.print())
    const movement = askPrompt('What is your next move // choices: up, down, left, right : ')
    if (movement === 'down') {
        alan.yer[0] += 1
    }
    else if (movement === 'up') {
        alan.yer[0] -= 1
    }
    else if (movement === 'left') {
        alan.yer[1] -= 1
    }      
    if (movement === 'right') {
        alan.yer[1] += 1
    }

    if(alan.yer[0] < 0 || alan.yer[1] < 0 || alan.yer[0] > alan.field.length || alan.yer[1] > alan.field[0].length){
        console.log(alan.print())
        console.log('You are out of boundaries. You are eliminated!')
        break 
    }
    else if( alan.field[alan.yer[0]][alan.yer[1]] === hole){
        console.log(alan.print())
        console.log("You are inside of a hole. You are eliminated")
        break
    }
    else if(alan.field[alan.yer[0]][alan.yer[1]] === hat){
        console.log(alan.print())
        console.log('You found your hat')
        break
    }
    else {
        alan.field[alan.yer[0]][alan.yer[1]] = pathCharacter
        console.log(alan.print())
    }
}