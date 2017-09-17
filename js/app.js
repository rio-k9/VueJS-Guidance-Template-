new Vue({

	el: '#vue-app',
	data: {
		name: 'Rio',
		age: 25,
		x: 0,
		y: 0,
		job: 'Web Developer',
		website: 'https://github.com/rio-karim',
		websiteTag: '<a href="https://github.com/rio-karim"> Rio Karims GitHub'
	},

	methods: {
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
