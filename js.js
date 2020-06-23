let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

let addToCartButtons = document.querySelectorAll(".add_to_cart");
console.log(addToCartButtons);

for(let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click", function(){
		let prevProductsCount = +productsCountEl.textContent;
		productsCountEl.textContent = prevProductsCount + 1;
		console.log(prevProductsCount)
	})
}


let likeButtons = document.querySelectorAll(".like_button");


for(let i = 0; i < likeButtons.length;i++) {
	likeButtons[i].addEventListener("click", function() {
	likeButtons[i].classList.toggle("favorite");
	likeButtons[i].classList.toggle("favourite_white");
})
}