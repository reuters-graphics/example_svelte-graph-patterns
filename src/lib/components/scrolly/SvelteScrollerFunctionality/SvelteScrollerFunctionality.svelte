<script>
	import Scroller from "@sveltejs/svelte-scroller";
	import LoremIpsum from './LoremIpsum.svelte'
	
	// Scroller parameters
	let index // int index of currently active foreground DOM element 
	let offset // float offset of currently active foreground DOM element - 0 to 1 value
	let progress // float how far along the whole scrolly we currently are - 0 to 1 value 
	let count // int total num steps (=DOM elements) of the foreground
	
	// The vertical position that the top of the foreground must scroll past before the background becomes fixed, as a proportion of window height
	// think of it as the position in the viewport that the background 'starts' at i.e. the top of the background is at that position while the foreground is scrolling on top of it; best to keep it at 0 so it starts from the top and give the [slot="background"] a height: 100vh
	let top = 0;
	// Once the bottom of the foreground passes this point, the background becomes unfixed
	// Best to just keep it at 1 to avoid the background becoming unfixed and scrolling over other elements down the page unintentionally
	let bottom = 1;
	// Once a foreground step's top crosses this point in the viewport, it becomes 'active'
	// e.g. if it's 0.5 that means that when a step's top hits the middle of the viewport it becomes active
	let threshold = 0.5;

</script>

<LoremIpsum />
<Scroller top={top} bottom={bottom} threshold={threshold} bind:index bind:offset bind:progress bind:count>
	
	  <div slot="background">
			<div class='background-container'>
				<p>
					This is the background content. It will stay fixed in place while the
					foreground scrolls over the top.
				</p>
				<p><span>Index: </span>{index}, i.e. section #{index} is currently active</p>
				<p><span>Offset:</span> {offset}</p>
				<p><span>Progress:</span> {progress}</p>
				<p><span>Count:</span> {count}</p>
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
			<section>
				<div>
					This is the second foreground section.
				</div>
			</section>
		</div>
	
</Scroller>
<LoremIpsum />

<style lang='scss'>
  @import '../../../styles/global.scss';
	* {
		box-sizing: border-box;
	}
	
	/* 	Background */
	[slot="background"] {
		border-top: 2px solid $accent-color;
		border-bottom: 2px solid $accent-color;
		background-color: none;
		height: 100vh;
		margin: auto;
		display: flex; /* to centrally position the content inside the background */
		justify-content: center;
		align-items: center;
	}
	
	[slot="background"] .background-container {
		background-color: $accent-color;
		overflow: hidden;
		padding: 1em;
		height: 500px;
    	max-width: 700px;
		margin: auto;	
    	display: flex;
    	flex-direction: column;
    	justify-content: center;
    	p {
     	 color: $light-color;
     	 font-size: 1.4em;
      	span {
        	font-weight: bold;
        	text-decoration: underline;
        	margin-right: 5px;
      		}
    	}
	}
	
	/* 	Foreground */
	[slot="foreground"] {
		pointer-events: none;
	}
	
	[slot="foreground"] section {
		pointer-events: all;
	}
	
	section {
		height: 100vh;
		width: 200px;
		background-color: rgba($dark-color, 0.5);
		color: white;
		padding: 0;
		margin: 30px auto;
	}
	
	section div {
		width: 100%;
		background-color: white;
		color: $dark-color;
		border: 3px solid $dark-color;
		padding: 15px;
    	font-size: 1.2rem;
	}
</style>