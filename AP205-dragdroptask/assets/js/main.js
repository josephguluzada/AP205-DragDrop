let boxes = document.querySelectorAll(".box");
let products = document.querySelectorAll(".product");
let productsBox = document.querySelector(".products");


let currentProduct;

boxes.forEach(b => {
    b.addEventListener("dragover", function (e) {
        e.preventDefault();
    })
})

productsBox.addEventListener("dragover", function (e) {
    e.preventDefault();
})

products.forEach(p => {
    p.addEventListener("dragstart", function () {
        currentProduct = this;
    })
})

boxes.forEach(x => {
    x.addEventListener("drop", function (e) {
        if (x.getAttribute("data-target") == currentProduct.getAttribute("data-id")) {
            x.appendChild(currentProduct);
        } else {
            alert("Duzgun yerlesdir");
        }
        currentProduct = "";
    })
})

productsBox.addEventListener("drop", function (e) {
    this.appendChild(currentProduct);
})