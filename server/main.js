import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';



Meteor.startup(() => {
    console.log(Players.find().fetch());
});
