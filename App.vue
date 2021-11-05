<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.header{
		background-color:#5D91F7;
		color: white;
	}
	body{
		background-color: #e9e9e9;
	}
	.round-rect{
		border-radius: 10upx;
	}
</style>
