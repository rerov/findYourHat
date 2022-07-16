const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░'
const pathCharacter = '*'

class Field {
    constructor(field, position){
        this.field = field
        this.position = position 
    }
    
    get position(){
        return this.position
    }
    
    set position(position){
        this.position = position
    }

    print(){
        for(let i = 0; i < this.field.length; i++){
            let row = this.field[i].join('')
            console.log(row)
        }
    }

    static generateField() {

    }
}

let alan = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ], [0,0])

alan.print()