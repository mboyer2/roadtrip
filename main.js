var mainVm = new Vue({

	el: '#app',
	data: {
		camera: {
			displayCost: 0,
			displayWeight: 0,
			cost:  50,
			weight: 5,
			count: 0,
		},

		quarters: {
			displayCost: 0,
			displayWeight: 0,
			cost: 20,
			weight: 1,
			count: 0,
		},

		spare: {
			displayCost: 0,
			displayWeight: 0,
			cost: 100,
			weight: 40,
			count: 0,
		},

		chips: {
			displayCost: 0,
			displayWeight: 0,
			cost: 10,
			weight: 1,
			count: 0,
		},
		// bgColor: {backgroundColor:'white'},
		isValid: true,

		message: ''
	
	},
	computed: {
			totalCost: function() {
				let x = this.camera.displayCost + this.quarters.displayCost + this.spare.displayCost + this.chips.displayCost
				return x

			},
			totalWeight: function(){
				let y = this.camera.displayWeight + this.quarters.displayWeight + this.spare.displayWeight + this.chips.displayWeight
				return y
			},
		},
	
	methods:{

		subtract: function(thing){
			var that=this
			if (this[thing].count>0){
				this[thing].count --	
			}
			if (this[thing].displayCost>0){
				this[thing].displayCost = this[thing].displayCost-this[thing].cost
			}
			if (this[thing].displayWeight>0){
				this[thing].displayWeight=this[thing].displayWeight-this[thing].weight	

			$.post(
				'/validate', 
				{displayWeight: this[thing].displayWeight, displayCost: this[thing].displayCost}, function(data,status){
					
					console.log('its data!', data)
					console.log(status)

					// figure this out
					that.isValid=true 
					that.message = data
					
				}).fail(function(data){
					console.log(data)
					that.isValid = false

					that.message = data.responseText
				})
			}
		},

		add: function(thing){
			var that=this
			this[thing].count ++
			this[thing].displayCost = this[thing].displayCost + this[thing].cost
			this[thing].displayWeight = this[thing].displayWeight + this[thing].weight

			$.post(
				'/validate', 
				{displayWeight: this[thing].displayWeight, displayCost: this[thing].displayCost}, function(data,status){
					
					console.log('its data!', data)
					console.log(status)


					that.isValid=true 
					that.message = data

			}).fail(function(data){
					console.log(data)
					that.isValid = false
					that.message = data.responseText
				})
		}
	}
})