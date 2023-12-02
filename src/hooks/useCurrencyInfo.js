// import { useEffect,useState } from "react";

// function useCurrencyInfo(currency){
//     const [data, setData]= useState({});// initialized with an empty obj
//     useEffect(()=>{
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         .then((res) => res.json)//received data from API in string and converted into json//.then() returns a callback.
//         .then((res)=> setData(res[currency]))// We want a single currency rate so res[currency] is used to extract that part
//         console.log(data);
//     },[currency]) //whenever the currency is changed rerendering of ui will happen so [currency]
//     console.log(data);
//     return data;
// }

// export default useCurrencyInfo;

import {useEffect, useState} from "react"
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;

