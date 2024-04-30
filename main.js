import { Question } from "./scripts.js"


let ans_arr = document.querySelectorAll(".ans")



let qws = new Question()
qws.display()
let flug = true

function move_cube(){
    anime({
        targets:".cube",
        rotateY:0,
        rotateX:0,
        duration: 500,
        easing: 'linear'
    })
   
}


for (let ans of ans_arr){
   
    ans.addEventListener('click', function(){
        if (flug){
            flug = false
            if (+this.innerHTML == qws.correct){
                qws.correct_count += 1
                this.style.background = '#00ff00'
                
            }   
            else{
                    this.style.background = '#ff0000'
                }   
            
            }
            anime({
                targets: ans,
                background:'#070736',
                delay: 1000,
                duration: 50}
                ).finished.then(function(){
                    move_cube()
                    qws.display()
                    flug = true
            
                                })
            })
    }
    

function create_result(){
    let h2 = document.createElement('h2')
    h2.className = 'res'
    h2.innerHTML = `Всього питань -  ${qws.count}`
    h2.appendChild = div_finish.appendChild(h2)

    let h3 = document.createElement('h2')
    h3.className = 'res'
    h3.innerHTML = `Правильних -  ${qws.correct_count}`
    h3.appendChild = div_finish.appendChild(h3)

    let h4 = document.createElement('h2')
    h4.className = 'res'
    h4.innerHTML = `Результат -  ${qws.correct_count/qws.count*100}%`
    h4.appendChild = div_finish.appendChild(h4)
}


    // Логіка перемикання вікон
    let div_start = document.querySelector('.start')
    let div_finish = document.querySelector('.finish')
    let div_test = document.querySelector('.card_qw')
    let btn_start = document.querySelector('.btn_start')
    btn_start.addEventListener('click', ()=>{
        div_start.style.display = 'none'
        div_finish.style.display = 'none'
        div_test.style.display = 'flex'
    
        setTimeout(() => {
            div_test.style.display = 'none'
            create_result()
            div_finish.style.display = 'flex'
        }, 10000);
    // 
    })


document.querySelector(".restart").addEventListener("click",()=>{
    div_finish.style.display = 'none'
    div_start.style.display = 'flex'
})