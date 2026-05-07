function showTime() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  console.log(time);
}
setInterval(showTime, 1000);
