// const handler = document.getElementById("heading")
// handler.addEventListener('click', function(e) {
//     console.log("You have clicked the heading")
//     // console.log(e.target);
//     // console.log(e.target.className)
//     // console.log(e.target.classList);
//     let variable;
//     // variable = e.target;
//     // varibale = e.target.className;
//     // variable = Array.from(e.target.classList)
//     // console.log(variable)

//     variable = e.target.id;
//     variable = e.offsetX;
//     variable = e.offsetY;
//     variable = e.clientX
//     variable = e.clientY;
//     console.log(variable);
//     console.log()

// })

const heading = document.querySelector('#heading')
heading.addEventListener('mousemove', (e) => {
    document.body.style.backgroundColor = `rgba(${e.offsetX}, ${e.offsetY}, ${e.offsetX + e.offsetY})`;
});
