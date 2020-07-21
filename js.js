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


///////////////////////Product count______my code

// let decrementBtn = document.querySelectorAll(".lessProducts");
// let incrementBtn = document.querySelectorAll(".moreProducts");
// let productQuantity = document.querySelectorAll(".productCountBlock input");



// function toggleButtonState(minusBtn) {
// 	console.log()
// 	let closestInput = minusBtn.nextElementSibling;
// 	if (closestInput.value <= 1) {
// 	minusBtn.classList.add("disabled");
// 	} else {
// 		minusBtn.classList.remove("disabled");
// 	}
// }

// function toggleButtonStateMax(plusBtn) {
// 	let closestInput = plusBtn.previousElementSibling;
// 	if (closestInput.value >= 5) {
// 	plusBtn.classList.add("disabled");
// 	} else {
// 	plusBtn.classList.remove("disabled");
// 	}
// 	}

// for (let i = 0; i < decrementBtn.length; i++) {
// if (productQuantity[i].value <= 1) {
// 	toggleButtonState(decrementBtn[i]);
// }}

// for (let i = 0; i < decrementBtn.length; i++){
// decrementBtn[i].addEventListener("click", minusItem);
// }

// for (let i = 0; i < incrementBtn.length; i++) {
// incrementBtn[i].addEventListener("click", addItem);
// }

// function minusItem() {
// 	let closestInput = this.nextElementSibling;
// 	let nextPlus = closestInput.nextElementSibling;
// 	closestInput.value = +closestInput.value - 1;
// 	toggleButtonState(this);
// 	toggleButtonStateMax(nextPlus);
// }

// function addItem() {
// 	let closestInput = this.previousElementSibling;
// 	let previousMinus = closestInput.previousElementSibling;
// 	closestInput.value = +closestInput.value + 1;
// 	toggleButtonState(previousMinus);
// 	toggleButtonStateMax(this);
// }

/////////////my code end



let decrementBtn = document.querySelectorAll(".lessProducts");
let incrementBtn = document.querySelectorAll(".moreProducts");
let productQuantity = document.querySelectorAll(".productCountBlock input");




function Counter(incrementButton, decrementButton, inputField, maxCount = 5, minCount = 1) {
	
	this.domRefs = {
		incrementButton,
		decrementButton,
		inputField,
	}

	console.log(this);

	this.toggleButtonState = function() {
        let count = this.domRefs.inputField.value;

    if (count >= maxCount) {
		this.domRefs.incrementButton.classList.add("disabled");
		} else {
		this.domRefs.incrementButton.classList.remove("disabled");
	}

    if (count <= minCount) {
		this.domRefs.decrementButton.classList.add("disabled");
		} else {
		this.domRefs.decrementButton.classList.remove("disabled");
	}
        // this.domRefs.incrementButton.disabled = count >= maxCount; only for buttons
        // this.domRefs.decrementButton.disabled = count <= minCount;
    }

    this.toggleButtonState()
    

    this.increment = function() {
    let currentCount = +this.domRefs.inputField.value; 
    let nextCount = currentCount + 1;
    this.domRefs.inputField.value = nextCount;
    this.toggleButtonState();
    }

    this.decrement = function() {
	let currentCount = +this.domRefs.inputField.value; 
    let nextCount = currentCount - 1;
    this.domRefs.inputField.value = nextCount;
    this.toggleButtonState();
    }

    this.domRefs.incrementButton.addEventListener("click", this.increment.bind(this));
    this.domRefs.decrementButton.addEventListener("click", this.decrement.bind(this));

}


for (let i = 0; i < productQuantity.length; i++) {
	 new Counter (incrementBtn[i], decrementBtn[i], productQuantity[i]);
}

// const counter1 = new Counter(incrementBtn[0], decrementBtn[0], productQuantity[0]);
// const counter2 = new Counter(incrementBtn[1], decrementBtn[1], productQuantity[1]);




// function toggleButtonState(count, incrementBtn, decrementBtn) {
// 	decrementBtn.disabled = count <= minCount;
// 	incrementBtn.disabled = count >= maxCount;
// }


// for (let i = 0; i < incrementBtn.length; i++) {
// 	incrementBtn[i].addEventListener("click", function () {
//     let currentCount = +productQuantity[i].value; 
//     let nextCount = currentCount + 1;
//     productQuantity[i].value = nextCount;
//     toggleButtonState(nextCount, incrementBtn[i], decrementBtn[i]);
// })	
// }

// for (let i = 0; i < decrementBtn.length; i++) {
// 	decrementBtn[i].addEventListener("click", function () {
//     let currentCount = +productQuantity[i].value; 
//     let nextCount = currentCount - 1;
//     productQuantity[i].value = nextCount;
//     toggleButtonState(nextCount, incrementBtn[i], decrementBtn[i]);
// })
// }

// for (let i = 0; i < productQuantity.length; i++) {
// 	let currentCount = +productQuantity[i].value; 
// 	toggleButtonState(currentCount, incrementBtn[i], decrementBtn[i]);
// }



$(".slider-block").slick();



