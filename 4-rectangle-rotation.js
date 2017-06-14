function rectangleRotation(a, b) {
  var len = 0;
  var wid = 0;
  var dotsLen = 0;
  var dotsWid = 0;
  var multiples = 0;
  if(a < b){
    len = b;
    wid = a;

  } else {
    len = a;
    wid = b;
  }
  dotsLen = Math.floor(len / Math.sqrt(2));
  dotsWid = Math.floor(wid / Math.sqrt(2));
  multiples = dotsLen * 2 + 1
  if(((dotsLen * dotsWid) + (dotsLen * (dotsWid + 1)) + (dotsWid + 1)) % 2 === 0){
    return (dotsLen * dotsWid) + (dotsLen * (dotsWid + 1)) + (dotsWid);
  } else {
    return (dotsLen * dotsWid) + (dotsLen * (dotsWid + 1)) + (dotsWid + 1);
  }
}
