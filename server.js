const parse = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];
let total = 0;

const isHabitablePlanet = (planet)=> {
	// kw for habitability. result is 2300+
	return planet['koi_disposition'] === 'CONFIRMED'
	// radiation flux 0.36 to 2.11. result is 30
	&& planet['koi_insol'] > 0.36 
	&& planet['koi_insol'] < 1.11
	// radius 1.6 x earth, result is 8
	&& planet['koi_prad'] < 1.6;
	// kepler 442b - super earth

}

// stream api for large data

fs.createReadStream('ztmnode/kepler_data.csv')
	.pipe(parse({
		comment: '#',
		columns: true,
	}))
	.on('data', data => {

		if(isHabitablePlanet(data)){
			habitablePlanets.push(data);
		}

		total++;
		

	})
	.on('error', err => {

		console.log('-- error -----')
		console.log(err)

	})
	.on('end', ()=> {
		// console.log(habitablePlanets);
		console.log(habitablePlanets.length, '/', total);
		console.log('done');

	});

