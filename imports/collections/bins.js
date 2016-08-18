import { Mongo } from 'meteor/mongo';

Meteor.methods({
	'bins.insert': function() {
		return Bins.insert({
			createdAt: new Date(),
			content: '',
			sharedWith: [],
			ownerID: this.userID
		});
	}
});

export const Bins = new Mongo.Collection('bins');