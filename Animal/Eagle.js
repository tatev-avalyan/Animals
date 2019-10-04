import {Animal} from './Animal'

export class Eagle{
    constructor(){
        super("Eagle")
    }
    fly(){
        console.log(`${this.name}   flies`)
    }
}
const eagle = new Eagle()
eagle.fly()