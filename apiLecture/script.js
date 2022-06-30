async function getMoney() {
    //id container to put info inside of
    let div = document.querySelector("#coinList");
    console.log("get money");
    //create variable to store data we collect form api. we will call api using fetch
    var responseFromApi = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
    //convert info to json(some format the computer can understand)
    var coinData = await responseFromApi.json();
    // console.log(coinData);
    for(let i = 0; i < coinData.length; i++) {
        // console.log(coinData[i]);
        let currentCoin = coinData[i]; //store current coin into a variable
        //create a p tag
        let pTag = document.createElement("p");
        // console.log(pTag); logs 100 ptags with nothing in them
        pTag.innerText = currentCoin.name + "-" + currentCoin.current_price;
        //fill that ptag with current coins name
        //add class to ptag
        pTag.classList.add("coin");
        //put ptag inside div coinList
        div.appendChild(pTag);


    }
}

//for each coint i want to generate a p tag..use a forloop