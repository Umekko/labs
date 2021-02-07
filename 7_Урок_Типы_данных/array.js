let salaries = [5000, 1000, 3000];

let totalSum = 0;

salaries.forEach(function (salary) {
	totalSum += salary;
});

console.log(totalSum);

let updateSalaries = salaries.map(function (salary) {
	return {
		oldSalary: salary,
		newSalary: salary - 500,
	};
});

// console.log(updateSalaries);

const markets = [
	{
		name: 'Sela',
		sales: 10,
	},
	{
		name: 'BrandMix',
		sales: 20,
	},
	{
		name: 'Optima Market',
		sales: 50,
	}
];

let bestMarkets = markets.filter(function(market) {
    return market.sales > 10;
});

console.log(bestMarkets);
