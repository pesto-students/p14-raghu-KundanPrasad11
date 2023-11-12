export const add = (a, b) => {
  if (typeof a == "number" && typeof b == "number") {
    return a + b;
  } else {
    console.warn("Please provide number")
  }
}

export const subtract = (a, b) => {
  if (typeof a == "number" && typeof b == "number") {
    return a - b;
  } else {
    console.warn("Please provide number")
  }
}
