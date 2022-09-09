<script>
	import * as d3 from 'd3';
  	import { appendSelect } from 'd3-appendselect';
  	import _ from 'lodash';
	d3.selection.prototype.appendSelect = appendSelect;
	import { initialData, changedData } from './data';
	import { fly, fade, slide, crossfade} from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	
	let data = initialData
	let enter = false
	
	// Width and heigh which come from graph container 
	// and are passed in as the width and height of the svg
	let w;
	let h;
	const margin = { top: 50, right: 0, bottom: 50, left: 0 }
	$: boundedWidth = w - margin.left - margin.right
	$: boundedHeight = h - margin.top - margin.bottom

	// Scales 
	$: yScale = d3.scalePoint()
		.domain(initialData.map(d => d.id))
		.range([0, boundedHeight])

	const colourScale = ({
		'cat': '#219ebc',
		'panda': '#ee3e3e',
		'dog': '#6b6065'
		})

	$: radiusScale = d3.scaleLinear()
		.domain(d3.extent(data, d => d.value))
		.range([20, 50])

	// Custom transition - not used here but left as an example
	const customTransition = (node, { delay, duration }) => {
		const o = +getComputedStyle(node).opacity;
		const existingTransform = getComputedStyle(node).transform.replace('none', '');
		return {
			delay, 
			duration,
			css: t => {
				const eased = cubicOut(t);

				return `
					transform: scale(${t});
					opacity: ${t * o};
					`
			}
		};
	}

</script>


<div class='buttons'>
	<button on:click={() => { 
		data = initialData
		enter = true 
		}}>Enter data</button>
	<button on:click={() => { 
		data = changedData 
		}}>Update data</button>
</div>
<div
	class="graph-container"
	bind:clientWidth={w}
	bind:clientHeight={h}
>
	<div class='graph-note'>click on buttons to see graph</div>
	<svg width={w} height={h}>
		<g transform='translate({margin.left}, {margin.top})'>
			{#each data as d, i (d.id)}
				{#if enter}
					<circle
						id={d.id}
						in:fly={{ x: -300, duration: 200 * i, delay: 300 }}
						out:fly={{x: 200, duration: 100 * i}}
						cx={boundedWidth/2}
						cy={i * 80}
						fill={colourScale[d.category]}
						r={radiusScale(d.value)}
					></circle>
				{/if}
			{/each}
		</g>
	</svg>
</div>



<style lang="scss">
  @import '../../../styles/global.scss';
	div.graph-container {
    @include graph-border;
		width: 70%;
		max-width: 700px;
		height: 500px;
		margin: auto;
		position: relative;
	}
  .graph-note {
		position: absolute;
		background-color: $accent-color;
		color: $light-color;
		padding: 2px 4px;
		top: 10px;
		right: -1px;
	}
	circle {
		transition: all 1s;
	}
	.buttons {
		margin: 10px auto 20px;
		text-align: center;
		button {
			background-color: $light-color;
			color: $dark-color;
			border: 2px solid $accent-color;
			padding: 5px 15px;
			margin: 5px;
			font-size: 16px;
			cursor: pointer;
		}
	}
</style>