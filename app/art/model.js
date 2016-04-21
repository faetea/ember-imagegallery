import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default Model.extend({
  title: attr('string'),
  caption: attr('string'),
  image: attr('string'),

  thumb_url: attr('string'),
  small_url: attr('string'),
  medium_url: attr('string'),

  collection: belongsTo('collection', { async: true, autoSave: true })
});
