<script lang="ts">
	import { onMount } from "svelte";
	import {goto} from "@sapper/app";
	let win: any = {};
	const nav =(page)=>{
		goto(page)
	}
	onMount(() => {
		win = window;
		win.$(function () {
			var setTilesAreaSize = function () {
				var width =
					window.innerWidth > 0 ? window.innerWidth : screen.width;
				var groups = win.$(".tiles-group");
				var tileAreaWidth = 80;
				win.$.each(groups, function () {
					if (width <= win.Metro.media_sizes.LD) {
						tileAreaWidth = width;
					} else {
						tileAreaWidth += win.$(this).outerWidth() + 80;
					}
				});

				win.$(".tiles-area").css({
					width: tileAreaWidth,
				});

				if (width > win.Metro.media_sizes.LD) {
					win.$(".start-screen").css({
						overflow: "auto",
					});
				}
			};

			setTilesAreaSize();

			win.$.each(win.$("[class*=tile-]"), function () {
				var tile = win.$(this);
				setTimeout(function () {
					tile.css({
						opacity: 1,
						transform: "scale(1)",
						transition: ".3s",
					}).css("transform", false);
				}, Math.floor(Math.random() * 500));
			});

			win.$(".tiles-group").animate({
				left: 0,
			});

			win.$(window).on(
				win.Metro.events.resize + "-start-screen-resize",
				function () {
					setTilesAreaSize();
				}
			);

			win.$(window).on(win.Metro.events.mousewheel, function (e) {
				var up = e.deltaY < 0 ? -1 : 1;
				var scrollStep = 50;
				win.$(".start-screen")[0].scrollLeft += scrollStep * up;
			});
		});
	});
</script>

<div class="container-fluid start-screen h-100">
	<h1 class="start-screen-title">Start</h1>

	<div class="tiles-area clear">
		<div
			class="tiles-grid tiles-group size-2 fg-white"
			data-group-title="General"
		>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				on:click={() => {
					nav("competition");
				}}
				data-role="tile"
				class="bg-orange fg-white"
				data-size="wide"
			>
				<span class="mif-chrome icon" />
				<span class="branding-bar">Manage Competition</span>
			</div>
			<a
				href="/competition"
				data-role="tile"
				class="bg-indigo fg-white"
			>
				<span class="mif-github icon" />
				<span class="branding-bar">Github</span>
				<span class="badge-bottom">30</span>
			</a>
			<div data-role="tile" class="bg-cyan fg-white">
				<span class="mif-envelop icon" />
				<span class="branding-bar">Email</span>
				<span class="badge-bottom">10</span>
			</div>

			<div data-role="tile" data-size="small">
				<span class="mif-apple icon" />
			</div>
			<div data-role="tile" data-size="small" class="bg-red fg-white">
				<span class="mif-bell icon" />
			</div>
			<div
				data-role="tile"
				data-size="small"
				class="bg-teal fg-white col-1 row-6"
			>
				<span class="mif-windows icon" />
			</div>
			<div
				data-role="tile"
				data-size="small"
				class="bg-brown fg-white col-2 row-6"
			>
				<span class="mif-wind icon" />
			</div>
			<div data-role="tile" class="bg-cyan fg-white">
				<span class="mif-table icon" />
				<span class="branding-bar">Tables</span>
			</div>
		</div>

		<div
			class="tiles-grid tiles-group size-2 fg-white"
			data-group-title="Images"
		>
			<div data-role="tile" data-cover="../../images/me.jpg">
				<span class="branding-bar">Sergey Pimenov</span>
			</div>
			<div
				data-role="tile"
				data-effect="animate-fade"
				data-effect-duration="1000"
			>
				<div class="slide" data-cover="../../images/me2.jpg" />
				<div class="slide" data-cover="../../images/me.jpg" />
				<div class="slide" data-cover="../../images/me3.jpg" />
				<span class="branding-bar">Gallery</span>
			</div>
			<div
				data-role="tile"
				data-size="wide"
				data-effect="animate-slide-left"
			>
				<div class="slide" data-cover="../../images/1.jpg" />
				<div class="slide" data-cover="../../images/2.jpg" />
				<div class="slide" data-cover="../../images/3.jpg" />
				<div class="slide" data-cover="../../images/4.jpg" />
				<div class="slide" data-cover="../../images/5.jpg" />
				<span class="branding-bar">Gallery</span>
			</div>
			<div data-role="tile" data-size="wide" data-effect="image-set">
				<img src="../../images/jeki_chan.jpg" />
				<img src="../../images/shvarcenegger.jpg" />
				<img src="../../images/vin_d.jpg" />
				<img src="../../images/jolie.jpg" />
				<img src="../../images/jek_vorobey.jpg" />
			</div>
		</div>

		<div
			class="tiles-grid tiles-group size-1 fg-white"
			data-group-title="Office"
		>
			<div data-role="tile" data-size="small">
				<img src="../../images/outlook.png" class="icon" />
			</div>
			<div data-role="tile" data-size="small" class="bg-brown">
				<img src="../../images/word.png" class="icon" />
			</div>
			<div data-role="tile" data-size="small" class="bg-green">
				<img src="../../images/excel.png" class="icon" />
			</div>
			<div data-role="tile" data-size="small" class="bg-red">
				<img src="../../images/access.png" class="icon" />
			</div>
			<div data-role="tile" data-size="small" class="bg-teal">
				<img src="../../images/powerpoint.png" class="icon" />
			</div>
		</div>

		<div
			class="tiles-grid tiles-group size-2 fg-white"
			data-group-title="Games"
		>
			<div
				data-role="tile"
				data-cover="../../images/Battlefield_4_Icon.png"
			>
				<span class="branding-bar">Battlefield 4</span>
			</div>
			<div data-role="tile" class="bg-green">
				<img src="../../images/x-box.png" class="icon" />
				<span class="branding-bar">XBOX ONE</span>
			</div>
			<div
				data-role="tile"
				data-size="wide"
				data-cover="../../images/x-box.png"
			>
				<span class="branding-bar">XBOX LIVE</span>
				<span class="badge-top">5</span>
			</div>
		</div>
	</div>
</div>

<style>
	.start-screen {
		min-width: 100%;
		height: 100%;
		position: relative;
		padding-bottom: 20px;
	}
	.start-screen-title {
		position: fixed;
		top: 20px;
		left: 80px;
		display: none;
	}
	[class*="tile-"] {
		-webkit-transform: scale(0.8);
		-ms-transform: scale(0.8);
		transform: scale(0.8);
	}
	.tiles-group {
		margin-left: 0;
		margin-top: 50px;
	}
	@media all and (min-width: 768px) {
		.start-screen-title {
			display: block;
		}
		.start-screen {
			padding: 140px 80px 0 0;
		}
		.tiles-group {
			left: 100px;
		}
		.tiles-group {
			margin-left: 80px;
		}
	}
</style>
