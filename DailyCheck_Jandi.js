function Current_Date() {
    const now = new Date();
    const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
    const koreaTimeDiff = 9 * 60 * 60 * 1000;
    const koreaNow = new Date(utcNow + koreaTimeDiff);

    return [koreaNow.getFullYear(), koreaNow.getMonth() + 1, koreaNow.getDate()];
}

const current_date = Current_Date();
for (let i = 0; i < new Date(current_date[0], current_date[1], 0).getDate(); i++) {
    console.log(`${current_date[0]}년 ${current_date[1].toString().padStart(2, '0')}월 ${(i + 1).toString().padStart(2, '0')}일 ${parseInt((0b1110111110111011110011111101011 >> i & 0b1).toString(), 2)}`);
}