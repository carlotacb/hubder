import React, { Component } from 'react';
import BpkText from 'bpk-component-text';

class NoResults extends Component {
  render() {
    return (
      <div>
        <img
          alt="Page not found."
          src="https://js.skyscnr.com/sttc/oc-registry/components/not-found/0.1.0/build/static/media/404-2.1afb7c2a.svg"
          />
        <BpkText>No more results</BpkText>
      </div>
    );
  }
}

export default NoResults;