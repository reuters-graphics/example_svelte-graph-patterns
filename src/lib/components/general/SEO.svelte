<script>
    import graphIcon from '$lib/assets/sharecard.png';
    export let seoTitle = 'Svelte Patterns'
    export let seoDescription = 'Collection of patterns for using Svelte for graphs, scrollytelling and other useful things.'
    export let shareTitle = 'Svelte Patterns'
    export let shareDescription = 'Collection of patterns for using Svelte for graphs, scrollytelling and other useful things.'
    export let shareImgPath = graphIcon
    export let lang = 'en';
    export let url = 'https://reuters-graphics.github.io/example_svelte-graph-patterns/'
</script>

<svelte:head>
  <html lang="{lang}"></html>
  <title>{seoTitle}</title>
  <meta name="description" content="{seoDescription}" />


  <meta property="og:url" content="{url}" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{shareTitle}" itemprop="name" />
  <meta
    property="og:description"
    content="{shareDescription}"
    itemprop="description"
  />
  <meta
    property="og:image"
    content="{shareImgPath}"
    itemprop="image"
  />


  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{shareTitle}" />
  <meta name="twitter:description" content="{shareDescription}" />
  <meta name="twitter:image:src" content="{shareImgPath}" />


  <meta property="fb:app_id" content="319194411438328" />
  <meta property="fb:admins" content="616167736" />
  <meta property="fb:admins" content="625796953" />
  <meta property="fb:admins" content="571759798" />
</svelte:head>