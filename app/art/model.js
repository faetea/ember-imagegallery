import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default DS.Model.extend({
  title: attr('string'),
  caption: attr('string'),
  image: attr('string'),

  collection: belongsTo('collection', { async: true, autoSave: true })
});
