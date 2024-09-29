let input = document.getElementById('add');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
                string = eval(string);
                input.value = string;
        } else if (e.target.innerHTML == 'Ac') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});


















// let input = document.getElementById('add'); 
// let buttons = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(buttons => {
//     button.addEventListener('click',(e) =>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }
//         else if(e.target.innerHTML =='ac'){
//             string = "";
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'del'){
//             string = string.substring(0, string.length-1);
//             input.value = string;
//         }
//         else{
//             string += e.string.innerHTML;
//             input.value = string;
//         }
//     })
// })