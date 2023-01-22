import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  footer: {
      borderTop: '3px solid #e01d1d',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed',
      bottom: '0',
      fontStyle: 'italic',
    }
})  

export default function Footer(props) {
  return (
    <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(0)}</p>
    </div>
  )
}