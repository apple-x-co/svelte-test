import { writable } from 'svelte/store';

export const answer = writable({
    nickname: null,
    question1: null,
});
