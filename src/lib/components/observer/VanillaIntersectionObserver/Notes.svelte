<p class='summary'>
	Using just the built-in 
	<a href='https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API' target='_blank'>Intersection Observer API
	</a>, how can we affect a change in the DOM when an element intersects the viewport.
</p>

<h3>Main points</h3>
<ul>
	<li>
		The built-in <code>IntersectionObserver</code> class takes in two 
		parameters, an <code>observerCallback</code> and <code>observerOptions</code>
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
		In our case, we define a <code>inView</code> variable, which keeps track if the element is in view. 
		Since this is a Svelte variable, we need to make observerCallback a reactive declaration, 
		to make sure that <code>inView</code> is updated correctly. 
	</li>
	<li>
		Then we <span class='accent'>instantiate the IntersectionObserver and start observing the desired element from onMount</span>. 
		This is to make sure that the element we are observing has been mounted. 
		We don't need a <code>afterUpdate</code> as the reactive observerOptions will keep updating the <code>inView</code>
		variable correctly. 
	</li>
	<li>
		Finally, with use a class of <code>active</code> on the observed element, where <code>active</code>
		is defined in CSS and determines how the appearance of the changes when <code>inView = true</code>
	</li>
</ul>

<h3>Code highlights</h3>

<style lang='scss'>
	@import '../../../styles/global.scss';
	a {
		color: $dark-color;
	}
</style>