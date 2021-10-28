let styles = ['jazz', 'blues'];
styles.push('classic');
let middleElement = Math.floor((styles.length)/ 2);
console.log(middleElement);
styles[middleElement] = 'psytrance';
console.log(styles.shift(0));
styles.unshift('rap','reggy');
console.log(styles);
