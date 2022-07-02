import { useState } from "react";
import { data } from "./data";
import List from "./list";

function App() {
    const [item, setItem] = useState(data.length);
    return (
        <div className="app">
            <div className="container">
            <div className={'top'}>
                {item} birthday today
                </div>
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
                <div className={'flex'}>
                <button
                    className={'btn'}
                    onClick={() => {
                        setItem((data.length = 0));
                    }}
                >
                    Clear All
                </button>
                </div>
            </div>
        </div>
    );
}

export default App;
