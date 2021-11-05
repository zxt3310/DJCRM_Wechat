<template>
	<view class="text-content">
		<view class="header padding padding-bottom-xl">
			<p class="margin-bottom">客户管理</p>
			<u-search placeholder="请输入关键字"></u-search>
		</view>
		<view class="padding margin round-rect bg-white" style="margin-top: -30upx;">
			<p class="text-sm">客户概要</p>
			<view class="flex justify-around align-center text-center">
				<view class="text-xl text-center">
					5K
					<p class="text-xs text-gray">客户总数</p>
				</view>
				<view class="text-xl text-center">
					300
					<p class="text-xs text-gray">公司总数</p>
				</view>
				<view class="text-xl text-center">
					200
					<p class="text-xs text-gray">已拜访</p>
				</view>
				<view class="text-xl text-center">
					30
					<p class="text-xs text-gray">已合作</p>
				</view>
			</view>
		</view>
		<view class="bg-white padding">
			客户记录
			<view class="grid text-center col-4 margin-bottom">
				<view class="">
					<view class="cuIcon-newfill lg">
					</view>
					<p class="text-sm">Aifanfan</p>
				</view>
				<view class="">
					<view class="cuIcon-newfill lg">
					</view>
					<p class="text-sm">商务通</p>
				</view>
				<view class="">
					<view class="cuIcon-newfill lg">
					</view>
					<p class="text-sm">微信</p>
				</view>
				<view class="">
					<view class="cuIcon-newfill lg">
					</view>
					<p class="text-sm">企业微信</p>
				</view>
				<view class="">
					<view class="cuIcon-newfill lg">
					</view>
					<p class="text-sm">电话记录</p>
				</view>
				<view class="">
					<view class="cuIcon-newfill lg">
					</view>
					<p class="text-sm">拜访记录</p>
				</view>
				<view class="">
					<view class="cuIcon-newfill lg">
					</view>
					<p class="text-sm">合作记录</p>
				</view>
				<view class="">
					<view class="cuIcon-newfill lg">
					</view>
					<p class="text-sm">其他</p>
				</view>
			</view>
			<u-swiper :list="list"></u-swiper>
			<view class="margin-top">
				待办事宜
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
			}
		},
		methods: {

		}
	}
</script>

<style>
	@import "/colorui/main.css";
	@import "/colorui/icon.css";
</style>
