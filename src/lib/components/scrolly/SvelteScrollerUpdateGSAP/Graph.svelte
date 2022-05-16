<script>
	import { onMount, afterUpdate } from 'svelte'
	import data from './data.js'
	import Graph from './Graph.js'

	// Props passed in from the scroller
	export let width 
	export let height
	
	// Initialise the graph and the bound container into which it is injected
	const graph = new Graph()
	let graphContainer

    // Option 1: Graph code from a reactive statement
    // Need to use this option if we have reactively-defined props, which is do in this case 
    // (with and height, passed down from the parent Scrolly component)
	$: props = {
		width: width,
		height: height,
        fillDark: '#3d405b',
        fillBright: '#fff'
	}
	// Since the props are reactive, the graph update logic - which depends on props - 
	// should also happen from a reactive statement. *not* from afterUpdate which will over-fire
	// Any logic that goes here either doesn't depend on the graphContainer already existing or 
	// is wrapped in a conditional making sure that it does like below 
	$: if (graphContainer) {
		graph
			.selection(graphContainer)
			.data(data)
			.props(props)
			.setGraph()
			.gsapAnimate()
			// Then update the graph only using GSAP
		}		

    // Option 2: Graph code from an onMount + resize event for responsiveness 
    // With this option we can't use reactive props like the width and heihgt so these 
    // need to be constants, and we need to define a resize event to listen for width/height changes 
    // Don't use afterUpdate for that - it will over-fire! 
	// onMount(() => {
	// 	if (width && height) {
	// 		graph
	// 			.selection(graphContainer)
	// 			.data(data)
	// 			.props(props)
	// 			.setGraph()
	// 			.gsapAnimate()
	// 	}
	// })


</script>

<div class='graph-container' bind:this="{graphContainer}"></div>

<style>
	div.graph-container {
		padding: 0;
		margin: 0;
	}
</style>