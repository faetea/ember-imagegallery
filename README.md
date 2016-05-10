# Ember Image Gallery

Ember app uses token authentication to connect to a Rails API
that uses Amazon S3 to store images.

## installation

1.  Fork and clone repository.
1.  Install dependencies with `npm install` and `bower install`.
1.  Follow the instructions to setup the [API](https://github.com/faetea/ember-auth-api).
1.  Start the font-end server with `ember server --proxy http://localhost:3000`

## Process

-   Logout was not working when cloned from template.
-   Changed `application/template.hbs` to `{{my-application signOut="signOut"}}`
-   Added `auth: Ember.inject.service(),` in `app/application/route.js`
-   Logout seems to be working now.

## Stories

### First Deployment

| A User can:                                      | version.1     |
|--------------------------------------------------|---------------|
| signup, signin, signout, and change-password     | Jeff-template |
| Update their their own profile                   | April 20th    |
| Create new collection w/ attached cover-image    | April 17th    |
| view all Collections by all Users                | April 17th    |
| Update their collection name and description     | May 9th       |
| Create new Art w/ attached image                 | April 20th    |
| view all Arts in current-collection              | April 25th    |
| view specific Art in current-collection          | not yet       |
| Update their Art title and caption               | not yet       |

### Second Deployment

| A User can:                                      | version.2     |
|--------------------------------------------------|---------------|
| view other user's profiles, not edit             | not yet       |
| attach a file-avatar to their profile            | not yet       |
| view all Collections by current_user             | not yet       |
| view specific Collection of current_user         | not yet       |
| Update their collection cover-image              | not yet       |
| Delete their collection                          | not yet       |
| view all Collections by other User, READONLY     | not yet       |
| view specific Collection of other User, READONLY | not yet       |
| view all Arts by all Users                       | not yet       |
| view all Arts by current_user                    | not yet       |
| view specific Art of current_user                | not yet       |
| Update their Art image                           | not yet       |
| Delete their Art                                 | not yet       |
| view all Arts by other User, READONLY            | not yet       |
| view specific Art of other User, READONLY        | not yet       |

## ember-ajax

This app is using the [ember-ajax](https://github.com/ember-cli/ember-ajax)
service for authentication requests.
Making AJAX requests in Ember applications:

-   customizable service
-   returns RSVP promises
-   improved error handling
-   ability to specify request headers
-   upgrade path from ic-ajax

**Why an Ajax Service?**
The idea with this addon is to provide a service that can be used by Ember Data
 and on an ad-hoc bases and provides consistent interface for Ajax requests.

## ember-local-storage

This app is using [ember-local-storage](https://github.com/funkensturm/ember-local-storage)
for handling authentication credentials.
Provides a storageFor computed property that returns a proxy and persists the
changes to localStorage or sessionStorage. It works with objects and arrays
and has a generator to create the proxy objects or arrays.

## active-model-adapter

This app is using [active-model-adapter](https://github.com/ember-data/active-model-adapter)
for communicating with the Rails Serializers.
The ActiveModelAdapter is a RESTAdapter designed to integrate with a JSON API
that uses an underscored naming convention instead of camelCasing.
It has been designed to work with the active_model_serializers Ruby gem.

## Ember-cli-file-picker

This app is using [file-picker](https://github.com/funkensturm/ember-cli-file-picker)
for image upload.
An addon that provides a component to easily add a filepicker to application.

-   A preview of the uploaded file
-   A dropzone to drag and drop your file
-   Currently it only support single file uploads but multiples will come soon

## [License](LICENSE)

Source code distributed under the MIT license.
Text and other assets copyright General Assembly, Inc., all rights reserved.
