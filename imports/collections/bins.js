import { Mongo } from 'meteor/mongo';

Meteor.methods({
	'bins.insert': function() {
		console.log('Bins yes');
		return Bins.insert({
			createdAt: new Date(),
			content: '',
			sharedWith: [],
			ownerId: this.userId
		});
	}
});

export const Bins = new Mongo.Collection('bins');