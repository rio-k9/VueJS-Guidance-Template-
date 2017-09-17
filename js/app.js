new Vue({

	el: '#vue-app',
	data: {
		name: 'Rio',
		job: 'Web Developer',
		website: 'https://github.com/rio-karim',
		websiteTag: '<a href="https://github.com/rio-karim"> Rio Karims GitHub'
	},

	el: '#vue-events',
	data: {
		age: 25
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
		}
	},

});
