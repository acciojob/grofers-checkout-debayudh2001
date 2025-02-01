const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let sum = 0
const getSum = () => {
	let prices = document.querySelectorAll(".price")
	for(let v of prices){
		sum += Number(v.innerText)
	}
	let td = document.createElement("td")
	td.innerText = sum
	let tr = document.createElement("tr")
	tr.append(td)
	let table = document.querySelector("table")
	table.append(tr)
};

getSumBtn.addEventListener("click", getSum);

