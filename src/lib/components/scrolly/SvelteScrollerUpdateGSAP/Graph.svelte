<script>
	import { onMount, afterUpdate } from 'svelte'
	import data from './data.js'
	import Graph from './Graph.js'

	// Props passed in from the scroller
	export let width 
	export let height
	
	// Initialise the chart and the bound container into which it is injected
	let chartContainer;
	const chart = new Graph()

    // Option 1: Graph code from a reactive statement
    // Need to use this option if we have reactively-defined props, which is do in this case 
    // (with and height, passed down from the parent Scrolly component)
	$: props = {
		width: width,
		height: height,
        fillDark: '#3d405b',
        fillBright: '#fff'
	}
	// Since the props are reactive, the chart update logic - which depends on props - 
	// should also happen from a reactive statement. *not* from afterUpdate which will over-fire
	// Any logic that goes here either doesn't depend on the chartContainer already existing or 
	// is wrapped in a conditional making sure that it does like below 
	let chartLoaded = false
	$: {
		// Set up the chart only once - make sure all the props are loaded and the container is loaded
		if (chartContainer) {
			if (!chartLoaded) {
				chart
					.selection(chartContainer)
					.data(data)
					.props(props)
					.setChart()
					.gsapAnimate()
				//chartLoaded = true
			}	
			// Then update the chart only using GSAP
		}		
	}

    // Option 2: Graph code from an onMount + resize event for responsiveness 
    // With this option we can't use reactive props like the width and heihgt so these 
    // need to be constants, and we need to define a resize event to listen for width/height changes 
    // Don't use afterUpdate for that - it will over-fire! 
	// onMount(() => {
	// 	if (width && height) {
	// 		chart
	// 			.selection(chartContainer)
	// 			.data(data)
	// 			.props(props)
	// 			.setChart()
	// 			.gsapAnimate()
	// 	}
	// })


</script>

<div class='chart-container' bind:this="{chartContainer}"></div>

<style>
	div.chart-container {
		padding: 0;
		margin: 0;
	}
</style>