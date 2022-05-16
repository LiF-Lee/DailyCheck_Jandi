# DailyCheck_Jandi


```js
/**
 * @param {Array} query
 * @param {Int} max_horizontal
 * @param {String} active_txt
 * @param {String} inactive_txt
 */
function Jandi(query, max_horizontal = 'auto', active_txt = '🟩', inactive_txt = '⬜') {...}
```

```js
/* Query */
[
    {
        "year": 2022,  // 년
        "month": 4,    // 월
        "day": "auto", // 해당 연월의 마지막 일로 자동 설정
        "bit_flag": 0  // 잔디 비트플래그 값 (0~2147483647)
    },
    {
        "year": 2022,           // 년
        "month": 5,             // 월
        "day": 16,              // 수동으로 설정
        "bit_flag": 2147483647  // 잔디 비트플래그 값 (0~2147483647)
    },
]
```

```js
/* Example */
const Query = [
    {
        "year": 2022,
        "month": 1,
        "day": "auto",
        "bit_flag": 3823402
    },
    {
        "year": 2022,
        "month": 2,
        "day": "auto",
        "bit_flag": 28172399
    },
    {
        "year": 2022,
        "month": 3,
        "day": "auto",
        "bit_flag": 82739483
    },
    {
        "year": 2022,
        "month": 4,
        "day": "auto",
        "bit_flag": 19283723
    },
    {
        "year": 2022,
        "month": 5,
        "day": 16,
        "bit_flag": 44317
    }
];

const _Jandi = Jandi(Query);
console.log('Output 1');
console.log(_Jandi, '\n');

const _Jandi_2 = Jandi(Query, 16);
console.log('Output 2');
console.log(_Jandi_2, '\n');
```

# Output