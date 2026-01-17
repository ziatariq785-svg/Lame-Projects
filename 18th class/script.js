console.log("Hello, World!");
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
];
console.log('---------------------------------------------------------------------------');
window.localStorage.setItem("Name", "Andrew Tate");
window.localStorage.setItem("Age", 25);
window.localStorage.setItem("Names", "John Wick");
window.localStorage.setItem("isMale", true);
window.localStorage.setItem("Products", JSON.stringify(products));
console.log('---------------------------------------------------------------------------');
console.log(localStorage.getItem("Name"));
console.log(localStorage.getItem("Names"));
console.log('---------------------------------------------------------------------------');
const age = localStorage.getItem("Age");
const isMale = localStorage.getItem("isMale");
console.log(age, typeof age, Number(age));
console.log('---------------------------------------------------------------------------');
console.log(isMale, typeof isMale, Boolean(isMale));
console.log(isMale, typeof isMale, !!isMale);
console.log(isMale, typeof isMale, !!!isMale);
console.log('---------------------------------------------------------------------------');
const storedProducts = localStorage.getItem("Products");
console.log(storedProducts, typeof storedProducts);
console.log('---------------------------------------------------------------------------');
const parsedProducts = JSON.parse(storedProducts);
console.log(parsedProducts, typeof parsedProducts);
console.log('---------------------------------------------------------------------------');
const stringifiedProducts = JSON.stringify(parsedProducts);
console.log(stringifiedProducts, typeof stringifiedProducts);
console.log('---------------------------------------------------------------------------');
function deleteagefromLocalStorage() {
  localStorage.removeItem("Age");
}
function deleteNamefromLocalStorage() {
  localStorage.removeItem("Name");
}
function deleteValuefromLocalStorage(key) {
  localStorage.removeItem(key);
}
console.log('---------------------------------------------------------------------------');
window.document.cookie = "username=AndrewTate; expires=Fri, 31 Dec 2026 23:59:59 GMT";
window.document.cookie = "age=25; expires=Fri, 31 Dec 2026 23:59:59 GMT";
console.log('---------------------------------------------------------------------------');
console.log(document.cookie);
console.log('---------------------------------------------------------------------------');
function setCookie(cookiename, cvalue, exdays) {
  const date = new Date();
  date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = cookiename + "=" + cvalue + ";" + expires + ";path=/";
}