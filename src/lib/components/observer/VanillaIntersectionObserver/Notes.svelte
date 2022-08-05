<p class='summary'>
	Using just the built-in 
	<a href='https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API' target='_blank'>Intersection Observer API</a>, 
	affecting a change in the DOM when an element intersects the viewport.
</p>

<h3>Main points</h3>
<ul>
	<li>
		The built-in <code>IntersectionObserver</code> class takes in two 
		parameters, an <code>observerCallback</code> and <code>observerOptions</code>.
	</li>
	<li>
		<span class='accent'><code>observerOptions</code></span>
		are things like the threshold at which an element is 
		considered intersecting (as a proportion of the total height of the element). 
		These are static properties.
	</li>
	<li>
		<span class='accent'><code>observerCallback</code></span>
		 determines what happens when the intersection event occurs. 
		In our case, we define a <code>inView</code> variable, which keeps track if the element is in view
		and update it from that callback function. 
		<br>
		*Note that if we then wanted to run any logic that depends on <code>inView</code>, it would need to 
		be wrapped in a reactive declaration. For example, if we then wanted to draw a D3 graph, we'd need to 
		make the code reactive, just like in other examples here. 
	</li>
	<li>
		Then we <span class='accent'>instantiate the IntersectionObserver and start observing the desired element from onMount</span>. 
		This is to make sure that the element we are observing has been mounted. 
	</li>
	<li>
		Finally, we use a class of <code>active</code> on the observed element, where <code>active</code>
		is defined in CSS and determines how the appearance of the changes when <code>inView = true</code>.
		<br>
		*Note that the note above about <code>inView</code> only being able to affect a change if it is 
		wrapped in a reactive statement doesn't apply in this case. This is because Svelte-native DOM changes 
		(e.g. DOM-events from Svelte like <code>on:click</code> or class conditions like <code>class:active</code> etc.) 
		are reactive by design. 
	</li>
</ul>

<h3>Code highlights</h3>

<style lang='scss'>
	@import '../../../styles/global.scss';
	a {
		color: $dark-color;
	}
</style>