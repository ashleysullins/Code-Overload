import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr(),
  username: DS.attr(),
  answerDetails: DS.attr(),
  question: DS.belongsTo('question', { async: true })
});
