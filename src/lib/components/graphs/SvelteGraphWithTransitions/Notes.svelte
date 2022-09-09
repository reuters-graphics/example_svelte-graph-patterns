
<p class='summary'>
  Svg-based graph done entriely in Svelte (other than scales), including different transitions for elements that enter and leave the DOM. 
</p>
	
<h3>Main points</h3>
<ul>
  <li>
    The use case here is when we have dynamic data such that we want DOM elements corresponding to each datum 
    to have (possibly different) transitions as they enter, update in, or leave the DOM. In other words, we want to 
    imitate the transitions possible inside a D3 general update pattern with enter, update and exit, entirely from Svelte. 
    Note that when adding the data-bound DOM elements in a Svelte <code>each</code> block, you have to make sure that you can provide 
    a key with unique ids, i.e. you need to use a <span class='accent'>keyed each block</span>. 
  </li>
  <li>
		We use a <span class='accent'><code>fly</code> transition</span> imported from <code>svelte/transition</code> with some optional parameters.
	</li>
  <li>
    For the circles <span class='accent'>entering the DOM</span>, we use <code>in:fly</code> with options to make
    each circle enter the DOM from a -300px horizontal position, and with each circle entering 200 ms after the previous. 
  </li>
  <li>
    For the circles <span class='accent'>leaving the DOM</span>, we use <code>out:fly</code> with options to make the circles 
    fly off 200px to the right before disappearing. 
  </li>
  <li>
    Finally, for any <span class='accent'>updating DOM elements</span>, e.g. circles that stay on but change colour or size, we simply add a CSS transition to the circles with 
    <code>transition: all 1s;</code>
  </li>
</ul>


