console.log('connected')

// const btn = document.getElementById('btn')
const text =  document.querySelector('#text')
// let state = 'right' 

// btn.addEventListener('click', () => {
//     if(state == 'right'){
//         img.style.animation = 'right-left 1s forwards'
//         img.style.animationPlayState = 'running'
//         state = 'left'
//     }else{
//         img.style.animation = 'left-right 1s forwards'
//         img.style.animationPlayState = 'running'
//         state = 'right'
//     }
// })

// function handleClick(){
//     text.innerHTML = ''
//     text.innerHTML = 'Bye'
// }



let handleClick = (a,b) =>  a + b // one liner

let addNumbers = (a,b) => {
    return a + b
}

console.log(handleClick(5,6))
console.log(addNumbers(5,6))