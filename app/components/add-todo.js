import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    submitInput() {
      // get the component property 'text'
      const text = this.get('text');

      // Call the closure property "onUserAdd" (from the todo widget) and
      // pass it the argument text
      this.get('onUserAdd')(text);

      this.set('text', "");  // empty the component property "text" in the input field
      this.$('input').focus();  // focus/highlight the input field
    },
  },

});
