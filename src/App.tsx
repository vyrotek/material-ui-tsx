import * as React from 'react';

// F12 (Go to Definition) not working - No definition found for 'Button'
// Running 'npm start' works fine.
// While running if you switch to the import below and it continues to works.
// import Button from 'material-ui/Button';

// F12 (Go to Definition) working - But running 'npm start' with this throws an error:
// node_modules\material-ui\index.d.ts
// (2122,25): error TS2307: Cannot find module 'enzyme'.
// import { Button } from 'material-ui';

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