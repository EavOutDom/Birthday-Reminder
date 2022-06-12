import { useState } from "react";
import { data } from "./data";
import List from "./list";

function App() {
    const [item, setItem] = useState(data.length);
    return (
        <div className="app">
            <div className="container">
                {item} birthday today
                <div className="info">
                    {data.map((data, index) => {
                        return (
                            <div key={data.id}>
                                <List
                                    name={data.name}
                                    age={data.age}
                                    img={data.image}
                                />
                            </div>
                        );
                    })}
                </div>
                <button
                    onClick={() => {
                        setItem((data.length = 0));
                    }}
                >
                    Clear All
                </button>
            </div>
        </div>
    );
}

export default App;
