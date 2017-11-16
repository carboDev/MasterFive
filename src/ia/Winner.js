//import React from "react";

function nbLeft(grid, x, y) {
  let nbBox = 0;
  for (let i = x - 1; i >= 0 && grid[y * 15 + i] === grid[x + y * 15]; i--) {
    nbBox++;
  }
  return nbBox;
}

function nbUpLeft(grid, x, y) {
  let nbBox = 0;
  for (
    let i = x - 1, j = y - 1;
    i >= 0 && j >= 0 && grid[j * 15 + i] === grid[x + y * 15];
    i--, j--
  ) {
    nbBox++;
  }
  return nbBox;
}

function nbDownLeft(grid, x, y) {
  let nbBox = 0;
  for (
    let i = x - 1, j = y - 1;
    i >= 0 && j < 15 && grid[j * 15 + i] === grid[x + y * 15];
    i--, j++
  ) {
    nbBox++;
  }
  return nbBox;
}

function nbRight(grid, x, y) {
  let nbBox = 0;
  for (let i = x + 1; i < 15 && grid[y * 15 + i] === grid[x + y * 15]; i++) {
    nbBox++;
  }
  return nbBox;
}

function nbUpRight(grid, x, y) {
  let nbBox = 0;
  for (
    let i = x + 1, j = y - 1;
    i < 15 && j >= 0 && grid[j * 15 + i] === grid[x + y * 15];
    i++, j--
  ) {
    nbBox++;
  }
  return nbBox;
}

function nbDownRight(grid, x, y) {
  let nbBox = 0;
  for (
    let i = x + 1, j = y + 1;
    i < 15 && j >= 0 && grid[j * 15 + i] === grid[x + y * 15];
    i++, j++
  ) {
    nbBox++;
  }
  return nbBox;
}

function nbUp(grid, x, y) {
  let nbBox = 0;
  for (let i = y - 1; i >= 0 && grid[i * 15 + x] === grid[x + y * 15]; i--) {
    nbBox++;
  }
  return nbBox;
}

function nbDown(grid, x, y) {
  let nbBox = 0;
  for (let i = y + 1; i < 15 && grid[i * 15 + x] === grid[x + y * 15]; i++) {
    nbBox++;
  }
  return nbBox;
}

function Winner(grid, box) {
  const y = Math.floor(box / 15);
  const x = box % 15;
  if (
    nbLeft(grid, x, y) + nbRight(grid, x, y) >= 4 ||
    nbUpLeft(grid, x, y) + nbDownRight(grid, x, y) >= 4 ||
    nbDownLeft(grid, x, y) + nbUpRight(grid, x, y) >= 4 ||
    nbUp(grid, x, y) + nbDown(grid, x, y) >= 4
  ) {
    return true;
  } else {
    return false;
  }
}

export default Winner;
