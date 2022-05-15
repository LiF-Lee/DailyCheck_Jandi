# DailyCheck_Jandi


```js
/**
 * @param {List} query
 * @param {String} active_txt
 * @param {String} inactive_txt
 */
function Jandi(query, active_txt = '🟩', inactive_txt = '⬜') {...}
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
        "year": 2022,  // 년
        "month": 5,    // 월
        "day": 16,     // 수동으로 설정
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
console.log(_Jandi.map(e => e.join('')).join('\n'));
```

# Output
<img width="556" alt="스크린샷 2022-05-16 02 24 18" src="https://user-images.githubusercontent.com/66173558/168485938-d7a0dae4-0855-4db0-9cd1-a220c9081941.png">
