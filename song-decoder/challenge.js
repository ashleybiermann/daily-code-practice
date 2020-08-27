function songDecoder(song){
  const regexWUB = /(WUB)/gm;
  const regexSpaces = /\s+/gm;
  let decoded = '';

  // replace all instances of 'WUB' with a ' '
  let wubsToSpaces = song.replace(regexWUB, ' ');
  // replace all groups of spaces with a single space
  let oneSpace = wubsToSpaces.replace(regexSpaces, ' ');

  // check for and remove heading space
  if (oneSpace[0] === ' ') {
    decoded = oneSpace.slice(1,oneSpace.length);
  }

  // check for and remove trailing space
  if (oneSpace[oneSpace.length - 1] === ' ') {
    console.log('in the if');
    decoded = oneSpace.slice(0, (oneSpace.length - 1) )
  }
  
  return decoded;
}