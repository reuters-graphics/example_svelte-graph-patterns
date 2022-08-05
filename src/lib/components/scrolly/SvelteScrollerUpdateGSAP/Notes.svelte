<p class='summary'>
	Svelte Scroller with a D3 graph using GSAP to transition on ScrollTrigger-based steps.
	Running vanilla JS logic, targetting DOM elements with query selectors, from inside of Svelte.
</p>

<h3>Main points</h3>
<ul>
	<li>
		In this approach, we don't make use of the <code>index</code> variable that can be 
		passed in as a prop from Svelte Scroller or write any conditional on index 
		code for the graph state inside of Svelte. 
		Instead, we give each step's DOM element (here a div) a unique id and use this 
		to <span class='accent'>target the step entirely from the vanilla JS-based GSAP ScrollTrigger code</span>. 
		The graph state for each step is still controlled from D3. 
	</li>
	<li>
		<span class='accent'>In the graph-drawing logic, we define all the different steps as separate functions</span>, 
		e.g. <code>stepOneLogic()</code>, and then call all of them as callbacks to the <code>onToggle</code> 
		method of the <code>ScrollTrigger</code> when the correct step is hit. 
		We call all of them from the same method <code>gsapAnimate()</code>.
		Note that each step becomes active and displays the graph state for that step 
		when the top of the step hits the center of the viewport on scrolling down, but when the 
		bottom of the step enters the viewport when scrolling back up. 
	</li>
	<li>
		In the Svelte code, we wrap the graph-drawing logic inside a <span class='accent'>reactive declaration</span>,
		which also checks that the DOM element into which we are injecting the graph exists. 
		We could also have done that in an <code>onMount</code> (which has to check that the width and height variables exist).
		However, then it wouldn't be responsive, as it only draws the graph once and doesn't update when the width and height 
		update. The reactive declaration approach does that. 
	</li>
</ul>

<h3>Code highlights</h3>

<style>
</style>