const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    // eslint-disable-next-line no-undef
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteById,
  },
];

module.exports = routes;
