// const { createHmac } = await import('node:crypto');

// const secret = 'abcdefg';
// const hash = createHmac('sha256', secret)
// .update('I love cupcakes')
// .digest('hex');
// console.log(hash);

const { StringDecoder } = require('node:string_decoder');
const decoder = new StringDecoder('utf8');

const cent = Buffer.from([0xC2, 0xA4]);
console.log(decoder.write(cent));

const euro = Buffer.from([0xE2, 0x82, 0xAC]);
console.log(decoder.write(euro));