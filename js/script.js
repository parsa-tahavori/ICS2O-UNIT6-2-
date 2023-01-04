// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT6-2-/sw.js", {
    scope: "/ICS2O-UNIT6-2-/",
  })
}

/**
 * this function cookies
 */
function myCookieClicked() {
  localStorage.clicks++
  document.getElementById("points").innerHTML = localStorage.clicks
}

function updateCookieCount() {
  if (localStorage.clicks) {
    localStorage.clicks = Number(localStorage.clicks)
  } else {
    localStorage.clicks = 0
  }
  document.getElementById("points").innerHTML = localStorage.clicks
}
