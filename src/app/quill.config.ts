import { QuillConfig } from 'ngx-quill';

export const quillConfig: QuillConfig = {
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ size: ['large', 'huge', false] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ font: [] }],
    ],
  },
};
