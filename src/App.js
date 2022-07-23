import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";
function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers") //
            .then((res) => res.json())
            .then((datas) => {
                setCoins(datas);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>The Coins!</h1>
            {loading ? <div>loading...</div> : null}
            <ul>
                {coins.map((coin) => (
                    <li>
                        {coin.name}({coin.symbol}) : {coin.quotes.USD.price.toFixed(2)}$
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
