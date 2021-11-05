<template>
	<view>
		<view class="header padding text-white">
			账户
			<view class="flex justify-around align-center text-center">
				<view class="text-xl text-center">
					200
					<p class="text-xs">云调词</p>
				</view>
				<view class="text-xl text-center">
					1.5万
					<p class="text-xs">调词次数</p>
				</view>
				<view class="text-xl text-center">
					20K
					<p class="text-xs">账户余额</p>
				</view>
				<view class="text-xl text-center">
					3K
					<p class="text-xs">每日预算</p>
				</view>
			</view>
			<view class="padding-sm">
				<u-subsection :list="channel" 
							  :current="curChl"
							  active-color="white"
							  inactive-color="#518CDC"
							  bg-color="white"
							  button-color="#518CDC"
							  @change="swtChannel"></u-subsection>
			</view>
		</view>
		<view class="padding">
			<view class="padding bg-white flex justify-between align-center text-sm round-rect" style="margin-top: -60upx;">
				<view class="">
					搜索推广计划
				</view>
				<view class="">
					<u-subsection :list="status"
									   mode="subsection"
									   font-size="24"
									   height="50"
									  :current="curState"
									  active-color="#518CDC"
								 	  @change="swtState"></u-subsection>
				</view>
				<view class="">
					更多
				</view>
			</view>
			<view class="flex justify-between align-center text-center bg-white padding round-rect margin-top">
				<view class="">
					<view class="cuIcon-apps lg"/>
					百度
				</view>
				<view class="">
					380
					<p class="text-xs">消耗</p>
				</view>
				<view class="">
					8K
					<p class="text-xs">余额</p>
				</view>
				<view class="">
					400
					<p class="text-xs">每日预算</p>
				</view>
				<view class="text-xs">
					更多
				</view>
			</view>
			<view class="flex justify-between align-center text-center bg-white padding round-rect margin-top">
				<view class="">
					<view class="cuIcon-apps lg"/>
					搜狗
				</view>
				<view class="">
					380
					<p class="text-xs">消耗</p>
				</view>
				<view class="">
					8K
					<p class="text-xs">余额</p>
				</view>
				<view class="">
					400
					<p class="text-xs">每日预算</p>
				</view>
				<view class="text-xs">
					更多
				</view>
			</view>
			<view class="flex justify-between align-center text-center bg-white padding round-rect margin-top">
				<view class="">
					<view class="cuIcon-apps lg"/>
					神马
				</view>
				<view class="">
					380
					<p class="text-xs">消耗</p>
				</view>
				<view class="">
					8K
					<p class="text-xs">余额</p>
				</view>
				<view class="">
					400
					<p class="text-xs">每日预算</p>
				</view>
				<view class="text-xs">
					更多
				</view>
			</view>
			<view class="flex justify-between align-center text-center bg-white padding round-rect margin-top">
				<view class="">
					<view class="cuIcon-apps lg"/>
					360
				</view>
				<view class="">
					380
					<p class="text-xs">消耗</p>
				</view>
				<view class="">
					8K
					<p class="text-xs">余额</p>
				</view>
				<view class="">
					400
					<p class="text-xs">每日预算</p>
				</view>
				<view class="text-xs">
					更多
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				channel:[
					{
						name:"搜索引擎渠道"
					},
					{
						name:"信息流渠道"
					}
				],
				curChl:0,
				status:[
					{name:"暂停"},
					{name:"开启"}
				],
				curState:0,
			}
		},
		methods: {
			swtChannel(e){
				
			},
			swtState(e){
			}
		}
	}
</script>

<style>
	@import "/colorui/main.css";
	@import "/colorui/icon.css";
	
</style>
