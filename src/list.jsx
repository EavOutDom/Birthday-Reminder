import React from "react";

const List = ({ name, age, img }) => {
    return (
        <div className="info">
            <div className="flex">
                <div className="img">
                    <img src={img} alt={name} />
                </div>
                <div style={{ marginLeft: "10px" }}>
                    <div>{name}</div>
                    <div>{age}</div>
                </div>
            </div>
        </div>
    );
};

export default List;
