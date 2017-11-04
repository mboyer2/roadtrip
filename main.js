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
			bgColor: function() {
				if (this.totalCost>200 || this.totalWeight>200) {
					return {backgroundColor:'red'};
				} else {
					return {backgroundColor:'white'};
				}
			},

			


		},
	
	methods:{

		subtract: function(thing){
			if (this[thing].count>0){
				this[thing].count --	
			}
			if (this[thing].displayCost>0){
				this[thing].displayCost = this[thing].displayCost-this[thing].cost
			}
			if (this[thing].displayWeight>0){
				this[thing].displayWeight=this[thing].displayWeight-this[thing].weight	
			}

		},

		add: function(thing){
			this[thing].count ++
			this[thing].displayCost = this[thing].displayCost + this[thing].cost
			this[thing].displayWeight = this[thing].displayWeight + this[thing].weight	
		}

		



	}
})