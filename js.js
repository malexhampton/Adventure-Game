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

var openDoor = function(){
  var input = prompt ("You start to cross the house to get to the front door, when another bang goes off. It's hard to tell if any of the banging was thunder or not, when you notice a kitchen knife on the edge of the counter. a.) take it, b.) leave it");
  if (input.includes (a)){
    takeKnife()
  }
  if (input.includes ("b")){
    leaveKnife()
  }
}

var takeKnife = function(){
  var input = prompt ("The handle feels sturdy in your hand as you approach the door. Just as you go to turn the knob, the door caves in, a monster in a vaugley human shape with maggots dripping off stands there, filling the house with it's stench. Do you a.) attack with the knife, or b.) retreat into your room");
  if (input.includes ("a")){
    attack()
  }
  if (input.includes ("b")){
    alert("You attempted to run into the recesses of your house, away from the monster, but it was surprisingly quick. It grabbed hold of you, squishing grubs between your skin and it's crawling body. You hardly have time to wonder about an afterlife. (You died! (bad end)");
  }
}

var leaveKnife = function(){
  alert ("You decide to leave the knife on the counter, you don't think anyone would use the cover of a storm to do anything nefarious, and you were right! A young woman stands in your doorway, asking to use your phone. You offer her a ride instead, and make it into the office only 15 minutes late. You lived! (good ending)");
}

var attack = function(){
  alert("You swing the knife down, slashing through grubs and maggots, blackened blood spilling onto your 20 year old shag carpet. You breifly wonder if that's the worst thing the carpet has seen. The monster recoils, then goes to slash at you with its other hand. You take the opportunity to plunge the knife in its chest, quickly grabbing your keys on the way out of the door. Only 20 minutes late to work, but your boss did scold you. (You lived! (good ending)");
}

var underBed = function(){
  var input = prompt ("With your heart pounding harder than the thunder is clapping outside, having decided that if you hide under your bed, it's not like anything else can. You get squeezed under just in time to hear your front door crash in, the sound of heavy boots on your carpet. Do you a.) call out, or b.) stay there, silent");
  if (input.includes ("a")){
    speak()
  }
  if (input.includes ("b")){
    hidden()
  }
}

var speak = function(){
  alert ("")
}

var leaveAlone = function(){
  var input = prompt ("You decide to leave whatever is over there the hell alone. You lay down once again, a foot dangling off the edge. It was too late by the time you felt claws wrap around your ankles, quickly pulling you into darkness.");
  alert ("You Died! (bad ending)")
}

var snooze = function(){
  var input = prompt ("You hit the snooze button on your phone. You wake up again, sometime later, because of a loud thumping noise that seemed to come from your living room. Do you a.) ignore it, b.) start getting ready for work, or c.) investigate it");
  if (input.includes ("a")){
    investigate()
  }
  if (input.includes ("b")){
    getReady()
  }
  if (input.includes ("c")){
    leaveAlone()
  }
}

var getReady = function(){
  var input = prompt ("There's no time like the present to start getting ready. Just after you've slipped your work shirt on over your head, you hear another thump, this time sounding like it was from the roof. Do you a.) run out to your car and head to work, b.) hit your broom against the ceiling");
  if (input.includes ("a")){
    workEarly()
  }
  if (input.includes ("b")){
    bangCeiling()
  }
}

inside()
  