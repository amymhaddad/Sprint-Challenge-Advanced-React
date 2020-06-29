import React from "react";
import "../App.css";

export default function DisplayPlayers({ player }) {
    const [name, country, searches] = player;

    return (
        <>
            <div className="players-container">
                <div className="name">Name: {name}</div>

                <div className="country">Country: {country}</div>

                <div className="searches">Searches: {searches}</div>
            </div>
        </>
    );
}
