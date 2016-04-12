import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  caption: DS.attr('string'),
  image: DS.attr('string'),

  collection: DS.belongsTo('collection', {async: true})
});
