class Hero{
    constructor(name, age, typePlayer){
        this.name = name
        this.age = age
        this.typePlayer = typePlayer//guerreiro, mago, monge e ninja

    }
    atack(){
        let typeOfAtack = ''
        
        if (this.typePlayer === 'Mago'){
            typeOfAtack = 'magia'
        }else if (this.typePlayer === 'Guerreiro'){
            typeOfAtack = 'espada'
        }else if (this.typePlayer === 'Monge'){
            typeOfAtack = 'artes marciais'
        }else if (this.typePlayer === 'Ninja'){
            typeOfAtack = 'shuriken'
        }   
        
        console.log(`O Herói ${this.name} do tipo ${this.typePlayer} atacou usando ${typeOfAtack}.`)
    }



}
let player1 = new Hero('Dani', 22, 'Mago')
player1.atack()
let player2 = new Hero('Arthur', 57, 'Monge')
player2.atack()
let player3 = new Hero('Ben', 31, 'Guerreiro')
player3.atack()
let player4 = new Hero('Van', 15, 'Ninja')
player4.atack()