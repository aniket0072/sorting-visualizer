console.log("all set");
let arr=new Array;
for (let index = 0; index < 100; index++) {
    let newnum=randomIntFromInterval(2,400);
    arr.push(newnum);
}

console.log(arr);
createbars(arr);
function newarr() {
   arr= new Array;
   const myNode = document.getElementById("addingbars");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
    for (let index = 0; index < 100; index++) {
        let newnum=randomIntFromInterval(2,500);
        arr.push(newnum);
    }
console.log(arr);
createbars(arr);
}
document.getElementById("newArray").addEventListener("click", newarr);

function createbars(arr) {

    for (let index = 0; index < 100; index++) {
        const temp = document.createElement("div");
      //  temp.innerHTML="gdsdgds";
        temp.style.width="3px";
        temp.classList.add("bar");
        temp.setAttribute("id",`bar${index}`);
        temp.style.height=`${arr[index]}px`;
        temp.style.backgroundColor="yellow";
        document.getElementById("addingbars").appendChild(temp);
    }
    
}
document.getElementById("bubbleSort").addEventListener("click",bubbleSort);
async function bubbleSort(arr)
    {
        var i, j, temp;
        var swapped;
        for (i = 0; i < 100; i++)
        {
            swapped = false;
            for (j = 0; j < 100 - i - 1; j++)
            {
            let e1=document.getElementById(`bar${j}`);
            let e2=document.getElementById(`bar${j+1}`);
            const t1=e1.clientHeight;
            const t2=e2.clientHeight;
                if (t1>t2)
                {
                    e1.style.height=`${t2}px`;
                    e2.style.height=`${t1}px`;
                    e1.style.backgroundColor="red";             
                    e2.style.backgroundColor="red";             
                    swapped = true;
                    await new Promise(resolve => setTimeout(() => {resolve(), 2}));
                
                //   setTimeout(function() {
                //       }, 1000);
                    e1.style.backgroundColor="yellow";             
                    e2.style.backgroundColor="yellow";  
                }

            }
            let placed=document.getElementById(`bar${100-i-1}`);
            placed.style.backgroundColor="#00FF7F"; 
           if (swapped == false){
                while (100-i-1>=0) {
                    let placed=document.getElementById(`bar${100-i-1}`);
                    placed.style.backgroundColor="#00FF7F"; 
                    i++;
                }
               break;    
           }
        }

    }


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

