<script>
	import Scroller from "@sveltejs/svelte-scroller";
	import Graph from './Graph.svelte'
	
	// Scroller parameters
	let index // int index of currently active foreground DOM element 
	let offset // float offset of currently active foreground DOM element - 0 to 1 value
	let progress // float how far along the whole scrolly we currently are - 0 to 1 value 
	let count // int total num steps (=DOM elements) of the foreground
	let top = 0;
	let bottom = 1;
	let threshold = 0.5;
	
	// So that we can pass the width and height of the container to the graph
	let w;
  	let h;

</script>

<Scroller top={top} bottom={bottom} threshold={threshold} bind:index bind:offset bind:progress bind:count>
	
  <div slot="background">
    <section class='background-container graph' bind:clientWidth={w} bind:clientHeight={h}>
      <Graph index={index} offset={offset} progress={progress} width={w} height={h} />
    </section>
  </div>

  <div slot="foreground">
    <section class='section-zero' id='step-0'></section>
    <section >
      <div id='step-1'>
        This is the first foreground section. Bars will grow to their final position.
      </div>
    </section>
    <section >
      <div id='step-2'>
        This is the second foreground section. Bars will change colour. 
      </div>
    </section>
    <section >
      <div id='step-3'>
        This is the third foreground section. Bars will get random length.
      </div>
    </section>
  </div>

</Scroller>

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
		margin: 0;
		display: flex; /* to centrally position the content inside the background */
		justify-content: center;
		align-items: center;
	}
	
	[slot="background"] .background-container {
		background-color: $accent-color;
		font-size: 1.4em;
		overflow: hidden;
		padding: 0;   	
		height: 500px;
		margin: auto;	
		width: 100%;
		max-width: 700px;
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
		display: flex;
		align-items: center;
		justify-content: center;
	}

  	/* Hack - make the 0th step have no content and height of 50vh - 
	then it looks like we start the scrolly from 1st step in the middle of the screen */
	section.section-zero {
		height: 10vh;
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