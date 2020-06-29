import React from "react";
import "./App.css";
import axios from "axios";
import DisplayPlayers from "./components/DisplayPlayers";
class App extends React.Component {
    state = {
        players: []
    };

    componentDidMount = () => {
        const players = JSON.parse(localStorage.getItem("players"));
        if (players) {
            this.setState({ players });
        } else {
            const url = "http://localhost:5000/api/players";
            axios
                .get(url)
                .then((response) => {
                    let data = response.data;
                    let playerData = data.map((player) => {
                        return [
                            player.name,
                            player.country,
                            player.searches,
                            player.id
                        ];
                    });
                    this.setState({
                        players: [...this.state.players, playerData]
                    });
                    localStorage.setItem("players", JSON.stringify(playerData));
                })
                .catch((error) => {
                    console.error("Server Error", error);
                });
        }
    };
    render() {
        return (
            <>
                {this.state.players.map((player) => (
                    <DisplayPlayers key={player.id} player={player} />
                ))}
            </>
        );
    }
}
export default App;
