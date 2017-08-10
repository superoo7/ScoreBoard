import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
    handleSubmit(e) {
        let name = e.target.playerName.value;
        e.preventDefault();

        if(name) {
            e.target.playerName.value ='';
            Players.insert({
                name: name,
                score: this.props.score
            });
        }
    }

    render() {
      return (
          <div className="item">
          <form className="form" onSubmit={this.handleSubmit.bind(this)}>
              <input className="form__input" type="text" name="playerName" placeholder="Player Name" />
              <button className="button">Add Player</button>
          </form>
          </div>
      );
    };
}

