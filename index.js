/*// EJERCICIO 01
console.log("------------")
console.log("EJERCICIO 01")

const alcoholLevelPermited = 5;
const beersFiltered = beers.filter((beers) => beers.abv <= alcoholLevelPermited);

console.log(beersFiltered);

const newArrayOfBeers = beersFiltered.map(beers => {
    return {
        beerName: beers.name,
        beerAlcoholLevel: beers.abv,
        beerBiterness: beers.ibu
    }
    
})

console.log(newArrayOfBeers);


// EJERCICIO 02
console.log("------------")
console.log("EJERCICIO 02")

beers.sort((a,b) => {
    if(a.abv > b.abv){
        return -1;
    }
    if(a.abv < b.abv){
        return 1;
    }
    return 0;
})

console.log(beers);

const mostAlcoholicBeers = beers.filter((beers) => beers.abv >= 7.5);

console.log(mostAlcoholicBeers);

// EJERCICIO 02-2

const mostAlcoholicBeers2 = beers.slice(0, 10);

console.log(mostAlcoholicBeers2);


// EJERCICIO 03
console.log("------------")
console.log("EJERCICIO 03")

const lessAlcoholicBeers = beers.filter((beers) => beers.abv <= 5.3);

console.log(lessAlcoholicBeers);


// EJERCICIO 04
console.log("------------")
console.log("EJERCICIO 04")

const newBeers = beers;
const property = "name";
const order = true;

if(order === true){
    newBeers.sort((a, b) =>{
        if(a[property] > b[property]){
            return 1;
        }
        if(a[property]  < b[property]){
            return -1;
        }
        return 0;
    })
}else{
    newBeers.sort((a, b) =>{
        if(a[property] > b[property]){
            return -1;
        }
        if(a[property]  < b[property]){
            return 1;
        }
        return 0;
    })

}
console.log(newBeers.slice(0, 10));*/


// EJERCICIO 05
console.log("------------")
console.log("EJERCICIO 05")

const table = document.getElementById("tableEx05")

const newArrayOfBeers2 = beers.map(beers => {
    return {
        beerName: beers.name,
        beerAlcoholLevel: beers.abv,
        beerBitterness: beers.ibu
    }
})

//newArrayOfBeers2.unshift({ beerName: "Beer", beerAlcoholLevel: "Alcohol Level", beerBitterness: "Alcohol Bitterness"});
console.log(newArrayOfBeers2);

const templateTable = newArrayOfBeers2.reduce((acc, act) =>{
    return  acc +  `<tr>
                        <td>${act.beerName}</td>
                        <td>${act.beerAlcoholLevel}</td>
                        <td>${act.beerBitterness}</td>
                    </tr>`
},"")

table.innerHTML = templateTable;



