<script>
	import { onMount, afterUpdate } from 'svelte'
	import { currentElNum } from './stores.js';
	import * as d3 from 'd3'
	import { appendSelect } from 'd3-appendselect';
	d3.selection.prototype.appendSelect = appendSelect;

	export let id 
	export let intersecting
	export let text
	
	let containerEl
	
	// Option 1: Wrap evertything in a reactive statement
	// Draw the 'chart', with its background color based on whether the container 
	// is intersecting (in the second IntersectionObserver) instance

		$: {
			if (containerEl) {
				const container = d3.select(containerEl);
				container.appendSelect('svg')
					.attr('width', '100%')
					.attr('height', '600px')
					.transition().duration(500)
					.style('background', d => intersecting ? '#ee3e3e' : '#6b6065')
				if (intersecting) {
					currentElNum.set(id)
				}
			}
		}
	
	// Option 2: Draw the chart initially from onMount and then keep 'listening'
	// for updates to the 'intersecting' variable from afterUpdate
	// const drawChart = () => {
	// 	const container = d3.select(containerEl);
	// 	container.appendSelect('svg')
	// 		.attr('width', '100%')
	// 		.attr('height', '700px')
	// 		.transition().duration(500)
	// 		.style('background', d => intersecting ? '#ee3e3e' : '#6b6065')
	// }
	
	// onMount(() => {
	// 	drawChart()
	// })
	// afterUpdate(() => {
	// 	drawChart()
	// 	if (intersecting) currentElNum.set(id);
	// })
	
	// If the current element (i.e. the whole Content Element component)
	// is intersecting the *viewport* this gets passed on as true in the 
	// 'intersecting' prop received from above; if it is intersecting 
	// we update the relevant store variable, in this case currentElNum
</script>

<div class='content'>
	<h1>I am block #{id} and my intersection status is: {intersecting}</h1>
	<p>{text}</p>
	<div class="container" bind:this="{containerEl}"></div>
</div>

<style lang="scss">
	@import '../../../styles/global.scss'; 
	.content {
		margin: 0 auto;
		width: 90%;
		max-width: 1000px;
		border-top: 3px solid #333;
	}
	p {
		font-size: 1.15rem;
    	letter-spacing: 0.05rem;
    	color: $mid-color; 
	}
</style>