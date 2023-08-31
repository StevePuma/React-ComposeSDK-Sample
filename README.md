# Getting Started with React-ComposeSDK-Sample

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm config set "@sisense:registry" "https://npm.pkg.github.com" --userconfig .npmrc`

# Generate Github Personal Access Tokem 

# Paste Access Token Below 

### `npm config set "//npm.pkg.github.com/:_authToken" "__YOUR_TOKEN__" --userconfig .npmrc`

### `npm i @sisense/sdk-ui @sisense/sdk-data`

### `npm i @sisense/sdk-cli`

### `npx sdk-cli get-data-model --username "<USERNAME>" --output src/sample-ecommerce.ts --dataSource "Sample ECommerce" --url <SISENSEURL>`

# Update Sisense Context Provider information in the index.tsx file with your environment URL and API token. 

### `npm start` 


See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
