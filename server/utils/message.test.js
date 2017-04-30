var expect = require('expect');

var {generateMessage} = require('./message');

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