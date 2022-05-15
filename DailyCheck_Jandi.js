function Jandi(query, active_txt = '🟩', inactive_txt = '⬜') {
    const _Jandi = [[], [], [], [], [], [], []];
    let _Jandi_Fix = 0;
    for (let i = 0; i < query.length; i++) {
        const q = query[i];
        for (let j = 0; j < new Date(q.year, q.month, q.day === 'auto' ? 0 : q.day).getDate(); j++) {
            _Jandi[(j + _Jandi_Fix) % 7].push((q.bit_flag >> j & 1) ? active_txt : inactive_txt);
        }
        _Jandi_Fix += new Date(q.year, q.month, q.day === 'auto' ? 0 : q.day).getDate() % 7;
    }
    return _Jandi;
}

const Query = [
    {
        "year": 2022,
        "month": 1,
        "day": "auto",
        "bit_flag": 0
    },
    {
        "year": 2022,
        "month": 2,
        "day": "auto",
        "bit_flag": 2147483647
    },
    {
        "year": 2022,
        "month": 3,
        "day": "auto",
        "bit_flag": 0
    },
    {
        "year": 2022,
        "month": 4,
        "day": "auto",
        "bit_flag": 2147483647
    },
    {
        "year": 2022,
        "month": 5,
        "day": 16,
        "bit_flag": 0
    }
];

const _Jandi = Jandi(Query);
console.log(_Jandi.map(e => e.join('')).join('\n'));