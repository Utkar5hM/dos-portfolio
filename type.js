// set up text to print, each item in array is new line
var aText = new Array(
  '[    0.604303] Name: Utkarsh M',
  '[    0.605392] Date Of Birth: 25th October 2001',
  '[    0.605752] Institute: National Institute of Technology Karnataka, Surathkal',
  '[    0.606097] Degree: Btech in Electronics and Communication Engineering',
  '[    0.606518] Interests: NULL',
  '[    0.606934] LinkedIn Profile: <a href="https://www.linkedin.com/in/utkar5hm/">/Utkar5hM</a>',
  '[    0.607323] Github Profile: <a href="https://github.com/Utkar5hM">@Utkar5hM</a>',
  '[    0.607774] Instagram Profile: <a href="https://www.instagram.com/utkar5hm/">@Utkar5hM</a>',
  '[    0.608222] Facebook Profile: <a href="https://www.facebook.com/utkar5hM">/Utkar5hM</a>',
  '[    0.608340] Youtube Channel: <a href="https://www.youtube.com/channel/UCTA5vSw4kZs04TqCw6nDAMg">Utkarsh M</a>',
  '[    0.608736] TryhackMe Profile: <a href="https://tryhackme.com/p/Utkar5hM">/Utkar5hM</a>',
  '[    0.608746] Medium Profile: <a href="https://medium.com/@utkar5hm">/Utkar5hM</a>',
  '[    0.609248] Resume: <a href="https://drive.google.com/drive/folders/1h34oaLfqFc5VKA0_lWYup3R-gTgGr_iv?usp=sharing">Gdrive Link</a>',
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
