//ARRAY METHODS

//1. Solving problems using array functions on rest countries data
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.send();

xhr.onload = function () {
    const response = JSON.parse(xhr.responseText);
    console.log("Countries", response);
  
//a. Get all the countries from Asia continent /region using Filter function

    console.log("Region:Asia", response.filter((cty) => cty.region ==="Asia"));
    
//b. Get all the countries with a population of less than 2 lakhs using Filter function
    
    console.log("Population less than 2Lakhs", response.filter((cty) => cty.population < 200000));

//c. Print the following details name, capital, flag, using forEach function 
    
    response.forEach((cty, capital, flag) => {
        console.log(cty.name.common, cty.flag, cty?.capital?.length>0?cty.capital[0]:undefined);
       });
    

//d. Print the total population of countries using reduce function

    const totalPopulation = response.reduce((preVal, curVal) =>{
        return (preVal + curVal.population);
    },0);
    console.log("Total Population of 250 Countries", totalPopulation);

//e. Print the country that uses US dollars as currency.
    const usdcountries = response.filter((cty)=>{
    const {currencies = {}} = cty;
    return Object.keys(currencies).includes("USD");
    });
    for(let cty of usdcountries){
        console.log(cty.name.common);
    }
};
