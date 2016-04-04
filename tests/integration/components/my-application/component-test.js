import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('my-application', 'Integration | Component | my application', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  this.set('auth', 'Ember.inject.service()');
  this.set('user', 'auth.credentials.email');
  this.set('isAuthenticated', 'auth.isAuthenticated');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.on('signOut', function() {
    this.sendAction('signOut');
  });


  this.render(hbs`{{my-application}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#my-application}}
      template block text
    {{/my-application}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
