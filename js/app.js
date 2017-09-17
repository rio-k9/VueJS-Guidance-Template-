new Vue({

	el: '#vue-app',
	data: {
		name: 'Rio',
		job: 'Web Developer',
		website: 'https://github.com/rio-karim',
		websiteTag: '<a href="https://github.com/rio-karim"> Rio Karims GitHub'
	},


	methods: {
		greet: function(time){
			return "Good " + time + " " + this.name;
		},

		add: function(){
			this.age++;
		},

		subtract: function(){
			this.age--;
		}
	},


	el: '#vue-events',
	data: {
		age: '25'
	},


});
