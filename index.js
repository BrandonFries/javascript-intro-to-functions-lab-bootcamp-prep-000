function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(shout('HELLO'))
}
function logWhisper(string) {
  console.log(whisper('hello'))
}
function sayHiToGrandma(string) {
  it('returns "I can\'t hear you!" if `string` is lowercase', function()
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
}
