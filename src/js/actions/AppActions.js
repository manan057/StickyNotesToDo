var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  addNote: function(note) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_NOTE,
      note: note
    });
  },

  recieveNotes: function(notes) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECIEVE_NOTES,
      notes: notes
    });
  },

  removeNote: function(noteId){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_NOTE,
      noteId: noteId
    });
  }
}

module.exports = AppActions;
