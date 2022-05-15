<script>
  // Approach: Setup the graph from an onMount and then pass it any dynamic props from a reactive declaration
	import { onMount } from 'svelte'
	import data from './data.js'
	import Graph from './Graph.js'

	// Props passed in from the scroller
	export let index 
	export let offset 
	export let progress
	export let width 
	export let height

	// Initialise the graph and the bound container into which it is injected
	let graphContainer;
	const graph = new Graph()

	// The graph props are reactive as they depend on let-declared variables 
	$: props = {
		index: index,
		width: width,
		height: height,
	}
	// Since the props are reactive, the graph update logic - which depends on props - 
	// should also happen from a reactive statement. *not* from afterUpdate which will over-fire
	// Wrap in conditional for graphContainer existing to make sure it only fires after dom mounting
	$: if (graphContainer) {
				// Initially draw the graph with initial logic
				graph.props(props).setGraph()
				// Then update the graph based on the index
				switch(index) {
					case 0:
						graph.props(props).setGraph()
						break;
					case 1:
						graph.stepOneLogic()
						break;
					case 2:
						graph.stepTwoLogic()
						break;
					case 3:
						graph.props(props).setGraph()
						break;
					default:
						graph.props(props).setGraph()
				}	
		}
	// Set up the graph for the first time from an onMount; any constant props 
	// will be correctly passed at this point, as well as the static data
	onMount(() => {
		graph
			.selection(graphContainer)
			.data(data)
			.props(props)
	})	
</script>

<div class='graph-container' bind:this="{graphContainer}"></div>

<style lang='scss'>
  @import '../../../styles/global.scss'; // make sure to import from the right place
  div.graph-container {
		padding: 0;
		margin: 0;
	}

</style>