function Current_Date() {
    const Now = new Date();
    const Utc_Now = Now.getTime() + (Now.getTimezoneOffset() * 60 * 1000);
    const Korea_Time_Diff = 9 * 60 * 60 * 1000;
    const Korea_Time_Now = new Date(Utc_Now + Korea_Time_Diff);

    return [
        Korea_Time_Now.getFullYear(), 
        Korea_Time_Now.getMonth() + 1, 
        Korea_Time_Now.getDate(), 
        Korea_Time_Now.getHours(), 
        Korea_Time_Now.getMinutes(), 
        Korea_Time_Now.getSeconds()
    ];
}

function Jandi(query, active_txt = '🟩', inactive_txt = '⬜') {
    const _Jandi = [[], [], [], [], [], [], []];
    let _Jandi_Fix = 0;
    for (let i = 0; i < query.length; i++) {
        const q = query[i];
        for (let j = 0; j < new Date(q.year, q.month, q.day === 'auto' ? 0 : q.day).getDate(); j++) {
            _Jandi[(j + _Jandi_Fix) % 7].push((q.bit_flag >> i & 1) ? active_txt : inactive_txt);
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
        "bit_flag": 0
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
        "bit_flag": 0
    },
    {
        "year": 2022,
        "month": 5,
        "day": 16,
        "bit_flag": 0
    },
];

const current_date = Current_Date();
const _Jandi = Jandi(Query);
// for (let i = 0; i < new Date(current_date[0], current_date[1], 0).getDate(); i++) {
//     Jandi[(i + 0) % 7].push((1010998763 >> i & 1) ? '🟩' : '⬜');
// }
// for (let i = 0; i < new Date(current_date[0], current_date[1], 0).getDate(); i++) {
//     Jandi[(i + 0) % 7].push((2147483647 >> i & 1) ? '🟩' : '⬜');
// }
// for (let i = 0; i < new Date(current_date[0], current_date[1], 0).getDate(); i++) {
//     Jandi[(i + 3) % 7].push((0 >> i & 1) ? '🟩' : '⬜');
// }
// for (let i = 0; i < new Date(current_date[0], current_date[1], 0).getDate(); i++) {
//     Jandi[(i + 6) % 7].push((2147483647 >> i & 1) ? '🟩' : '⬜');
// }
// for (let i = 0; i < new Date(current_date[0], current_date[1], 0).getDate(); i++) {
//     Jandi[(i + 9) % 7].push((0 >> i & 1) ? '🟩' : '⬜');
// }
// for (let i = 0; i < new Date(current_date[0], current_date[1], 0).getDate(); i++) {
//     Jandi[(i + 12) % 7].push((2147483647 >> i & 1) ? '🟩' : '⬜');
// }
console.log(_Jandi);