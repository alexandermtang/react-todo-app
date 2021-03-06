import React, { Component } from 'react';
import TodoBar from './todo_bar';
import TodoHeader from './todo_header';
import TodoList from './todo_list';
import TodoFooter from './todo_footer';

export default class App extends Component {
  render() {
    return (
      <div className="col-md-6">
        <TodoBar />
        <TodoHeader />
        <TodoList />
        <TodoFooter />
      </div>
    );
  }
}
