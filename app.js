//change background color using JavaScript DOM

// steps

// 1. create onload handler
window.onload = function() {
    main()
}

//2. random rgb color generator
function randomColor(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    
    return `rgb(${r},${g},${b})`
}

// 3. create main function
function main() {
    const root = document.getElementsByClassName('root')[0]
    const btn = document.getElementsByClassName('btn')[0]

    btn.addEventListener('click', function(){
        const bgColor = randomColor()
        root.style.backgroundColor = bgColor // change Background Color
        btn.style.color = bgColor // Change Button Text color 
         //h1.Style.color = bgColor // change h1 text color

    })
    // const h1 = document.getElementsByTagName('h1')[0] // 

}