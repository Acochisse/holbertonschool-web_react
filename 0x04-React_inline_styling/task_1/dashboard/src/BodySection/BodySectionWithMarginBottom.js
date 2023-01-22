import React from 'react';
import PropTypes from 'prop-types';
import { BodySection } from './BodySection';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  BodySection: { 
      marginBottom: '40px',
    }
})

class BodySectionWithMarginBottom extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  return (
    <div className = {`BodySection ${css(styles.BodySection)}`}>
      <BodySection {...this.props}></BodySection>
    </div>
  );
}
}

export {BodySectionWithMarginBottom}