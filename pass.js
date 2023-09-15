let input = document.getElementById("text");
let gen = document.getElementById("gen");
let message = document.querySelector(".message");
let copy = document.querySelector(".fa-copy");
let arr =
  'azertyuiop^$*ùmlkjhgfdsq<wxcvbn,;:!&é"(-è_çà)=`§/.?NBVVCXW>QSDFGHJKLM%µ£¨POIUYTREZA1234567890°+}]@^/*|[{#';
gen.addEventListener("click", function genrate() {
  var pass = "";

  for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * arr.length);
    pass = pass + arr[random];
  }
  input.value = pass;
  copy.addEventListener("click", function copied() {
    message.textContent = `'${pass}' copied!`;
    message.classList.add("copied");
    input.select();
    input.setSelectionRange(0, 12);
    navigator.clipboard.writeText(input.value);
    setTimeout(() => {
      message.classList.remove("copied");
      input.value = "";
    }, 2000);
  });
});
