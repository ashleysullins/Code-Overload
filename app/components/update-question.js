import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        username: this.get('username'),
        email: this.get('email'),
        topic: this.get('topic'),
        shortQuestion: this.get('shortQuestion'),
        longQuestion: this.get('longQuestion'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
