const codeblock = `
	///////////////////////////////////////////////////////////////
	//////////// Intersection Observer (Scrolly.svelte) ///////////
	///////////////////////////////////////////////////////////////
	<script>
		import IntersectionObserver from 'svelte-intersection-observer'
		import StickyElement from './StickyElement.svelte'
		import ContentElement from './ContentElement.svelte'
		...

		// Need to initialise all the DOM element containers that the intersection observer 
		// uses in its 'element' prop; Need one for each data element
		let node0, node1, node2, node3, node4
		const nodes = [node0, node1, node2, node3, node4] // In array so we can loop over them 
	</script>

	<section>
	<StickyElement />
		{#each data as datum, i}
			<IntersectionObserver element="{nodes[i]}" let:intersecting threshold="{0}" once="{true}">
					<div bind:this="{nodes[i]}">
						{#if intersecting}
							<div in:fade="{{ duration: 800 }}">
								<IntersectionObserver element="{nodes[i]}" let:intersecting threshold="{0.7}" once="{false}">
									<ContentElement
										id="{datum.id}"
										intersecting="{intersecting}"
										text={datum.text}
									/>
								</IntersectionObserver>
							</div>
						{:else}
							<div class="placeholder">loading...</div>
						{/if}
					</div>
			</IntersectionObserver>
		{/each}
	</section>

	/////////////////////// stores.js ////////////////////////////
	import { writable } from 'svelte/store'
	export const currentElNum = writable(-1)

	///////////////////////////////////////////////////////////////
	//////////////////// ContentElement.svelte ////////////////////
	///////////////////////////////////////////////////////////////
	<script>
		import { currentElNum } from './stores.js';
		...

		export let id 
		export let intersecting
		
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
	</script>
	<div class='content'>
		<h1>I am block #{id} and my intersection status is: {intersecting}</h1>
		<div class="container" bind:this="{containerEl}"></div>
	</div>

	///////////////////////////////////////////////////////////////
	///////////////////// StickyElement.svelte ////////////////////
	///////////////////////////////////////////////////////////////
	<script>
		import { currentElNum } from './stores.js';
	</script>

	<div id='sticky-element'>
		I am a sticky element and I update based on the intersecting element, which is:
		<h3>{$currentElNum}</h3>
	</div>

	<style lang='scss'>
		...
		#sticky-element {
			position: -webkit-sticky;
			position: sticky;
			top: 0px;
			z-index: 10;
			margin: auto;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			...
		}	
		...
	</style>
`

export default codeblock;