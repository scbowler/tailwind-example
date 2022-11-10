# tailwind-example

Example of setting up Tailwind CSS in the LearningFuze Final Project Template

## Steps to setup Tailwind CSS
1. Install `postcss` and related dependencies as dev dependencies
    ```
    npm install --save-dev postcss postcss-loader postcss-preset-env
    ```
1. Install `tailwindcss` as a dev dependency
    ```
    npm install --save-dev tailwindcss
    ```
1. Update `webpack.config.js`. Add the `postcss-loader` to the CSS rule in the `rules` array:
    ```JAVASCRIPT
    {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ```
1. In the `client` folder, create a `style.css` file with the following contents:
    ```CSS
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
1. Generate `tailwind.config.js`
    ```
    npx tailwindcss init
    ```
1. In `tailwind.config.js` add the `content` path, and cleanup any trailing commas in config object. Your final `tailwind.config.js` should look like:
    ```JAVASCRIPT
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        './client/**/*.{js,jsx}'
      ],
      theme: {
        extend: {}
      },
      plugins: []
    };
    ```
1. Create a file named `postcss.config.js` in the root project folder with the following content:
    ```JAVASCRIPT
    const tailwindcss = require('tailwindcss');
    module.exports = {
      plugins: [
        'postcss-preset-env',
        tailwindcss
      ]
    };
    ```
1. In the `client/index.jsx` file `import` the `style.css` file
    ```JAVASCRIPT
    import './style.css';
    ```
1. Update the `.stylelintrc` file to fix linter errors. Add the following to the `rules` array:
    ```JSON
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "extends",
          "apply",
          "tailwind",
          "components",
          "utilities",
          "screen"
        ]
      }
    ]
    ```
    ### The final `.stylelintrc` should look like:
    ```JSON
    {
      "extends": [
        "stylelint-config-recommended",
        "stylelint-config-standard"
      ],
      "rules": {
        "alpha-value-notation": null,
        "color-function-notation": null,
        "declaration-block-no-redundant-longhand-properties": null,
        "no-empty-source": null,
        "at-rule-no-unknown": [
          true,
          {
            "ignoreAtRules": [
              "extends",
              "apply",
              "tailwind",
              "components",
              "utilities",
              "screen"
            ]
          }
        ]
      }
    }
    ```
1. All Done! ✅. You should now be able to use all of the Tailwind classes in your React code along with any custom CSS.
