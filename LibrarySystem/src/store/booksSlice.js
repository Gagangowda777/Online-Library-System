import { createSlice } from '@reduxjs/toolkit';
import { bookData } from '../utils/BookData';

const initialState = {
  books: bookData,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        ...action.payload,
        id: Math.max(...state.books.map(book => book.id)) + 1,
      };
      state.books.unshift(newBook); 
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;