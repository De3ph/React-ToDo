import { atom } from 'recoil';

export const todosAtom = atom({
    key:'todos',
    default: [],
});

export const doneTodosAtom = atom({
    key:'doneTodosAtom',
    default: [],
});