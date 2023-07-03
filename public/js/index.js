let arrayOfProducts = [];
let getProducts = function (filter) {
	let xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			arrayOfProducts = JSON.parse(xhttp.responseText);

			if (filter !== 'All Products' && filter !== undefined) arrayOfProducts = arrayOfProducts.filter(p => p.category === filter);

			console.log(filter);

			buildProductRows(arrayOfProducts);
		}
	};

	xhttp.open("GET", "http://localhost:3000/components", true);
	xhttp.send();
};

let buildCard = function (_product) {
	let card = ''

	card += `<div class="col hp">`
	card += `	<div class="card h-100 shadow-sm">`
	card += `		<div class="clearfix">`
	card += `			<span class="float-start badge rounded-pill text-black bg-warning">`
	card += `				${_product.category}`
	card += `			</span>`
	card += `			<span class="float-end badge rounded-pill text-black bg-warning bg-warning">`
	card += `				${_product.manufacturer}`
	card += `			</span>`
	card += `		</div>`
	card += `		<img src="${_product.photo}" class="card-img-top" alt="product.title"`
	card += `			style="width: 100%; height: 200px; object-position: center">`
	card += `		<div class="card-body">`
	card += `			<h5 class="card-title">`
	card += `				${_product.model}`
	card += `			</h5>`
	card += `			<div class="clearfix mb-2">`
	card += `				<span class="float-start" style="font-size: 10px">`
	card += `					${_product.serial}`
	card += `				</span>`
	card += `				<span class="float-end badge rounded-pill text-black bg-warning bg-success">`
	card += `					PRICE: ${_product.price} €`
	card += `				</span>`
	card += `			</div>`
	card += `			<div class="clearfix mb-1">`
	card += `				<span class="float-start">`
	card += `					Stock: ${_product.stock}`
	card += `				</span>`
	card += `				<span class="float-end">`
	card += `					<a target="blank" href="${_product.details}" class="small text-muted text-uppercase aff-link">Details</a>`
	card += `				</span>`
	card += `			</div>`
	card += `			<div class="d-grid gap-2 my-4">`
	card += `				<a class="btn btn-warning bold-btn">`
	card += `					<i class="fas fa-shopping-cart me-2"></i> add to cart`
	card += `				</a>`
	card += `			</div>`
	card += `		</div>`
	card += `	</div>`
	card += `</div>`

	return card;
}

let buildRow = function (_cards) {
	let row = '';

	row += `<div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3 mt-2">`;

	for (let c of _cards) {
		row += c;
	}

	row += `</div>`;

	return row;
}

let buildAllCards = function (_prods) {
	let allCards = [];

	for (let product of _prods) {
		allCards.push(buildCard(product));
	}

	return allCards;
}

let buildProductRows = function (prods) {
	let rows = "";
	let cards = buildAllCards(prods);
	let rowCount = Math.ceil(cards.length / 4);
	let cardIndex = 0;
	let numberOfCards = 4;

	for (let i = 0; i < rowCount; i++) {
		let cardsInRow = cards.slice(cardIndex, numberOfCards);

		rows += buildRow(cardsInRow);
		cardIndex += 4;
		numberOfCards += 4;
	}

	document.getElementById("product_rows").innerHTML = rows;
};

document.addEventListener("DOMContentLoaded", () => {
	getProducts();
});