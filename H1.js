let btn = document.querySelector('button')
let h1 = document.querySelector('h1')
let body = document.querySelector('body')

let i = 0

btn.addEventListener('click', ()=>{
    if(i % 2 === 0){
        body.style.backgroundColor = 'black'
        h1.style.color = 'white'
        i++
        localStorage.setItem('body', 'black')
        localStorage.setItem('h1', 'white')

    }else{
        body.style.backgroundColor = 'white'
        h1.style.color = 'black'
        i = 0
        localStorage.setItem('body', 'white')
        localStorage.setItem('h1', 'black')
    }
})

body.style.backgroundColor = localStorage.getItem('body', '')
h1.style.color = localStorage.getItem('h1', '')

