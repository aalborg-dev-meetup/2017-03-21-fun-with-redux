# Fun with redux!
## Getting started
`yarn install`

`yarn start-next`

Then open http://localhost:3008/ in your browser

(* npm also works, but yarn is faster)

## Background
This application was created to show how strong the force is in Redux. Use it as example, training, learning, or just break it down 
in pieces and tell me what I did wrong. It uses the Star Wars API, which can be found on http://swapi.co/, to have some data to show.

To use as little boilerplate as possible, the app uses the Next framework (https://github.com/zeit/next.js).

## Challenges
1. The `ItemDisplay` component contains a button that expands or collapses a JSON dump. It does so by holding it's own state.
Rewrite this to use redux. 
2. Rewrite the existing `onChooseEndpoint` action to not fetch new data from the API, if the dat is already loaded.
3. Make `ItemDisplay` detect what kind of object it has received, and change display based on that
4. Sort the list of items alphabetically
5. Make more changes - use your imagination!
