let city = [101, 500, 200000, 52323, 890];

// function chck (cities){
// for(let i = 0; i<cities.length; i++){
//     if  (cities[i]>10000){
//         console.log(cities[i])
//     }
// }
// };
// chck(city);


const region = city.filter((cities) =>{
    return cities > 10000;
});
console.log(region);


// this returns as boolean
// const region = city.filter((cities) =>{
//     console.log(cities > 10000);
// });
