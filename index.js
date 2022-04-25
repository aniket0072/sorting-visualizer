console.log("all set");
let arr = new Array;

var arr_size = document.querySelector("#arr_sz");
var no_of_bar = arr_size.value;
arr_size.addEventListener("input", newarr);



//console.log(delaySpeed,no_of_bar);

for (let index = 0; index < no_of_bar; index++) {
    let newnum = randomIntFromInterval(2, 400);
    arr.push(newnum);
}
let n = arr.length;
console.log(arr);
createbars(arr);


function newarr() {
   
    arr = new Array;
    const myNode = document.getElementById("addingbars");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    var arr_size = document.querySelector("#arr_sz");
    var no_of_bar = arr_size.value;
    for (let index = 0; index < no_of_bar; index++) {
        let newnum = randomIntFromInterval(2, 500);
        arr.push(newnum);
    }
    n = arr.length;
    console.log(arr);
    createbars(arr);
}

document.getElementById("newArray").addEventListener("click", newarr);

function createbars(arr) {
    var arr_size = document.querySelector("#arr_sz");
    var no_of_bar = arr_size.value;
    for (let index = 0; index < no_of_bar; index++) {
        const temp = document.createElement("div");
        //  temp.innerHTML="gdsdgds";
        if (no_of_bar > 80)
            temp.style.width = "1px";
        else if (no_of_bar > 40)
            temp.style.width = "3px";
        else if (no_of_bar > 0)
            temp.style.width = "8px";
        temp.classList.add("bar");
        temp.setAttribute("id", `bar${index}`);
        temp.style.height = `${arr[index]}px`;
        temp.style.backgroundColor = "yellow";
        document.getElementById("addingbars").appendChild(temp);
    }

}
document.getElementById("bubbleSort").addEventListener("click", bubbleSort);
async function bubbleSort(arr) {
    var i, j, temp;
    var swapped;
   // var delay = document.querySelector("#delay");
   // var delaySpeed = delay.value;
   var delaySpeed=100;
    var arr_size = document.querySelector("#arr_sz");
    var no_of_bar = arr_size.value;
    for (i = 0; i < no_of_bar; i++) {
        swapped = false;
        for (j = 0; j < no_of_bar - i - 1; j++) {
            let e1 = document.getElementById(`bar${j}`);
            let e2 = document.getElementById(`bar${j+1}`);
            const t1 = e1.clientHeight;
            const t2 = e2.clientHeight;
            if (t1 > t2) {
                e1.style.height = `${t2}px`;
                e2.style.height = `${t1}px`;
                e1.style.backgroundColor = "red";
                e2.style.backgroundColor = "red";
                swapped = true;
                await new Promise(resolve => setTimeout(() => {
                    resolve(), delaySpeed
                }));
            // sleep(20);
                //   setTimeout(function() {
                //       }, 1000);
                e1.style.backgroundColor = "yellow";
                e2.style.backgroundColor = "yellow";
            }

        }
        let placed = document.getElementById(`bar${no_of_bar-i-1}`);
        placed.style.backgroundColor = "#00FF7F";
        if (swapped == false) {
            while (no_of_bar - i - 1 >= 0) {
                let placed = document.getElementById(`bar${no_of_bar-i-1}`);
                placed.style.backgroundColor = "#00FF7F";
                i++;
            }
            break;
        }
    }

}

