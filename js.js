let productsCountEl = document.getElementById("products-count");

let addToCartButtons = document.querySelectorAll(".add_to_cart");

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


let moreDetailsButton = document.querySelectorAll(".more_details");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".button_close");


moreDetailsButton.forEach(function(btn) {
	btn.addEventListener("click", openModal)
})


/////////////////////////////

function closeModal () {
	modal.classList.add("hide");
	modal.classList.remove("show");
}

function openModal () {
	modal.classList.add("show");
	modal.classList.remove("hide");
}

function openModalByScroll () {
	if (window.pageYOffset >= document.documentElement.scrollHeight/2 ) {
		openModal()
		window.removeEventListener("scroll",openModalByScroll)
	}
}

window.addEventListener("scroll", openModalByScroll)

console.log(window.pageYOffset)
console.log(document.documentElement.scrollHeight)

/////////////////////////////


closeBtn.setAttribute("style", "cursor:pointer")
closeBtn.addEventListener("click", closeModal)

modal.addEventListener("click", function(e) {
	if (e.target === modal) {
		closeModal()
	}
})


///////////////////////Product count

let decrementBtn = document.querySelectorAll(".lessProducts");
let incrementBtn = document.querySelectorAll(".moreProducts");
let productQuantity = document.querySelectorAll(".productCountBlock input");



function toggleButtonState(minusBtn) {
	console.log()
	let closestInput = minusBtn.nextElementSibling;
	if (closestInput.value <= 1) {
	minusBtn.classList.add("disabled");
	} else {
		minusBtn.classList.remove("disabled");
	}
}

function toggleButtonStateMax(plusBtn) {
	let closestInput = plusBtn.previousElementSibling;
	if (closestInput.value >= 5) {
	plusBtn.classList.add("disabled");
	} else {
	plusBtn.classList.remove("disabled");
	}
	}

for (let i = 0; i < decrementBtn.length; i++) {
if (productQuantity[i].value <= 1) {
	toggleButtonState(decrementBtn[i]);
}}

for (let i = 0; i < decrementBtn.length; i++){
decrementBtn[i].addEventListener("click", minusItem);
}

for (let i = 0; i < incrementBtn.length; i++) {
incrementBtn[i].addEventListener("click", addItem);
}

function minusItem() {
	let closestInput = this.nextElementSibling;
	let nextPlus = closestInput.nextElementSibling;
	closestInput.value = +closestInput.value - 1;
	toggleButtonState(this);
	toggleButtonStateMax(nextPlus);
}

function addItem() {
	let closestInput = this.previousElementSibling;
	let previousMinus = closestInput.previousElementSibling;
	closestInput.value = +closestInput.value + 1;
	toggleButtonState(previousMinus);
	toggleButtonStateMax(this);
}


$(".slider-block").slick() 