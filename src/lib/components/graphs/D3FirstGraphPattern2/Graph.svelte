<script>
	import '$lib/styles/global.scss';
	import { onMount, afterUpdate } from 'svelte';
	import data from './data';
	import Graph from './Graph.js'
	
	const props = {
		margin: { top: 50, right: 20, bottom: 30, left: 60 },
	}
	
	// Initialise the chart and the bound container into which it is injected
	let chartContainer;
	const chart = new Graph()

	// This works exactly the same as the previous approach but we need an extra event listener for 
	// resize and then internal to the chart logic to adjust properties based on width
	const resize = () => chart.draw();
  onMount(() => {
    chart.selection(chartContainer).data(data).props(props).draw();
    if (window) window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  });
	
	// However, if any of the props passed to the chart change we also need an afterUpdate 
	// which might end up firing more than required 

</script>


<div class="chart-container" bind:this={chartContainer}>
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