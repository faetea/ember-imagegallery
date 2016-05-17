import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default Model.extend({
  title: attr('string'),
  caption: attr('string'),
  image: attr('string'),

  thumbUrl: attr('string'),
  smallUrl: attr('string'),
  mediumUrl: attr('string'),

  createdAt: attr('date'),
  updatedAt: attr('date'),
  imageUpdatedAt: attr('date'),

  collection: belongsTo('collection', { async: true, autoSave: true })
});
