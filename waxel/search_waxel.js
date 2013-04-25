use Universe_A;

db.waxels.find({
	temperature:{$gt:70, $lt:90},
	'force.a':{$gt:0, $lt:90},
	'force.b':{$lt:0},
	'wind.s': {$gt:5},
	humidity: {$gt:40},
	'vibration.a': {$gt:0},
	'light.r': {$gt:0},
	'light.g': {$gt:0},
	'light.b': {$gt:0}
});

