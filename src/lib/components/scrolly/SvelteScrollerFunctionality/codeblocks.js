const codeblock = `
<script>
  ...
	// Scroller parameters
	let index // int index of currently active foreground DOM element 
	let offset // float offset of currently active foreground DOM element - 0 to 1 value
	let progress // float how far along the whole scrolly we currently are - 0 to 1 value 
	let count // int total num steps (=DOM elements) of the foreground
	
	let top = 0; // The vertical position that the top of the foreground must scroll past before the background becomes fixed, as a proportion of window height
	let bottom = 1; // Once the bottom of the foreground passes this point, the background becomes unfixed
	let threshold = 0.5; // Once a foreground step's top crosses this point in the viewport, it becomes 'active'
</script>

<Scroller top={top} bottom={bottom} threshold={threshold} bind:index bind:offset bind:progress bind:count>
	  <div slot="background">
			<div class='background-container'>
				<p>
					This is the background content. It will stay fixed in place while the
					foreground scrolls over the top.
				</p>
				...
			</div>
		</div>
	  <div slot="foreground">
			<section>
				<div>
					This is the zero foreground section.
				</div>
			</section>
			<section>
				<div>
					This is the first foreground section.
				</div>
			</section>
      ...
		</div>
</Scroller>
`

export default codeblock;