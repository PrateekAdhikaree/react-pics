# Search Pics

![screen](public/screen.jpg 'screen')

## Tools Used

- react-js [[Ref]](https://reactjs.org/docs/getting-started.html)
- Unsplash API [[Ref]](https://unsplash.com/documentation#getting-started)
- Semantics UI (_for CSS_) [[Ref]](https://semantic-ui.com/introduction/getting-started.html)

## Running the project

In the project directory, you can run:

### `npm ci`

Installs the required packages in node*modules directory from the \_package-lock.json* file.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## React Components

**main file**: [index.js](src/index.js)

- [App](src/components/App.js)
  - [SearchBar](src/components/SearchBar.js)
  - [ImageList](src/components/ImageList.js)
    - [ImageCard](src/components/ImageCard.js)
  - [unsplash](src/api/unsplash.js) - Scaffolding for easily calling unsplash API using Axion

## Usage

1. Type any keyword in the input field
2. Press 'Enter' to search for the keyword using Unsplash API
3. Returned images displayed below
