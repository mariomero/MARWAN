"use strict";
let close = document.querySelector(".nav-close");
let open = document.querySelector(".nav-icon");

close.addEventListener("click", function () {
    close.classList.add("close-all");
    open.classList.remove("open-all");
})

open.addEventListener("click", function () {
    open.classList.add("open-all");
    close.classList.remove("close-all");
})