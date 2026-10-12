// Change this number when you complete another day.
const completedDays = 1;
const latestUpdate = "Day 1: Getting started with Python and setting up my workspace.";

const percentage = Math.round((completedDays / 100) * 100);
document.getElementById("progress-label").textContent = `Day ${completedDays} of 100`;
document.getElementById("progress-percent").textContent = `${percentage}%`;
document.getElementById("progress-fill").style.width = `${percentage}%`;
document.getElementById("progress-note").textContent = latestUpdate;
