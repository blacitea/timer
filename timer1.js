let times = process.argv.slice(2);
for (let i = 0; i < times.length; i++) {
  if (times[i] > 0 && !isNaN(Number(times[i]))) {
    setTimeout(() => {
      process.stdout.write(`Alarm! It has been ${times[i]} seconds \n`);
    }, Number(times[i]) * 1000);
  }
}