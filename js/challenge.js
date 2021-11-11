let counter = setInterval(timer, 1000);

let number = Number(document.getElementById("counter").innerText);
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
let pause = document.getElementById("pause");
const form = document.getElementById("comment-form")
const comment = document.getElementById("list")

minus.addEventListener("click", minusOne)
plus.addEventListener("click", plusOne)
heart.addEventListener("click", liker)
pause.addEventListener("click", pauser)
form.addEventListener("submit", e => commenter(e))


function timer() {
    number = number + 1
    document.getElementById("counter").innerText = number + 1
}

function minusOne() {
    number = number - 1
    document.getElementById("counter").innerText = number + 1
}

function plusOne() {
    number = number + 1
    document.getElementById("counter").innerText = number + 1
}

function liker() {
    let ul = document.querySelector("ul");
    let li = document.createElement("li")
    li.innerHTML = `You liked number ${number+1}.`
    ul.appendChild(li)
}

function pauser() {
    clearInterval(counter)
    pause.id="restart"
    pause.innerText ="restart"

    const resume = document.getElementById("restart");
    resume.addEventListener("click", restarter)
}

function restarter() {
    number = 0
    setInterval(timer, 1000)
    restart.id="pause";
    pause.innerText ="pause"

    pause = document.getElementById("pause");
    pause.addEventListener("click", pauser)
}

function commenter(e) {
    
    e.preventDefault();
    const comment = e.target[0].value;
    console.log(comment)

    para = document.createElement("p")
    para.innerText = comment

    list.appendChild(para)

    e.target.reset()
} 