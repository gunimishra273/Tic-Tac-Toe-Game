let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newbtn=document.querySelector("#new");
let msgcont=document.querySelector(".msg");
let msg=document.querySelector("#w");
let turn0 = true;
const win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
boxes.forEach((box) =>
{
    box.addEventListener("click",()=>
    {
        console.log("Box was clicked!");
        if(turn0)
        {
            box.innerText="O";
            turn0=false;
        }
        else
        {
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        check();
    });
});
const show=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    for(box of boxes)
    {
        box.disabled=true;
    }
    celebrateWinner();
    msgcont.classList.remove("hide");
    resetBtn.classList.add("hide");
}
const check=()=>{
    for(let pat of win)
    {
        v1=boxes[pat[0]].innerText;
        v2=boxes[pat[1]].innerText;
        v3=boxes[pat[2]].innerText;
        if(v1!="" && v2!="" && v3!="")
            {
                if(v1===v2 && v2===v3)
                {
                    console.log("Winner ",v1);
                    boxes[pat[0]].style.backgroundColor="#6ff06d";
                    boxes[pat[1]].style.backgroundColor="#6ff06d";
                    boxes[pat[2]].style.backgroundColor="#6ff06d";
                    show(v1);
                }
            }
    }
}
function celebrateWinner() {
    var duration = 2 * 1000; // 2 seconds
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

// Call celebrateWinner() when a winner is detected

const reset=()=>{
    turn0=true;
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="";
        box.style.backgroundColor="#ffffc7";
    }
    msgcont.classList.add("hide");
    resetBtn.classList.remove("hide");
}
newbtn.addEventListener("click",reset);
resetBtn.addEventListener("click",reset);
