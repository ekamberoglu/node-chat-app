var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Kayroc';
    var text = 'Some message';
    var message = generateMessage(from, text);

    // expect(message.from).toBe(from);
    // expect(message.text).toBe(text);
    expect(message.ceatedAt).toBeA('number');
    expect(message).toInclude({from, text}); //ES6

    // expect(message).toInclude({
    //   from: from,
    //   text: text
    // });
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Kayroc';
    var latitude = 20;
    var longitude = 35;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var message = generateLocationMessage(from, latitude, longitude);

     expect(message.ceatedAt).toBeA('number');
     expect(message).toInclude({from, url});
  });
});