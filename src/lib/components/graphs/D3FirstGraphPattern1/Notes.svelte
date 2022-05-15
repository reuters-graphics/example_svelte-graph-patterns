<p class='summary'>
	Minimal example of how to use class-based D3 - rather than Svelte - for DOM manipulation, making sure graph re-drawing/responsiveness 
	only triggers from Svelte when necessary by using reactive statements and declarations.
</p>

<h3>Main points</h3>
<ul>
	<li>
		Width and height of the graph are controlled by the width and height of the graph container,
		which are defined as bound variables in Svelte. They are passed in as graph props, which are defined as
		<span class='accent'>reactive declarations</span>.
	</li>
	<li>
		The graph itself is defined entirely in D3, using a class-based graph template (thought it doesn't have to be class-based), 
		together with data and props. 
		<br>
		To "listen" for updates to the data or props 
		(in this example props only, but it would work the same way with the data),
		we define the graph-drawing logic inside of a <span class='accent'>reactive statement</span>.
		Svelte will only run the logic inside of the reactive statement when one or more of the variables 
		that the statement depends on is updated. This will prevent any unnecessary triggers of the 
		graph-drawing logic. 
	</li>
	<li>
		This approach doesn't use <code>onMount</code> at all to draw the graph when the graph component's wrapper DOM element is loaded 
		on mount of the component. Instead, we perform a check inside the reactive declaration for the wrapper DOM element. This does 
		essentially the same. 
		<br>
		Alternatively, we can call <code>onMount</code> 
		with just the bit of the logic that inserts the svg element into the 
		container DOM element, and then use a reactive declaration for the rest of the logic,
		including passing in reactive props and drawing the graph. 
		<br>
		The latter approach is more Svelt-y and more 'correct', as it uses <code>onMount</code>
		as it is intended, namely to perform some action that depends on the component having just mounted. 
		However, I have found the two ways to work identically, and the former to 'look' a little bit cleaner. 
	</li>
</ul>
<h3>Code highlights</h3>