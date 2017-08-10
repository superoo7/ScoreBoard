// Lib
import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

// DB
import { Players, calculatePlayerPositions } from './../imports/api/players';

// ui
import App from "./../imports/ui/App"


Meteor.startup(() => {
    Tracker.autorun(
        () =>
        {
            let title = "React ScoreBar v1"
            let players = Players.find({},{sort: {score: -1}}).fetch();
            let positionedPlayer = calculatePlayerPositions(players);
            ReactDOM.render(<App title={title} players={positionedPlayer} />, document.getElementById('app'));
        }
        );
    });

