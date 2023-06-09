/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;

  // eslint-disable-next-line no-undef
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title, tags, body, id, createdAt, updatedAt,
  };

  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Catatan Berhasil Ditambahkan!',
      data: {
        noteid: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    statu: 'fail',
    message: 'Catatan Gagal Ditambahkan!',
  });
  response.code(500);
  return response;
};

const getAllNotesHandler = () => ({
  status: 'success',
  data: {
    notes,
  },
});

const getNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  // eslint-disable-next-line no-undef
  const note = notes.filter((n) => n.id === id)[0];

  if (note !== undefined) {
    return {
      status: 'success',
      data: {
        note,
      },
    };
  }

  const response = h.response({
    status: 'Failed!',
    message: 'Catatan Tidak Ditemukan',
  });
  response.code(404);
  return response;
};
module.exports = { addNoteHandler, getAllNotesHandler, getNoteByIdHandler };
