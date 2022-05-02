<script>
  import '$lib/styles/global.scss';
	//import { onMount, afterUpdate } from 'svelte';
	import data from './data';
	import Chart from './Graph.js'
	
	// Width and heigh which come from graph container and are passed in as the width and height of the svg
	let w;
  let h;
	const margin = { top: 50, right: 20, bottom: 30, left: 60 }
	$: boundedWidth = w - margin.left - margin.right
	$: boundedHeight = h - margin.top - margin.bottom
	
	// The chart props are reactive as they depend on let-declared variables 
	$: props = {
		width: w,
		height: h,
		margin: margin,
		boundedWidth: boundedWidth,
		boundedHeight: boundedHeight,
		fill: w >= 500 ? '#6b6065' : '#ee3e3e' // responsive as well
	}
	
	// Initialise the chart and the bound container into which it is injected
	let chartContainer;
	const chart = new Chart()
	
	// Set up the graph for the first time from an onMount; any constant props 
	// will be correctly passed at this point. Not strictly necessary; can be done from the 
	// reactive declaration below only as well, just pass it the selection and data as well 
	// 	onMount(() => {
	// 		chart
	// 			.selection(chartContainer)
	// 			.data(data)
	// 			.props(props)
	// 			.draw()
	// 	})
	
	// This is responsive and will update when any of the props or data update as needed
	// We don't need to use an afterUpdate
	$: {
		if (chartContainer) {
			chart
				.selection(chartContainer)
				.data(data)
				.props(props)
				.draw()
		}		
	}

</script>


<div
	class="chart-container"
	bind:clientWidth={w}
	bind:clientHeight={h}
	bind:this={chartContainer}
>
 <div class='graph-note'>resize window to see responsiveness</div>
</div>


<style lang="scss">
  @import '../../../styles/global.scss';
	div.chart-container {
    @include graph-border;
		width: 70%;
		max-width: 700px;
		height: 400px;
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
	:global(#x-axis-container g.tick line) {
		stroke: white;
	}
	:global(#x-axis-container g.tick text) {
		fill: white;
	}
	:global(#x-axis-container path.domain) {
		stroke: white;
	}
</style>