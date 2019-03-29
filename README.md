# A bunch of React Components

## Including in your project

```
yarn add @dan-akl/patterns
```

```
@import { Button } from '@dan-akl/patterns'
```

## Running Storybook

```
yarn storybook
```

## Adding new Components

Add new components by using the `component:generate` npm task. It will prompt you for a name for the Component.
Please follow the Standard ReactNamingConventions, and name the component the singular form.

```
Good: TextInput Button CheckBox

Bad: textInput text-input text input Buttons
```

A new directory will be created in the `./src/components` directory with the following files:

```
.
├── src
|   ├── Component
|   |   ├── Component.jsx
|   |   ├── Component.scss
|   |   ├── Component.story.js
|   |   ├── Component.test.js
|   |   ├── README.md
|   |   ├── index.js
```
