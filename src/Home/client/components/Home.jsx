import React from 'react';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Location = new SimpleSchema({
  address: { type: String },
  city: { type: String },
});

const schema = new SimpleSchema({
  name: { type: String },
  email: { type: String },
  location: { type: Location },
});

class TodoApp extends React.Component {
  render() {
    global.schema = schema;

    return (
      <h1>Home Page of Experiments</h1>
    );
  }
}

export default TodoApp;
