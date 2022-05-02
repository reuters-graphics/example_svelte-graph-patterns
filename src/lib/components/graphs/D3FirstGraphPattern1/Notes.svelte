<p class='summary'>
	Minimal example of how to use class-based D3 - rather than Svelte - for DOM manipulation, making sure graph re-drawing/responsiveness 
	only triggers from Svelte when necessary by using reactive statements and declarations.
</p>

<h3>Main points</h3>
<ul>
	<li>
		Width and height of the graph are controlled by the width and height of the container,
		which are defined as bound variables in svelte. They are passed in as graph props, which are defined as
		<span class='accent'>reactive declaraion</span>.
	</li>
	<li>
		The graph itself is defined entirely in D3, using the class-based graph template, together 
		with data and props. Then to listen for updates to the data or props 
		(in this example props only, but it would work the same way with the data),
		we define the graph-drawing logic inside of a <span class='accent'>reactive statement</span>.
		Svelte will only run the logic inside of the reactive declaration when one or more of the variables 
		that the decalarion depends on is updated. This will prevent any unncessary triggers of the 
		graph drawing logic. 
	</li>
	<li>
		This approach doesn't use <code>onMount</code> at all to draw the graph when the graph component's wrapper DOM element is loaded 
		on mount of the component. Instead, we perform a check inside the reactive decalation for the wrapper DOM element. This does 
		essentially the same. Alternatively, we can call <code>onMount</code> with the initial graph-drawing logic *and* the reative declaration. 
	</li>
</ul>
<h3>Code highlights</h3>