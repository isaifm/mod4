(function (window) {
  var byeSpeaker = {};
  //johnGreeter.name = "John";
  var speakWord = "Bye ";
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker;

})(window);