import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('change-password-form', 'Integration | Component | change password form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  this.set('tagName', 'form');
  this.set('classNames', 'form-horizontal');
  this.set('passwords', '{}');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.on('submit', function(){
    this.sendAction('submit', this.get('passwords'));
  });
  this.on('reset', function(){
    this.set('passwords', {});
  });


  this.render(hbs`{{change-password-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#change-password-form}}
      template block text
    {{/change-password-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
