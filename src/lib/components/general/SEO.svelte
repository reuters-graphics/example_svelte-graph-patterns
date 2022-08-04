<script>
    export let seoTitle = 'Svelte Patterns'
    export let seoDescription = 'Collection of patterns for using Svelte for graphs, scrollytelling and other useful things.'
    export let shareTitle = 'Svelte Patterns'
    export let shareDescription = 'Collection of patterns for using Svelte for graphs, scrollytelling and other useful things.'
    export let shareImgPath;
    export let lang = 'en';
    export let hostname = 'graphics.reuters.com';
    export let url = 'https://reuters-graphics.github.io/example_svelte-graph-patterns/'
</script>

<svelte:head>
  <html lang="{lang}"></html>
  <title>{seoTitle}</title>
  <meta name="description" content="{seoDescription}" />

  <link
    rel="shortcut icon"
    type="image/x-icon"
    href="https://s3.reutersmedia.net/resources_v2/images/favicon/favicon.ico"
  />
    <link
    rel="icon"
    type="image/png"
    href="https://s3.reutersmedia.net/resources_v2/images/favicon/favicon-16x16.png"
    sizes="16x16"
  />
    <link
    rel="icon"
    type="image/png"
    href="https://s1.reutersmedia.net/resources_v2/images/favicon/favicon-32x32.png"
    sizes="32x32"
  />
    <link
    rel="icon"
    type="image/png"
    href="https://s3.reutersmedia.net/resources_v2/images/favicon/favicon-96x96.png"
    sizes="96x96"
  />

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