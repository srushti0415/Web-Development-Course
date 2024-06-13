var arr = [2, 3, 5, 6, 7, 8, 11, 10, 43];
for (var i = 0; arr.length > i; i++) {
  console.log(arr[i]);
  if (arr[i] % 2 === 0) {
    console.log(arr[i] + "  is Even number");
  } else {
    console.log(arr[i] + " is odd number");
  }
}
