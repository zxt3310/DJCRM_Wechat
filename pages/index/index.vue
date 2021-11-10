<template>
	<view class="content">
		<view class="">
			欢迎登陆 大鲸
		</view>
		<u-form :model="info" ref="uForm">
			<u-form-item> <u-input v-model="info.account" placeholder="请输入账号" placeholderStyle="font-size:18px;"></u-input> </u-form-item>
			<u-form-item> <u-input v-model="info.password" placeholder="请输入密码"></u-input> </u-form-item>
		</u-form>
		<button style="background-color: #F9DF87; color: white;margin-top: 20px;" type="default" @click="toTeacher">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:{
					style:{"font-size":"30px"},
					account:"2020-2",
					password:"123456"
				},
			}
		},
		onLoad() {
			
			
		},
		methods: {
			toTeacher(){
				uni.navigateBack({
					animationType:"slide-out-top"
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.header{
		font-size: 50upx;
		margin-top: 80upx;
	}
</style>
