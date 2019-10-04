import {Animal} from './Animal'

export class Parrot{
    constructor(){
        super("Parrot")
    }
    fly(){
        console.log(`${this.name}  flies`)
    }
}

const parrot = new Parrot()
parrot.fly()