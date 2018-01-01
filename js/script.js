var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
//console.log(text);

var dinosaur = 'triceratops';
//console.log(dinosaur);

var dinosaurBigLetters = dinosaur.toUpperCase();
//console.log(dinosaurBigLetters);

var textTrue = text.replace('Velociraptor', dinosaurBigLetters);
//console.log(textTrue);

var finale = textTrue.slice(0, textTrue.length / 2);
console.log(finale);
