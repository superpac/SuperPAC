use Universe_A

db.waxels.save({
	temperature:75 /*F*/,
	force:{a:70.2, b:-12.5, g:124.1, f:1 /*N*/},
	smell:"rotten",
	wind:{a:30.2, b:95.4, g:34.1, s:31 /*mph*/, t: 63.4 /*F*/},
	humidity: 55 /*%*/,
	vibration: {type:"linear",a:30.2, b:95.4, g:34.1, a: .001 /*inches*/},
	static_electricity: 10 /*v*/,
	light: {type:'rgb256', r:1, g:2, b:3},
	sound: [23,11,23,45],
	texual: "dog licking happily",
	waxel: { x: 190, y: 45.5, z:-41, 
				a: 24.4, b: 43.2, g: -10.2,
				ts: 1349929606000,
				visual:{frame_index:12345678910,},
            audio: {audio_index:12345678910,},
	}
});
