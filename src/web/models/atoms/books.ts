import { atom } from 'recoil';

export const booksAtom = atom({
    key:'booksId',
    default: 'loading...'
})