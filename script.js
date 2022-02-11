const body = document.querySelector("body");
const party = document.querySelectorAll(".party");
const votes = document.querySelectorAll(".vote");
const btn = document.getElementById("btn");

body.addEventListener("keypress", (event) => {
  votes.forEach((vote) => {
        let voteCounter = parseInt(vote.textContent);
        voteCounter++;
        if (
          (event.key == 1 && vote.classList.contains("vote1")) ||
          (event.key == 2 && vote.classList.contains("vote2")) ||
          (event.key == 3 && vote.classList.contains("vote3")) ||
          (event.key == 4 && vote.classList.contains("vote4"))
        ) {
            let age = Number(prompt("enter age :"))
            if(age >= 18 && age <= 80){
                vote.textContent = voteCounter;
            }else if(age < 18){
                alert("you are underage")
            }else if(age > 80){
                alert("you are overage")
            }else {
              alert("invalid age")
            }
        }
  });
});


