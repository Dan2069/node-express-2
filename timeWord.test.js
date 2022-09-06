const timeWord = require('./timeWord.js');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('result is a string', () => {
    expect(typeof timeWord("01:23")).toBe('string');
  });


  test('shows midnight', () => {
    expect(timeWord("00:00")).toBe('midnight');
  });

  test('shows noon', () => {
    expect(timeWord("12:00")).toBe('noon');
  });

  test('shows 11:59 PM to say Eleven Fifty Nine PM', () => {
    expect(timeWord("23:59")).toBe('Eleven fifty nine PM');
  });

  test('shows 6:30 PM to Six thirty PM', () => {
    expect(timeWord("18:30")).toBe('Six thirty PM');
  });

  test('shows 1:05 AM to One Oh five AM', () => {
    expect(timeWord("01:05")).toBe('One Oh five AM');
  });

  test('shows 9:15 AM to Nine fifteen AM', () => {
    expect(timeWord("09:15")).toBe('Nine fifteen AM');
  });

});