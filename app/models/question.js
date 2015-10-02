import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr(),
  longQuestion: DS.attr(),
  shortQuestion: DS.attr(),
  topic: DS.attr(),
  username: DS.attr()
});
