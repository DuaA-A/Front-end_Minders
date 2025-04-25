// setTimeout(()=> {
//     console.log("السلام عليكم");
//     setTimeout( ()=> {
//         console.log("Ciao");
//         setTimeout(() => {
//             console.log("Hi");
//             setTimeout( () =>{
//             console.log("Bonjour");
//             setTimeout(()=> {
//                 console.log("안녕");
//             }, 1000);
//             }, 1000);
//         }, 1000);
//         }, 1000);
//     }, 1000);

const s1= "السلام عليكم";
const s2= "Ciao";
const s3= "Hi";
const s4= "Bonjour";
const s5= "안녕";

// function solve(){
//     new Promise(function(resolve){
//         resolve;
//     }).then((x)=>{
//         setTimeout(()=> {console.log(`${x}`);}, 1000);
//     })
// }

// for(let i=0;i<5;i++)
//     solve(`s${i}`);




function g(msg){
    return Promise((resolve) =>{
        setTimeout(()=> {
            console.log(msg);
            resolve();
        }, 1000);
    })
} 

async function name() {
    await g(s1);
    await g(s2);
    await g(s3);
    await g(s4);

}













