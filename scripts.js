export function randint(min, max){
    let n = Math.random()
    n = n*(max-min) + min 
    n = Math.floor(n)
    return n
}

export function shuffle(arr){
    for (let i = 0; i < arr.length; i++){
        let j = randint(0,arr.length)
        let a = arr[i]
        arr[i] = arr[j]
        arr[j] = a
    }
}

function choose(arr){
    let i = randint(0, arr.length)
    return arr[i]
}




let div_qw = document.querySelector(".qw")
let ans_arr = document.querySelectorAll(".ans")

export class Question {
    constructor(){
        this.qw = NaN
        this.correct = NaN
        this.ans = []
        this.symbol = ['+', '-', '*', '/']
        this.count = 0
        this.correct_count = 0
    }
    display(){
        this.newqw()
        this.count += 1
        div_qw.innerHTML = this.qw
        shuffle(this.ans)
        for (let i = 0; i < ans_arr.length; i++){
            ans_arr[i].innerHTML = this.ans[i]
        }
    }
    newqw(){
        let symb = choose(this.symbol)
        let n1 = randint(0,100)
        let n2 = randint(0,100)
        if (symb == '+'){
            this.correct = n1+n2
        }
        if (symb == '-'){
            this.correct = n1-n2
        }
        if (symb == '*'){
            this.correct = n1*n2
        }
        if (symb == '/'){
            n2 = randint(1,100)
            while (n1%n2 != 0){
                n2 = randint(1,100)
            }
            this.correct = n1/n2
        }
        this.qw = `${n1} ${symb} ${n2}`
        this.ans = [this.correct]
        for (let i = 0; i < 4; i++){
            let n = randint(this.correct-15, this.correct+15)
            while(n == this.correct || this.ans.includes(n)){
                n = randint(this.correct-15, this.correct+15)
            }
            this.ans.push(n)
        }
    }
}

