import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  credentials: storageFor('auth'),
  isAuthenticated: Ember.computed.bool('credentials.token'),

  signUp (credentials) {
    return this.get('ajax').post('/sign-up', {
      data: {
        credentials: {
          email: credentials.email,
          password: credentials.password,
          password_confirmation: credentials.passwordConfirmation,
        }
      },
    });
  },

  signIn (credentials) {
    return this.get('ajax').post('/sign-in', {
      data: {
        credentials: {
          email: credentials.email,
          password: credentials.password,
        }
      },
    })
    .then((result) => {
      this.get('credentials').set('id', result.user.id);
      this.get('credentials').set('email', result.user.email);
      this.get('credentials').set('token', result.user.token);
    });
  },

  changePassword (passwords) {
    return this.get('ajax').patch(`/change-password/${this.get('credentials.id')}`, {
      data: {
        passwords: {
          old: passwords.previous,
          new: passwords.next,
        }
      },
    });
  },

  // updateUser (profile) {
  //   return this.get('ajax').patch(`/users/${this.get('credentials.id')}`, {
  //     data: {
  //       user: {
  //         username: profile.username,
  //         first_name: profile.firstName,
  //         last_name: profile.lastName,
  //         bio: profile.bio,
  //       }
  //     },
  //   });
  // },

  signOut () {
    return this.get('ajax').del(`/sign-out/${this.get('credentials.id')}`)
    .finally(() => this.get('credentials').reset());
  },
});
