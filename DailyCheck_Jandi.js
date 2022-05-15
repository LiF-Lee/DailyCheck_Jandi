function Current_Date() {
    const Now = new Date();
    const Utc_Now = Now.getTime() + (Now.getTimezoneOffset() * 60 * 1000);
    const Korea_Time_Diff = 9 * 60 * 60 * 1000;
    const Korea_Time_Now = new Date(Utc_Now + Korea_Time_Diff);

    return [Korea_Time_Now.getFullYear(), Korea_Time_Now.getMonth() + 1, Korea_Time_Now.getDate()];
}

const current_date = Current_Date();
const Jandi = [[], [], [], [], [], [], []]
for (let i = 0; i < new Date(current_date[0], current_date[1], 0).getDate(); i++) {
    Jandi[i % 7].push((83748 >> i & 0b1) ? '🟩' : '⬜'); // 0b1110111110111010110011111101011
    // console.log(`${current_date[0]}년 ${current_date[1].toString().padStart(2, '0')}월 ${(i + 1).toString().padStart(2, '0')}일 ${(0b1110111110111011110011111101011 >> i & 0b1) ? '🟩' : '⬜'}`);
}
console.log(Jandi.join('\n'));