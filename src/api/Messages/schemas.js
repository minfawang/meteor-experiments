import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Message = new SimpleSchema({
  content: { type: String },
  createdAt: {
    type: Date,
    optional: true,
    autoValue() {
      return this.isInsert ?
        new Date() : this.unset();
    },
  },
});
