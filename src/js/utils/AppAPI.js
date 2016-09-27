var AppActions = require('../actions/AppActions');

module.exports = {
  addNote: function(note) {
    $.ajax({
      url: 'https://api.mongolab.com/api/1/databases/stickynotestodo/collections/notes?apiKey=a4hAXvsB3tX_wCAWZSYlgPELRRPTNpWp',
      data: JSON.stringify(note),
      type: "POST",
      contentType: "application/json"
    });
  },

  getNotes: function() {
    $.ajax({
      url: 'https://api.mongolab.com/api/1/databases/stickynotestodo/collections/notes?apiKey=a4hAXvsB3tX_wCAWZSYlgPELRRPTNpWp',
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data);
        AppActions.recieveNotes(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }.bind(this)
    });
  },

  removeNote: function(noteId) {
    $.ajax({
      url: 'https://api.mongolab.com/api/1/databases/stickynotestodo/collections/notes/'+noteId+'?apiKey=a4hAXvsB3tX_wCAWZSYlgPELRRPTNpWp',
      type: "DELETE",
      async: true,
      timeout: 300000,
      success: function(data){
        console.log('Note deleted...');
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }.bind(this)
    });
  }
}
