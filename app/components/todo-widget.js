import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addAnotherTodo(someText) {

      // grab 'todos' attribute (which is the model),
      // then add a new object to the model
      this.get('todos').pushObject({ text: someText });
    },
  },

});
