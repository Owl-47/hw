let inp = document.querySelector('input')
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let h1 = document.querySelector('h1')


// let obj = {
//     name : 'Asan',
//     age : 18,

// }

// let num1 = console.log('jy' ,num)

// btn.addEventListener('click',() =>{
//     localStorage.setItem('flex', JSON.stringify(obj))
//     console.log( num )

// })



// let object = JSON.parse(localStorage.getItem('flex', obj))
// h1.innerHTML = object
// h1.innerHTML = inp.value


// let num = 15

// let obj = {
//     name: 'Hello',
//     age: 20,
//     married: false
// }


//     localStorage.setItem('flex', JSON.stringify(obj))

//     h1.innerHTML = obj.name


btn1.addEventListener('click',()=>{
    localStorage.setItem('input', inp.value)
    inp.value = ''
})

btn2.addEventListener('click',()=>{
    h1.innerHTML =   localStorage.getItem('input', inp.value)
    
})

btn3.addEventListener('click',()=>{
    localStorage.removeItem('input', inp.value)
    h1.innerHTML = ''

})