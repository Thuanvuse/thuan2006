function calculateCountdown() {
    const birthday = new Date('2006-03-29'); // Thay 'YYYY-MM-DD' bằng ngày sinh nhật của bạn
    const now = new Date();
    const timeDiff = birthday - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('countdown-timer').innerHTML =
        `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
}

setInterval(calculateCountdown, 1000);
