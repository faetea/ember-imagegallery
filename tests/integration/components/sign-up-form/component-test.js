import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sign-up-form', 'Integration | Component | sign up form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  this.set('tagName', 'form');
  this.set('classNames', 'form-horizontal');
  this.set('credentials', '{}');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.on('submit', function() {
    this.sendAction('submit', this.get('credentials'));
  });
  this.on('reset', function() {
    this.set('credentials', {});
  });


  this.render(hbs`{{sign-up-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sign-up-form}}
      template block text
    {{/sign-up-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
