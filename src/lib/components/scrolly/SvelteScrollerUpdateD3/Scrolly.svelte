<script>
	import Scroller from "@sveltejs/svelte-scroller";
	import LoremIpsum from './LoremIpsum.svelte'
	import Chart from './Graph.svelte'
	
	// Scroller parameters
	let index // int index of currently active foreground DOM element 
	let offset // float offset of currently active foreground DOM element - 0 to 1 value
	let progress // float how far along the whole scrolly we currently are - 0 to 1 value 
	let count // int total num steps (=DOM elements) of the foreground
	let top = 0;
	let bottom = 1;
	let threshold = 0.5;
	
	// So that we can pass the width and height of the container to the chart
	let w;
  let h;

</script>

<Scroller top={top} bottom={bottom} threshold={threshold} bind:index bind:offset bind:progress bind:count>
	
  <div slot="background">
    <section class='background-container chart' bind:clientWidth={w} bind:clientHeight={h}>
      <Chart index={index} offset={offset} progress={progress} width={w} height={h} />
    </section>
  </div>

  <div slot="foreground">
    <section class='section-zero'></section>
    <section>
      <div>
        This is the first foreground section. Bars will grow to their final position.
      </div>
    </section>
    <section>
      <div>
        This is the second foreground section. Bars will change colour. 
      </div>
    </section>
    <section>
      <div>
        This is the third foreground section. Bars will go back to initial position.
      </div>
    </section>
  </div>

</Scroller>
<LoremIpsum />

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	
	/* 	Background */
	[slot="background"] {
		border-top: 2px solid #ff3e00;
		border-bottom: 2px solid #ff3e00;
		background-color: none;
		height: 100vh;
		margin: auto;
		display: flex; /* to centrally position the content inside the background */
		justify-content: center;
		align-items: center;
	}
	
	[slot="background"] .background-container {
		background-color: hotpink;
		font-size: 1.4em;
		overflow: hidden;
		height: 500px;
		margin: auto;	
		padding: 0;
		width: 100%;
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
		background-color: rgba(0,0,0,0.5);
		color: white;
		padding: 0;
		margin: 30px auto;
	}
	
	/* Hack - make the 0th step have no content and height of 50vh - 
	 then it looks like we start the scrolly from 1st step in the middle of the screen */
	section.section-zero {
		height: 50vh;
	}
	
	section div {
		width: 100%;
		background-color: white;
		color: black;
		border: 3px solid purple;
		padding: 10px;
	}
</style>

