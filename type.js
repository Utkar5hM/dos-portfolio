// set up text to print, each item in array is new line
var aText = new Array(
  '[    0.604303] Name: Utkarsh M',
  '[    0.606518] Interests: Many (-.-) Zzz…',
  '[    0.606934] LinkedIn Profile: <a href="https://www.linkedin.com/in/utkar5hm/">/Utkar5hM</a>',
  '[    0.607323] Github Profile: <a href="https://github.com/Utkar5hM">@Utkar5hM</a>',
  '[    0.607774] Twitter Profile: <a href="https://twitter.com/Utkar5hm">@Utkar5hM</a>',
  '[    0.608222] Blogs: <a href="https://utkar5hm.github.io">utkar5hm.github.io</a>',
);
var iSpeed = 1; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = ' ';
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById('typedtext');
  while (iRow < iIndex) {
    sContents += aText[iRow++] + '<br />';
  }
  destination.innerHTML =
    sContents + aText[iIndex].substring(0, iTextPos) + '_';
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout('typewriter()', 15);
    }
  } else {
    setTimeout('typewriter()', iSpeed);
  }
}

typewriter();
