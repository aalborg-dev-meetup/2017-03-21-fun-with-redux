# Fun with redux!
## Getting started
`yarn install`

`yarn start-next`

(* npm also works, but yarn is faster)

## Background
This application was created to show how strong the force is in Redux. Use it as example, training, learning, or just break it down 
in pieces and tell me what I did wrong. It uses the Star Wars API, which can be found on http://swapi.co/, to have some data to show.

## Challenges
1. The `ItemDisplay` component contains a button that expands or collapses a JSON dump. It does so by holding it's own state.
Rewrite this to use redux. 
2. Rewrite the existing `onChooseEndpoint` action to not fetch new data from the API, if the dat is already loaded.
3. Make `ItemDisplay` detect what kind of object it has received, and change display based on that
4. Make more changes - use your imagination!
