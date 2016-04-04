# Authentication in Ember

Ember front-end application uses token authentication with a Rails back-end API

## installation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Install dependencies with `npm install` and `bower install`.
1.  Follow the instructions to setup the [API]().
1.  Start the font-end server with `ember server --proxy http://localhost:3000`.

## Process

-   Logout was not working when cloned.
-   Changed `application/template.hbs` to `{{my-application signOut="signOut"}}`
-   Added `auth: Ember.inject.service(),` in `app/application/route.js`
-   Logout seems to be working now.

## ember-ajax

[github.com/ember-ajax](https://github.com/ember-cli/ember-ajax)

Making AJAX requests in Ember applications:

-   customizable service
-   returns RSVP promises
-   improved error handling
-   ability to specify request headers
-   upgrade path from ic-ajax

## ember-local-storage

[github.com/ember-local-storage](https://github.com/funkensturm/ember-local-storage)

Provides a storageFor computed property that returns a proxy and persists the
changes to localStorage or sessionStorage. It works with objects and arrays
and has a generator to create the proxy objects or arrays.

## active-model-adapter

[github.com/active-model-adapter](https://github.com/ember-data/active-model-adapter)

The ActiveModelAdapter is a RESTAdapter designed to integrate with a JSON API
that uses an underscored naming convention instead of camelCasing.
It has been designed to work with the active_model_serializers Ruby gem.

## Additional Resources

-   [Implementing Authentication with Ember Services - Ember Igniter](http://emberigniter.com/implementing-authentication-with-ember-services/)
-   [jpadilla/ember-simple-auth-token: Ember Simple Auth extension that is compatible with token-based authentication like JWT.](https://github.com/jpadilla/ember-simple-auth-token)
-   [simplabs/ember-simple-auth: A library for implementing authentication/authorization in Ember.js applications.](https://github.com/simplabs/ember-simple-auth)
-   [Create your first Ember 2.0 app: From authentication to calling an API](https://auth0.com/blog/2015/08/11/create-your-first-ember-2-dot-0-app-from-authentication-to-calling-an-api/)

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
