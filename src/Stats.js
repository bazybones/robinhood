import React, { useState, useEffect } from "react";
import "./Stats.css";
import axios from "axios";
import StatsRow from "./StatsRow";

const TOKEN = "c17lkn748v6t1a48el40";
const BASE_URL = "https://finnhub.io/api/v1/quote";

function Stats() {
  const [stockData, setstockData] = useState([]);
  const [myStocks, setmyStocks] = useState([]);

  const getStocksData = (stock) => {
    return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
      .catch((error) => {
        console.error("Error", error.message);
      });
  };

  useEffect(() => {
    let tempStocksData = [];
    const stocksList = [
      "AAPL",
      "MSFT",
      "TSLA",
      "FB",
      "BABA",
      "UBER",
      "DIS",
      "SBUX",
    ];

    /*    getMyStocks(); */
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock).then((res) => {
          tempStocksData.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      setstockData(tempStocksData);
      console.log(tempStocksData);
    });
  }, []);

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
             
            
             
            
          </div>
        </div>
        <div className="stats__header">
          <p>Lists</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">{/* Stocks we can buy */}
          {stockData.map((stock)=>(<StatsRow
                key={stock.name}
                name={stock.name}
                openPrice={stock.o}
                volume={stock.shares}
                price={stock.c}  
          />))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
