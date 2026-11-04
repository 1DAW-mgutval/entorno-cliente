'use strict'
{
    let myNumbers = [100,5,15,1,99];
    console.log(myNumbers.sort((a,b) => b-a));

    let myNames = ['leti', 'Sandra', 'Maria', 'María', 'Candela'];
    console.log(myNames.sort((a,b) => b.localeCompare(a)));
}