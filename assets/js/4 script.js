
div1 = document.querySelector("#div1");
div2 = document.querySelector("#div2");
div3 = document.querySelector("#div3");
div4 = document.querySelector("#div4");



// document.addEventListener('keydown', function (event) {
//     if (event.key === 'a') {
//         /* Cambiar a color 1 */
//         div1.style.background = "red";
//     } else if (event.key === 's') {
//         /* Cambiar a color 2 */
//         div2.style.background = "green";
//     }
//     else if (event.key === 'd') {
//         /* Cambiar a color 2 */
//         div3.style.background = "blue";
//     }
// })

// early return:
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        /* Cambiar a color 1 */
        return div1.style.background = "red";
    }
    if (event.key === 's') {
        /* Cambiar a color 2 */
        return div2.style.background = "green";
    }
    if (event.key === 'd') {
        /* Cambiar a color 2 */
        return div3.style.background = "blue";
    }
})

div4.addEventListener('click', function () {
    div4.style.background = "purple";
})