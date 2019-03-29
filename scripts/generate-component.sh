#!/bin/bash

echo  "Kia Ora. What is the name of the new component?"  

read COMPONENT_NAME

echo Generating files for component: $COMPONENT_NAME

mkdir ./src/components/$COMPONENT_NAME


touch ./src/components/$COMPONENT_NAME/$COMPONENT_NAME.jsx
touch ./src/components/$COMPONENT_NAME/$COMPONENT_NAME.story.js
touch ./src/components/$COMPONENT_NAME/$COMPONENT_NAME.test.js
touch ./src/components/$COMPONENT_NAME/$COMPONENT_NAME.scss
touch ./src/components/$COMPONENT_NAME/README.md
touch ./src/components/$COMPONENT_NAME/index.js




# Populate Component index.js file
# ================================================================================================
echo "export default from \"./$COMPONENT_NAME.jsx\";" >> ./src/components/$COMPONENT_NAME/index.js


# Append Component Import to the Library index.js file
# ================================================================================================
echo "export $COMPONENT_NAME from \"./components/$COMPONENT_NAME\";" >> ./src/index.js


# Populate Component.jsx file
# ================================================================================================
echo "import React from \"react\";
import * as PropTypes from \"prop-types\";

import \"./$COMPONENT_NAME.scss\";

const propTypes = {};

class $COMPONENT_NAME extends React.Component {
  render() {
    return (
      <div />
    );
  }
}

$COMPONENT_NAME.propTypes = propTypes;

export default $COMPONENT_NAME;

" >> ./src/components/$COMPONENT_NAME/$COMPONENT_NAME.jsx




# Populate Component story file
# ================================================================================================

echo "import React from \"react\";

import $COMPONENT_NAME from \"./$COMPONENT_NAME.jsx\";

import notes from \"./README.md\";

import { storiesOf } from \"@storybook/react\";
import { withKnobs, text } from \"@storybook/addon-knobs\";

const stories = storiesOf(\"Components/$COMPONENT_NAME\", module);

stories.addDecorator(withKnobs);

stories.add(
  \"Default\",
  () => {
    return (
      <$COMPONENT_NAME/>
    );
  },
  { notes: notes }
);


" >> ./src/components/$COMPONENT_NAME/$COMPONENT_NAME.story.js




# Populate Component Jest file
# ================================================================================================

echo "import React from \"react\";
import renderer from \"react-test-renderer\";
import $COMPONENT_NAME from \"./$COMPONENT_NAME.jsx\";

it(\"renders using the default props\", () => {
  const tree = renderer.create(<$COMPONENT_NAME />).toJSON();
  expect(tree).toMatchSnapshot();
});

" >> ./src/components/$COMPONENT_NAME/$COMPONENT_NAME.test.js
