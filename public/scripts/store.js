// eslint-disable-next-line no-unused-vars
'use strict';

const store = (function () {

  return {
    server: 'https://noteful-api.glitch.me',  
    notes: [],
    folders: [],
    tags: [],
    currentNote: {},
    currentQuery: {
      searchTerm: '',
    }
  };

}());
