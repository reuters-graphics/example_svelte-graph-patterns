<script>
	import { fade } from 'svelte/transition';
	import IntersectionObserver from 'svelte-intersection-observer'
	import StickyElement from './StickyElement.svelte'
	import ContentElement from './ContentElement.svelte'
	import data from './data.js'

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
<div>
	Just some more content at the bottom 
</div>

<style lang="scss">
  @import '../../../styles/global.scss'; 
	.placeholder {
		width: 90%;
		max-width: 1200px;
		height: 800px;
  }
</style>