<script>
  // Approach: Setup the chart from an onMount and then pass it any dynamic props from a reactive declaration
	import { onMount, afterUpdate } from 'svelte'
	import data from './data.js'
	import Graph from './Graph.js'

	// Props passed in from the scroller
	export let index 
	export let offset 
	export let progress
	export let width 
	export let height

  // Initialise the chart and the bound container into which it is injected
	let chartContainer;
	const chart = new Graph()

  // The chart props are reactive as they depend on let-declared variables 
	$: props = {
		index: index,
		width: width,
		height: height,
		stuff: 5
	}
  // Since the props are reactive, the chart update logic - which depends on props - 
	// should also happen from a reactive statement. *not* from afterUpdate which will over-fire
	// Any logic that goes here either doesn't depend on the chartContainer already existing or 
	// is wrapped in a conditional making sure that it does like below 
  $: {
			if (chartContainer) {
				// Initially draw the chart with initial logic
				chart.props(props).setChart()
				// Then update the chart based on the index
				switch(index) {
					case 0:
						chart.props(props).setChart()
						break;
					case 1:
						chart.stepOneLogic()
						break;
					case 2:
						chart.stepTwoLogic()
						break;
					case 3:
						chart.props(props).setChart()
						break;
					default:
						chart.props(props).setChart()
				}
			}		
	}
  // Set up the graph for the first time from an onMount; any constant props 
	// will be correctly passed at this point
	onMount(() => {
		chart
			.selection(chartContainer)
			.data(data)
			.props(props)
			.setChart()
	})	
</script>

<div class='chart-container' bind:this="{chartContainer}"></div>

<style lang='scss'>
  @import '../../../styles/global.scss'; // make sure to import from the right place
  div.chart-container {
		padding: 0;
		margin: 0;
	}

</style>