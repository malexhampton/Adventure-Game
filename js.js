var inside = function(){
 var input = prompt("Rain pitters on the roof, alarm clock blaring. You can a.) get out of bed, or b.) snooze for five more mintues");
  if (input.includes("a")){
    awake()
  }
    if (input.includes("b")){
      snooze()
    }
  }
var awake = function(){
  var input = prompt("Thunder rumbles outside again as you get ready, a quick flash of lightening illuminates the room. You get ready quickly and decide if a.) you should head out early, or b.) sit on the couch to eat up time");
    if (input.includes("a")){
    workEarly()
  }
    if (input.includes("b")){
    sitCouch()
  }

}

var workEarly = function(){
  var input = prompt("You huddle in your raincoat and rush to your car, dreading the chit chat by the watercooler already");
  alert ("You lived! (mediocre ending)")
}

var sitCouch = function(){
  var input = prompt("Who needs to constantly be on time for work? You rest on the couch, kicking your feet up. You notice movement in the hallway shadows. Do you a.) investigate, b.) pretend like you didn't see it, or c.) maybe it is time to go to work");
  if (input.includes ("a")){
    investigate()
  }
  if (input.includes ("b")){
    leaveAlone()
  }
  if (input.includes ("c")){
    workEarly()
  }
}

var investigate = function(){
  var input = prompt ("You get up and cross the room to investigate, the shadows seeming to loom over you. Another thump, this time it sounds like it's coming from the front door. Do you a.) go open it, or b.) hide under the bed");
  if (input.includes ("a")){
    openDoor()
  }
  if (input.includes ("b")){
    underBed()
  }
}

var leaveAlone = function(){
  var input = prompt ("You decide to leave whatever is over there the hell alone. You lay down once again, a foot dangling off the edge. It was too late by the time you felt claws wrap around your ankles, quickly pulling you into darkness.")
}

var snooze = function(){
  var input = prompt ("You hit the snooze button on your phone. You wake up again, sometime later, because of a loud thumping noise that seemed to come from your living room. Do you a.) ignore it, b.) start getting ready for work, or c.) investigate it");
  if (input.includes (a)){
    investigate()
  }
  if (input.includes (b)){
    getReady()
  }
  if (input.includes (c)){
    leaveAlone()
  }
}

inside()
  