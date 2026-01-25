let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

function hOne() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function hTwo() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function hThree() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function gOne() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function gTwo() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function gThree() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

function reset() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}