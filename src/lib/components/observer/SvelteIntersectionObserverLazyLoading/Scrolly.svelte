<script>
	import { fade } from 'svelte/transition';
	import IntersectionObserver from 'svelte-intersection-observer'
	import StickyElement from './StickyElement.svelte'
	import ContentElement from './ContentElement.svelte'
	import data from './data.js'

	// Need to initialise all the DOM element containers that the intersection observer 
	// uses in its 'element' prop; Need one for each data element
	let nodeLoad0, nodeLoad1, nodeLoad2, nodeLoad3, nodeLoad4
	const nodesLoad = [nodeLoad0, nodeLoad1, nodeLoad2, nodeLoad3, nodeLoad4] // In array so we can loop over them 

	let node0, node1, node2, node3, node4
	const nodes = [node0, node1, node2, node3, node4] 

	let intersectingLazyLoad
	let intersecting
</script>

<section>
  <StickyElement />
  {#each data as datum, i}
    <IntersectionObserver element="{nodesLoad[i]}" let:intersecting={intersectingLazyLoad} threshold="{0}" once="{true}">
			<div bind:this="{nodesLoad[i]}">
				{#if intersectingLazyLoad}
					<IntersectionObserver element="{nodes[i]}" let:intersecting threshold="{0.7}" once="{false}">
						<div in:fade="{{ duration: 800 }}"  bind:this="{nodes[i]}">
							<ContentElement
								id="{datum.id}"
								intersecting="{intersecting}"
								text={datum.text}
							/>
						</div>
					</IntersectionObserver>	
				{:else}
					<div class="placeholder">loading...</div>
				{/if}
			</div>
    </IntersectionObserver>
  {/each}
</section>


<style lang="scss">
  @import '../../../styles/global.scss'; 
	.placeholder {
		width: 90%;
		max-width: 1200px;
		height: 800px;
  }
</style>