const multi = (...i) => {
	//console.log(i);
		if(i.length > 1)
			return i[0]*multi(...i.slice(1));
		else
			return i[0];
	}
//console.log(multi(3, 1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13));

const arr = [];
for(let i = 1; i < 450; i++)
{
	arr.push(i);
}
console.log(multi(...arr))