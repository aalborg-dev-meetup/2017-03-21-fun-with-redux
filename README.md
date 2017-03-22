# Fun with redux!
## Getting started
`yarn install`

`yarn start-next`

(* npm also works, but yarn is faster)

## Challenges
1. The `ItemDisplay` component contains a button that expands or collapses a JSON dump. It does so by holding it's own state.
Rewrite this to use redux. 
2. Rewrite the existing `onChooseEndpoint` action to not fetch new data from the API, if the dat is already loaded.
