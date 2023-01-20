import React from 'react';
import PropTypes from 'prop-types';
import { BodySection } from './BodySection';
import './BodySection.css'

class BodySectionWithMarginBottom extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  return (
    <div className="bodySectionWithMargin">
      <BodySection {...this.props}></BodySection>
    </div>
  );
}
}

export {BodySectionWithMarginBottom}