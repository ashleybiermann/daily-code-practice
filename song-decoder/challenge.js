function songDecoder(song){
  
  const regexWUB = /(WUB)/gm;
  const regexSpaces = /\s+/gm;
  let decoded = '';
  
  // replace all instances of 'WUB' with a ' '
  let wubsToSpaces = song.replace(regexWUB, ' ');

  // replace all groups of spaces with a single space
  let oneSpace = wubsToSpaces.replace(regexSpaces, ' ');

  if (oneSpace[0] === ' ' && oneSpace[oneSpace.length - 1] === ' ') {
    let removeHeading = oneSpace.slice(1,oneSpace.length);
    decoded = removeHeading.slice(0, (removeHeading.length - 1));
  } 
    else if (oneSpace[oneSpace.length - 1] === ' ') {
    decoded = oneSpace.slice(0, (oneSpace.length - 1) );
  } 
    else if (oneSpace[0] === ' ') {
    decoded = oneSpace.slice(1, oneSpace.length);
  } 
    else {
    decoded = oneSpace;
  }
  return decoded;
}

module.exports = songDecoder;