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
  ('returns "I can\'t hear you!" if `string` is lowercase')
  (sayHiToGrandma('hello')).toEqual("I can't hear you!")
}
function sayHiToGrandma(string) {
  ('returns "YES INDEED!" if `string` is uppercase')
    (sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
}
function sayHiToGrandma(string) {
  ('returns "I love you, too." if `string` is "I love you, Grandma."`')
  (sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
}
