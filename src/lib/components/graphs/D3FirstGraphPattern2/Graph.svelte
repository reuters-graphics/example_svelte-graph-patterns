<script>
	import '$lib/styles/global.scss';
	import { onMount } from 'svelte';
	import data from './data';
	import Graph from './Graph.js'
	
	const props = {
		margin: { top: 50, right: 20, bottom: 30, left: 60 },
	}
	
	// Initialise the graph and the bound container into which it is inserted
	let graphContainer;
	const graph = new Graph()

	// This works exactly the same as the previous approach but we need an extra event listener for 
	// resize and then internal to the graph logic to adjust properties based on width
	const resize = () => graph.draw();
  onMount(() => {
    graph.selection(graphContainer).data(data).props(props).draw();
    if (window) window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  });

</script>


<div class="graph-container" bind:this={graphContainer}>
	<div class='graph-note'>resize window to see responsiveness</div>
</div>


<style lang="scss">
	@import '../../../styles/global.scss';
	div.graph-container {
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