import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";
function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [input, setInput] = useState();
    const [selectCoin, setSelectCoin] = useState();
    const [inverter, setInverter] = useState(false);

    const onChange = (e) => {
        setInput(e.target.value);
    };

    // const onClick = (e) => {};

    const selectedCoin = (e) => {
        setSelectCoin(e.target.value.split(" ").at(-2));
        console.log(e);
    };
    const inverted = (e) => {
        setInverter((current) => !current);
        setInput(inverter ? input * selectCoin : input / selectCoin);
        console.log(input);
        console.log(selectCoin);
    };

    const reset = () => {
        setInput(0);
    };
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
            {loading ? (
                <div>loading...</div>
            ) : (
                <div>
                    <select onChange={selectedCoin}>
                        <option>Select Coins to exchange!</option>
                        {coins.map((coin) => (
                            <option>
                                {coin.name}({coin.symbol}) : {coin.quotes.USD.price.toFixed(2)} $
                            </option>
                        ))}
                    </select>
                </div>
            )}
            <div>
                <form>
                    <div>
                        <label for="money">Your Money</label>
                        <input
                            onChange={onChange}
                            id="money"
                            type="number"
                            value={inverter ? input * selectCoin : input}
                            placeholder="money(dollar)"
                            disabled={inverter}
                        />
                    </div>
                    <div>
                        <label for="bitcoin">Coin</label>
                        <input
                            onChange={onChange}
                            id="bitcoin"
                            type="number"
                            value={inverter ? input : input / selectCoin}
                            placeholder="bitcoin"
                            disabled={!inverter}
                        />
                    </div>
                </form>
                <button onClick={inverted}>
                    {!inverter ? "money->bitcoin" : "bitcoin->money"}
                </button>
                <button onClick={reset}>reset</button>
            </div>
        </div>
    );
}

export default App;
