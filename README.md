## About

This project is a collection of examples and templates for working with Svelte in a number of situations that commonly arise when building D3 graphs, scrollytelling webpages and other kinds of projects we often produce.

It is meant to be a continuous work in progress and is by no means an exhaustive, or necessarily a 'best practice' type of collection. All the examples are usecases that I have encountered, build a minimal example around and documented. They come with working code, explained code snippets, and notes about the approach taken. 

## Running the project
- Install dependencies with `npm install` or `yarn` 
- Start the dev server with:
```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
- Note that there might be bugs at the moment because of a code library used called Prism. If you encounter issues, just restart the project and refresh the page. 

## Building
To create a production version:
```bash
npm run build
```

To preview the production build with `npm run preview`.

> To deploy, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
