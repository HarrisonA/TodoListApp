import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('todo-widget', 'Integration | Component | todo widget', {
  integration: true
});

test('it renders the list', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  var todosModel = [
    {text: "Create Ember app"},
    {text: "Ember Testing"},
    {text: "Rails Testing"}
  ];

  this.set('model', todosModel);
  this.render(hbs`{{todo-widget todos=model}}`);
  assert.equal(this.$('li:nth-of-type(1)').text().trim(), 'Create Ember app', 'default list loaded');

  // Check that adding a todo, get rendered 
  this.$('input').val("My new todo").trigger('change');
  this.$('button').click();
  assert.equal(this.$('li:nth-of-type(4)').text().trim(), 'My new todo', 'New todo is added on button click.');

});
