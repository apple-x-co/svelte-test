import { get, readable, writable } from 'svelte/store'

export const step = writable(1);

export function nextStep() {
    step.update((value) => {
        if (value > 3) {
            return value;
        }

        return value + 1
    })
}

export const answer = writable({
    nickname: null,
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
    q6: null,
});

export function resetAnswer() {
    answer.set({
        nickname: null,
        q1: null,
        q2: null,
        q3: null,
        q4: null,
        q5: null,
        q6: null,
    })
    step.set(1);
}

export const ngWords = readable([
    'TEST',
    'DEBUG'
]);

export function isValidWord(word) {
    if (word === null) {
        return true
    }

    let isValid = true

    get(ngWords).forEach((ngWord) => {
        if (word.toLowerCase().indexOf(ngWord.toLowerCase()) >= 0) {
            isValid = false
        }
    })

    return isValid
}

export const interview1 = readable([
    {
        id: 1, name: 'q1', no: 'Q1', text: '「世界に○○を ギンガ団」○○にあてはまるものを答えよ。', choices: [
            { id: 1, text: 'A.素敵' },
            { id: 2, text: 'B.平和' },
            { id: 3, text: 'C.笑顔' },
            { id: 4, text: 'D.平穏' },
        ],
    },
    {
        id: 2, name: 'q2', no: 'Q2', text: 'ギンガ団が研究しているエネルギーを答えよ。', choices: [
            { id: 5, text: 'A.素敵' },
            { id: 6, text: 'B.平和' },
            { id: 7, text: 'C.笑顔' },
            { id: 8, text: 'D.平穏' },
        ],
    },
    {
        id: 3, name: 'q3', no: 'Q3', text: 'ギンガ団のロゴを答えよ。', choices: [
            { id: 9, text: 'A.', src: 'https://placehold.jp/30/E8D2A6/ffffff/100x100.png?text=A' },
            { id: 10, text: 'B.', src: 'https://placehold.jp/30/E8D2A6/ffffff/100x100.png?text=B' },
            { id: 11, text: 'C.', src: 'https://placehold.jp/30/E8D2A6/ffffff/100x100.png?text=C' },
            { id: 12, text: 'D.', src: 'https://placehold.jp/30/E8D2A6/ffffff/100x100.png?text=D' },
        ],
    },
])

export const interview2 = readable([
    {
        id: 4, name: 'q4', no: 'Q1', text: '感情に流されにくく、クールだといわれる', choices: [
            { id: 13, text: '当てはまる' },
            { id: 14, text: 'やや当てはまる' },
            { id: 15, text: 'あまり当てはまらない' },
            { id: 16, text: '全く当てはまらない' },
        ], case: {
            questionName: 'q1',
            answerIds: [1, 2]
        },
    },
    {
        id: 4, name: 'q4', no: 'Q1', text: '客観的に物事を見るほうだ', choices: [
            { id: 17, text: '当てはまる' },
            { id: 18, text: 'やや当てはまる' },
            { id: 19, text: 'あまり当てはまらない' },
            { id: 20, text: '全く当てはまらない' },
        ], case: {
            questionName: 'q1',
            answerIds: [3, 4]
        },
    },
    {
        id: 5, name: 'q5', no: 'Q2', text: '目的のためなら手段を選ばない', choices: [
            { id: 21, text: '当てはまる' },
            { id: 22, text: 'やや当てはまる' },
            { id: 23, text: 'あまり当てはまらない' },
            { id: 24, text: '全く当てはまらない' },
        ], case: {
            questionName: 'q2',
            answerIds: [5, 6]
        },
    },
    {
        id: 5, name: 'q5', no: 'Q2', text: 'ミステリアスな雰囲気だといわれる', choices: [
            { id: 25, text: '当てはまる' },
            { id: 26, text: 'やや当てはまる' },
            { id: 27, text: 'あまり当てはまらない' },
            { id: 28, text: '全く当てはまらない' },
        ], case: {
            questionName: 'q2',
            answerIds: [7, 8]
        },
    },
    {
        id: 6, name: 'q6', no: 'Q3', text: '感情を表に出しやすい', choices: [
            { id: 29, text: '当てはまる' },
            { id: 30, text: 'やや当てはまる' },
            { id: 31, text: 'あまり当てはまらない' },
            { id: 32, text: '全く当てはまらない' },
        ], case: {
            questionName: 'q3',
            answerIds: [9, 10]
        },
    },
    {
        id: 6, name: 'q6', no: 'Q3', text: '負けず嫌いなほうだ', choices: [
            { id: 34, text: '当てはまる' },
            { id: 35, text: 'やや当てはまる' },
            { id: 36, text: 'あまり当てはまらない' },
            { id: 37, text: '全く当てはまらない' },
        ], case: {
            questionName: 'q3',
            answerIds: [11, 12]
        },
    },
])
