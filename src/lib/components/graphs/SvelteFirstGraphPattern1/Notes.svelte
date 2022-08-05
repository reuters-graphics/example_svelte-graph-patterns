<p class='summary'>
  Minimal example of how to use Svelte for svg graphs, using D3 only for helper functions (e.g. scales) and for axes. 
  Graph is responsive based on the width of the container and uses only reactive declarations and statements.
</p>
	
<h3>Main points</h3>
<ul>
	<li>
		Width and height of the graph are based on the width and height of the container, which we obtain with 
    Svelte binding, e.g. <code>bind:clientWidth=w</code>. These are also used to base other values on, such as 
    fill, and make them responsive.
	</li>
	<li>
		<span class='accent'>Scales and axes</span> are defined as <span class='accent'>reactive declarations</span> as they depend on the 
    width and height (w and h variables). 
	</li>
	<li>
    <span class='accent'>Axes are called on a bound group element inside a reactive statement</span>.
	</li>
  <li>
    All the graph-drawing logic happens declaratively in the DOM, and the data is looped-over with a 
    Svelte <code>each</code> statement.
  </li>
</ul>


<h3>Code highlights</h3>

	


