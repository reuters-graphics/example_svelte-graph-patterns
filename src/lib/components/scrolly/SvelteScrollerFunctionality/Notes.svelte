<p class='summary'>
	Minimal example of how  <a href='https://github.com/sveltejs/svelte-scroller' target='_blank'>Svelte Scroller</a> works.
</p>

<h3>Main points</h3>
<ul>

	<li>
		Scroller parameters (can be bound to the Scroller with <code>bind</code> or as one-way binding): 
		<ol>
			<li>
				<span class='accent'>index</span> - Index of the currently active (= in viewport and at the correct vertical position, as determined by top, bottom and threshold params) foreground element 
			</li>
			<li>
				<span class='accent'>offset</span> - Float between 0 and 1 corresponding to the offset of the currently active foreground element. Value is 1 when that element becomes inactive.
			</li>
			<li>
				<span class='accent'>progress</span> - Float between 0 and 1 for the progress of the whole scrolly. Becomes 1 when the last foreground element has become inactive.
			</li>
			<li>
				<span class='accent'>top</span> - 
				The vertical position that the top of the first foreground element must scroll past before the background becomes fixed, as a proportion of viewport height (0 to 1).
				In the most common usecase, we want to keep this as 0 and give the background a height of 100vh, and also push the first foreground element to the 'top', i.e. 
				so that the top of the first foreground element and the top of the background element align. 
				Then the background becomes fixed in place as soon as its top aligns with the top of the viewport. 

				In this example, the foreground elements each have a height of 100vh as well.
				The foreground content is less than 100vh (see the while part with text), but the extra 'padding' of height 
				is what allow for the scrolly effect to happen. 
			</li>
			<li>
				<span class=accent>bottom</span> -
				Once the bottom of the last foreground element passes this point, the background becomes unfixed.
				Best to just keep it at 1 to avoid the background becoming unfixed and scrolling over other elements down the page unintentionally.
			</li>
			<li>
				<span class='accent'>threshold</span> -
				Once a foreground element crosses this point in the element's total height, it becomes 'active'.
				E.g. if it's 0.5 that means that when a foreground element is 50% visible in the viewport, it becomes active. 
			</li>
		</ol>
	</li>


</ul>
<h3>Code highlights</h3>

<style>
	a {
		color: #000;
	}
</style>