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
  return ("I can't hear you!")
}
function sayHiToGrandma(string){
  return ('yes indeed')
}
expect(whisper('yes indeed')).toEqual("I cann't hear you!")
