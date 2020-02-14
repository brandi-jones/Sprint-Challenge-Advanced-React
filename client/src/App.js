import React from 'react';
import './App.css';
import axios from "axios";
import PlayerCard from "./components/PlayerCard.js";
import NavBar from "./components/NavBar.js";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      players: []
    };

  };

  componentDidMount() {

    //update state
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.log(response)
      this.setState({
        players: response.data
      })

    })
    .catch(error => {
      console.log("error when trying to get data: ", error)
    })
  }

  render() {
    console.log('rendering app...', this.state.players);

    return (
      <div className="container">

      <NavBar/>
      <div className="cardList">
        {this.state.players.map(player => {
          return(
            <PlayerCard player={player}/>
          )
        })}
      </div>

      </div>
    );
  }

} 

export default App;