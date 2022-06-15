const codeblock = `
<script>
  ...
	import { fly } from 'svelte/transition';
	
	let data = initialData
	let enter = false
	
	// Width and heigh which come from graph container 
	// and are passed in as the width and height of the svg
	let w;
	let h;
	const margin = { top: 50, right: 0, bottom: 50, left: 0 }
	$: boundedWidth = w - margin.left - margin.right
	$: boundedHeight = h - margin.top - margin.bottom

	// Scales 
	$: yScale = d3.scalePoint()
		.domain(initialData.map(d => d.id))
		.range([0, boundedHeight])

  // Cat, panda and dog come from the data file; see 'data.js'
	const colourScale = ({
		'cat': '#219ebc',
		'panda': '#ee3e3e',
		'dog': '#6b6065'
		})

	$: radiusScale = d3.scaleLinear()
		.domain(d3.extent(data, d => d.value))
		.range([20, 50])

</script>

// Buttons control the 'entering' and update of the data
<div class='buttons'>
	<button on:click={() => { 
		data = initialData
		enter = true 
		}}>Enter data</button>
	<button on:click={() => { 
		data = changedData 
		}}>Update data</button>
</div>
<div
	class="graph-container"
	bind:clientWidth={w}
	bind:clientHeight={h}
>
	<svg width={w} height={h}>
		<g transform='translate({margin.left}, {margin.top})'>
			{#each data as d, i (d.id)} // Make sure to have a keyed each block to ensure transitions work
				{#if enter}
					<circle
						id={d.id}
						in:fly={{ x: -300, duration: 200 * i, delay: 300 }} // Takes care of 'enter'
						out:fly={{x: 200, duration: 100 * i}} // Takes care of 'exit'
						cx={boundedWidth/2}
						cy={i * 80}
						fill={colourScale[d.category]}
						r={radiusScale(d.value)}
					></circle>
				{/if}
			{/each}
		</g>
	</svg>
</div>



<style lang="scss">
	circle {
		transition: all 1s; // Takes care of 'update'
	}
</style>
`

export default codeblock;