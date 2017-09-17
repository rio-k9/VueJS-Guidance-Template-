new Vue({

	el: '#vue-app',
	data: {
		name: 'Rio',
		nameL: "",
		ageL: "",
		age: 25,
		a: 0,
		b: 0,
		x: 0,
		y: 0,
		job: 'Web Developer',
		website: 'https://github.com/rio-karim',
		websiteTag: '<a href="https://github.com/rio-karim"> Rio Karims GitHub',
		available: false,
		nearby: false,
		error: false,
		success: false,
		characters: ['Tony Stark', 'Steven Rogers', 'Thor Odinson', 'Peter Parker'],
		enemies: [
			{ name: 'Ultron', age: 1, planet: "Earth" },
			{ name: 'Loki', age: 3000, planet: "Asgard" },
			{ name: 'Thanos', age: 9999, planet: "Titan" }
		]
	},

	methods: {
		/*
		addToA: function(){
			console.log('addToA');
			return this.a + this.age;
		},

		addToB: function(){
						console.log('addToB');
			return this.b + this.age;
		},
*/
		logName: function(){

		},
		logAge: function(){
			console.log('you entered your age');
		},
		greet: function(time){
			return "Good " + time + " " + this.name;
		},

		add: function(inc){
			this.age += inc;
		},

		subtract: function(dec){
			this.age -= dec;
		},

		updateXY: function(event){
			console.log(event);
			this.x=event.offsetX;
			this.y=event.offsetY;
		}
	},

	computed: {

			compClasses: function(){
				return{
					available: this.available,
					nearby: this.nearby
				}
			},

			addToA: function(){
				console.log('addToA');
				return this.a + this.age;
			},

			addToB: function(){
				console.log('addToB');
				return this.b + this.age;
			},

	}

});
