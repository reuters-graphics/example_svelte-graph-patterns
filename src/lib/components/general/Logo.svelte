<script>
	export let link = 'https://github.com/reuters-graphics';
	export let backgroundColour = '#333333';
	export let monocolourLogo = false;
	export let lightLogo = true;
</script>

<nav class="nav" style={`background: ${backgroundColour};`}>
	<div class="logo-container">
		<a href={link}>
			<figure class="navbar-brand">
				{#if (monocolourLogo && lightLogo)}
					<img class="logo reuters-graphics" src="https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-light.svg" alt='Reuters graphics logo' />
				{:else if monocolourLogo}
					<img class="logo reuters-graphics" src="https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg" alt='Reuters graphics logo' />
				{:else if lightLogo}
					<img class="logo reuters-graphics" src="https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-light.svg" alt='Reuters graphics logo' />
				{:else}
					<img class="logo reuters-graphics" src="https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg" alt='Reuters graphics logo' />
				{/if}
			</figure>
		</a>
	</div>
	<slot></slot>
</nav>

<style>
    * {
        margin: 0;
        padding: 0;
    }
	.nav {
		padding-top: 10px;
		padding-left: 10px;
	}
</style>