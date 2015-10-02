import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        username: this.get('username') ? this.get('username') : "",
        email: this.get('email') ? this.get('email') : "",
        topic: this.get('topic') ? this.get('topic') : "",
        shortQuestion: this.get('shortQuestion') ? this.get('shortQuestion') : "",
        longQuestion: this.get('longQuestion') ? this.get('longQuestion') : "",
      };
      this.sendAction('save', params);
    }
  }
});
