import DS from 'ember-data';
const { Model, attr, hasMany, belongsTo } = DS;
// var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  desc: attr('string'),
  cover: attr('string'),
  // cover: attr('raw'),

  user: belongsTo('user', {async: true, autoSave: true }),
  arts: hasMany('art', { async: true, dependent: 'destroy' }),

});
