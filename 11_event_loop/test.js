const flowers = [
	{ name: 'rouse', price: 300, discount: 5 },
	{ name: 'sunflower', price: 1000 },
	{ name: '101 rouse', price: 3000 },
];

let count = 0;

let withDiscountFlowers = flowers.map(function (flowers) {
	if (flowers.price > 2500) {
		let withDiscount = 20;
		count = flowers.price - (withDiscount / 100) * flowers.price;
		flowers.price = count;
		return flowers;
	} else if (flowers.price > 900) {
		let withDiscount = 15;
		count = flowers.price - (withDiscount / 100) * flowers.price;
		flowers.price = count;
		return flowers;
	} else if (flowers.price > 200) {
		let withDiscount = 5;
		count = flowers.price - (withDiscount / 100) * flowers.price;
		flowers.price = count;
		return flowers;
	}
});

let flowersWithDiscount = withDiscountFlowers.map(function (value) {
	if (value.price == 2400) {
		return { name: '101 rouse', price: 2400, withDiscount: 20 };
	} else if (value.price == 850) {
		return { name: 'sunflower', price: 850, withDiscount: 15 };
	} else if (value.price == 285) {
		return { name: 'rouse', price: 285, withDiscount: 5 };
	}
});
console.log(flowersWithDiscount);
