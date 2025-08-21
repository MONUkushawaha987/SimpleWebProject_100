const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (event) {
  // event.pageX --> across
  // event.pageY --> up and down
  // console.log(event);
  moveCursor(event.pageX, event.pageY);
});