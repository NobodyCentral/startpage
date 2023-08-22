const element = document.getElementById('date');

function setTime() {
    const date = new Date();

    const options = {
        year: '2-digit',
        month: '2-digit',
        weekday: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    const formattedDate = date.toLocaleString('en-GB', options);
    const [dayOfWeek, dateStr, time] = formattedDate.split(', ');

    element.innerHTML = dayOfWeek+' 󰍴 '+time+' 󰍴 '+dateStr
};

setInterval(setTime, 1000);

setTime()