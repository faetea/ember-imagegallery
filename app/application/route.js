import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    signOut () {
      this.get('auth').signOut()
      .then(() => this.transitionTo('sign-in'))
      .then(() => {
        this.get('flashMessages').warning('You have been signed out.');
      })
      .catch(() => {
        this.get('flashMessages').danger('There was a problem. Are you sure you\'re signed-in?');
      });
      this.store.unloadAll();
    },

    error (reason) {
      let unauthorized;

      if (reason.errors) {
        unauthorized = reason.errors.some((error) => {
          return error.status === "401";
        });
      }

      if (unauthorized) {
        this.get('flashMessages').danger('You must be authenticated to access this page.');
        this.transitionTo('/sign-in');
      } else {
        this.get('flashMessages').danger('There was a problem. Please try again.');
      }

      return false;
    },

    onServerError (cb) {
      Ember.RSVP.on('error', (reason) => {
        // An aborted transition propogates an error to RSVP
        if(reason.name !== 'TransitionAborted') {
          cb(reason);
        }
      });
    },

  },
});
