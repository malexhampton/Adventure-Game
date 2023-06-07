var inside = function(){
 var input = prompt ("Rain pitters on the roof, alarm clock blaring. You can a.) get out of bed, or b.) snooze for five more mintues")
  if (input.includes("a")){
    awake()
  }
    if (input.includes("b")){
      snooze()
    }
  }
var awake = function(){
  var input = prompt ("Thunder rumbles outside again as you get ready, a quick flash of lightening illuminates the room. You get ready quickly and decide if a.) you should head out early, or b.) sit on the couch to eat up time")
    if (input.includes("a")){
    workEarly()
  }
    if (input.includes("b")){
    sitCouch()
  }

}

var workEarly = function(){
  var input = prompt ("You huddle in your raincoat and rush to your car, dreading the shit chat by the watercooler already")
  alert ("mediocre ending")
}

var sitCouch = function(){

}

var snooze = function(){
  var input = prompt ()
}
  