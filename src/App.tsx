import * as React from 'react';

import Button from 'material-ui/Button';
// VS Code cannot find definition for the above import and shows error:
// Could not find a declaration file for module 'material-ui/Button'.
// '/material-ui-tsx/node_modules/material-ui/Button/index.js'
// implicitly has an 'any' type. Try `npm install @types/material-ui/Button` if it exists 
// or add a new declaration (.d.ts) file containing `declare module 'material-ui/Button';`

 
// import { Button } from 'material-ui';
// VS Code finds definition with the above import but react throws this error after 'npm start':
// Failed to compile.
// \material-ui-tsx\node_modules\material-ui\index.d.ts
// (2122,25): error TS2307: Cannot find module 'enzyme'.

export default class App extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button raised={true} color="primary">
          Click
        </Button>
      </div>
    );
  }

}