import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  desc: DS.attr('string'),
  cover: DS.attr('string'),

  user: DS.belongsTo('user', {async: true}),
  arts: DS.hasMany('art', {async: true})
});
