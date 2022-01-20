# Feedback

1. Never commit `node_modules` directory to a git repository.  Builds should be reproducible with the package.json and package-lock.json files alone.
2. Package.json in the root directory is missing a lot of useful properties.  This file is what tells others what your package is all about.
3. There really shouldn't be more than one package.json unless you are using a workspaces/monorepo development workflow.
4. used Axios and fetch directly in two components, usually it's good to unify on one pattern vs multiple tools to do the same thing.
5. Lot of the components are for looks only.  Lot of files for not much functionality
6. State management library could have been used to draw a line between your presentation layer and business logic 
7. `onChange={props.func}` probably better to give a more specific name to your callback functions
8. I do like how you organized your files... reusable components in their own directory and pages/layouts in their own directory.
9. Usually i find it better to keep my styled components separate from the components that hold more of the state/logic.
10. I find javascript react hard to read without proptypes.  There is a library called `proptypes` that you can use in javascript to define what all the props of a componnet should actually be.  
    I recommend using that or using typescript.
