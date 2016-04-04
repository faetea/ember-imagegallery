import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hamburger-menu', 'Integration | Component | hamburger menu', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  this.set('tagName', 'button');
  this.set('classNames', 'navbar-toggle, collapsed');
  this.set('attributeBindings', 'toggle:data-toggle, target:data-target, expanded:aria-expanded');
  this.set('toggle', 'collapse');
  this.set('target', '#navigation');
  this.set('expanded', 'false');
  // Handle any actions with this.on('myAction', function(val) { ... });


  this.render(hbs`{{hamburger-menu}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hamburger-menu}}
      template block text
    {{/hamburger-menu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
