import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        username: this.get('username') ? this.get('username') : "",
        email: this.get('email') ? this.get('email') : "",
        answerDetails: this.get('answerDetails') ? this.get('answerDetails') : "",
        question: this.get('question') ? this.get('question') : "",
      };
      this.sendAction('saveAnswer', params);
    }
  }
});
