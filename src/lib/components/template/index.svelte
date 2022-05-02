<script>
	import Prism from 'svelte-prism'
  import '$lib/styles/global.scss';
	import '$lib/styles/codeblocks.scss';

  import Section from '$lib/components/general/Section.svelte'
  import NotesBox from '$lib/components/general/NotesBox.svelte'

	import Notes from './Notes.svelte'
  import Example from "./Example.svelte";
  import codeblock from './codeblocks'

  export let id
  export let sectionTitle
  export let internalLink 
  export let externalLink
  export let externalLinkTitle
  export let date
</script>


<Section id={id}>
  <NotesBox internalLink={internalLink} date={date}>
    <h2 slot='title'>{sectionTitle}</h2>
    <div slot='external-link' class='external-link'>
      <a href={externalLink}>{externalLinkTitle}</a>
    </div>
    <Notes />
    <div class='codeblock'>
      <Prism language="javascript">{codeblock}</Prism>
    </div>
  </NotesBox>
  <br>
  <Example />
</Section>



<style lang="scss">
  @import '../../styles/global.scss'; // make sure to import from the right place
  div.codeblock {
    max-width: 700px;
    margin: auto;
  }
</style>