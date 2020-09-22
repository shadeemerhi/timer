const alarmTimes = process.argv.slice(2);

for(let time of alarmTimes) {
  time = parseInt(time);
  if(time < 0 || isNaN(time)) {
    continue;
  } else {
    setTimeout(() => {
      console.log(time);
      process.stdout.write('\x07');
    }, time*1000);
  }
};