document.getElementById("selectionSort").addEventListener("click", selectionSort);
async function selectionSort(arr) {
    var i, j, min_idx;
    var arr_size = document.querySelector("#arr_sz");
var no_of_bar = arr_size.value;
// var delay = document.querySelector("#delay");
// var delaySpeed = delay.value;
var delaySpeed=100;
    // One by one move boundary of unsorted subarray
    for (i = 0; i < no_of_bar; i++) {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < no_of_bar; j++) {
            let e1 = document.getElementById(`bar${min_idx}`);
            let e2 = document.getElementById(`bar${j}`);
            const t1 = e1.clientHeight;
            const t2 = e2.clientHeight;
            if (t1 > t2) {
                min_idx = j;
                e1.style.backgroundColor = "red";
                e2.style.backgroundColor = "red";
                await new Promise(resolve => setTimeout(() => {
                    resolve(), 20
                }));
                e1.style.backgroundColor = "yellow";
                e2.style.backgroundColor = "yellow";
            }
        }
        // Swap the found minimum element with the first element 
        let e1 = document.getElementById(`bar${min_idx}`);
        let e2 = document.getElementById(`bar${i}`);
        const t1 = e1.clientHeight;
        const t2 = e2.clientHeight;
        e1.style.height = `${t2}px`;
        e2.style.height = `${t1}px`;
        e1.style.backgroundColor = "red";
        e2.style.backgroundColor = "red";
        await new Promise(resolve => setTimeout(() => {
            resolve(), delaySpeed
        }));
        e1.style.backgroundColor = "yellow";
        e2.style.backgroundColor = "#00FF7F";
    }

}
document.getElementById("insertionSort").addEventListener("click", insertionSort);
async function insertionSort(arr) {
    let i, key, j;
    // var delay = document.querySelector("#delay");
    // var delaySpeed = delay.value;
    var delaySpeed=100;
    var arr_size = document.querySelector("#arr_sz");
var no_of_bar = arr_size.value;
    for (i = 1; i < no_of_bar; i++) {
        let e1 = document.getElementById(`bar${i}`);
        e1.style.backgroundColor = "red";
        const key = e1.clientHeight;

        j = i - 1;
        while (j >= 0 && document.getElementById(`bar${j}`).clientHeight > key) {
            let e2 = document.getElementById(`bar${j}`);
            let e3 = document.getElementById(`bar${j+1}`);
            const t1 = e2.clientHeight;
            e3.style.height = `${t1}px`;
            e2.style.backgroundColor = "red";
            e3.style.backgroundColor = "red";
            await new Promise(resolve => setTimeout(() => {
                resolve(), delaySpeed
            }));
            e2.style.backgroundColor = "yellow";
            e3.style.backgroundColor = "yellow";
            j = j - 1;
        }
        e1.style.backgroundColor = "yellow";
        let e3 = document.getElementById(`bar${j+1}`);
        e3.style.height = `${key}px`;

    }
    for (i = 0; i < no_of_bar; i++) {
        let e1 = document.getElementById(`bar${i}`);
        e1.style.backgroundColor = "#00FF7F";
    }
}

document.getElementById("quickSort").addEventListener("click", pseudoquickSort);
async function partition(arr, low, high) {
  
    let pivot = document.getElementById(`bar${high}`); 
    const pivotHeight=pivot.clientHeight;
    // var delay = document.querySelector("#delay");
    // var delaySpeed = delay.value;
    var delaySpeed=100;
    let i = (low - 1);
 
    for (let j = low; j <= high - 1; j++) {
        let temp = document.getElementById(`bar${j}`); 
        const tempHeight=temp.clientHeight;
        if (tempHeight < pivotHeight) {
            console.log("dg");
            i++;
            let e1 = document.getElementById(`bar${i}`);
            let e2 = document.getElementById(`bar${j}`);
            const t1 = e1.clientHeight;
            const t2 = e2.clientHeight;
            e2.style.height = `${t1}px`;
             e1.style.height = `${t2}px`;
            e1.style.backgroundColor = "red";
            e2.style.backgroundColor = "red";
           await new Promise(resolve => setTimeout(() => {
                resolve(), delaySpeed
            }));
            e1.style.backgroundColor = "yellow";
            e2.style.backgroundColor = "yellow";
        }
    }
    //swap(arr, i + 1, high);
    let e1 = document.getElementById(`bar${i+1}`);
    let e2 = document.getElementById(`bar${high}`);
    const t1 = e1.clientHeight;
    const t2 = e2.clientHeight;
    e2.style.height = `${t1}px`;
     e1.style.height = `${t2}px`;
    e1.style.backgroundColor = "red";
    e2.style.backgroundColor = "red";
    await new Promise(resolve => setTimeout(() => {
        resolve(), delaySpeed
    }));
    e1.style.backgroundColor = "#00FF7F";
    e2.style.backgroundColor = "yellow";
    return (i + 1);
}

 async function pseudoquickSort(){
    var arr_size = document.querySelector("#arr_sz");
var no_of_bar = arr_size.value;
console.log("sfsd");
await quickSort(arr,0,no_of_bar-1);

var i=0;
for (i = 0; i < no_of_bar; i++) {
    console.log(i);
    let e1 = document.getElementById(`bar${i}`);
    e1.style.backgroundColor = "#00FF7F";
}
}
async function quickSort(arr , low , high)
{
    if (low < high)
    {
        var pi = await partition(arr, low, high);
            console.log(pi);     
            await quickSort(arr, low, pi - 1);      
       await quickSort(arr, pi + 1, high);
    }
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}