const state = { name:"", role:"", train:"", sit:"" };

function show(id) {
  document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// STEP 1
document.querySelectorAll("[data-role]").forEach(btn=>{
  btn.onclick = () => {
    state.name = document.getElementById("nameInput").value;
    state.role = btn.dataset.role;
    document.getElementById("preview1").innerHTML =
      (state.name || "Player") + " chose " + state.role;
    show("step2");
  };
});

// STEP 2
document.querySelectorAll("[data-train]").forEach(btn=>{
  btn.onclick = () => {
    state.train = btn.dataset.train;
    document.getElementById("preview2").innerHTML =
      "Training: " + state.train;
    show("step3");
  };
});

// STEP 3
document.querySelectorAll("[data-sit]").forEach(btn=>{
  btn.onclick = () => {
    state.sit = btn.dataset.sit;

    const img = document.getElementById("resultImg");
    img.src = "https://via.placeholder.com/500x250?text=" + state.train;

    const res = document.getElementById("resultText");
    res.innerHTML = `${state.name || "Player"} is a ${state.role}, trained in ${state.train}, entering ${state.sit}.`;

    img.className = state.train; // classList visual change
    show("result");
  };
});

// restart
document.getElementById("restartBtn").onclick = () => {
  state.name = state.role = state.train = state.sit = "";
  show("step1");
};
