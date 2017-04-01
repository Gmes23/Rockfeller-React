import React from 'react';
import Helmet from 'react-helmet';


class Contact extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
 
  render() {

    return (
      <div>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'Search upcoming concerts by your favorite Artist' },
          ]}
        />

      </div>
    );
  }
}


// Wrap the component to inject dispatch and state into it
export default Contact;
