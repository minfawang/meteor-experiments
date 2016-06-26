import { Mongo } from 'meteor/mongo';
import { Message } from './schemas';
const Messages = new Mongo.Collection('messages');
Messages.attachSchema(Message);
export default Messages;
