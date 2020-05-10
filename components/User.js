let User = new Vue({
	el: "#User",
	data: () => ({
		name: "Vtrrix",
		userData: [],
	}),
	methods: {
		fetchData: (name) => {
			fetch(`https://api.github.com/users/${name}`)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
				})
				.catch((err) => {
					console.log(err);
					alert("Sorry unable to get data");
				});
		},
	},
	created() {
		this.fetchData(this.name);
	},
});
