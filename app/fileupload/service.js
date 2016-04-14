import Ember from 'ember';
import { storageFor } from 'ember-local-storage';
const { Route } = Ember;

export default Ember.Service.extend({
  upload: storageFor('fileupload'),

  readFile: function(file) {
    const reader = new FileReader();
    return new Ember.RSVP.Promise((resolve) => {
      reader.onload = function(event) {
        resolve({
          file: file.name,
          type: file.type,
          data: event.target.result,
          size: file.size
        });
      };
      reader.readAsText(file);
    });
  },

  actions: {
    importData (event) {
      this.readFile(event.target.files[0])
      .then((file) => {
        this.store.importData(file.data);
        console.log('importData fileupload');
        console.log(this.store.importData(file.data));
      });
    },

    exportData () {
      this.store.exportData(['collections', 'arts'], {
        download: true, filename: 'my-data.json'
      });
    },
  }
});
