new Vue({

	el: '#vue-app',
	data: {
		name: 'Rio',
		nameL: "",
		ageL: "",
		age: 25,
		x: 0,
		y: 0,
		job: 'Web Developer',
		website: 'https://github.com/rio-karim',
		websiteTag: '<a href="https://github.com/rio-karim"> Rio Karims GitHub'
	},

	methods: {
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

});
