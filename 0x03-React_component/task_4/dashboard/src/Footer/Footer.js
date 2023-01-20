import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css'

export default function Footer(props) {
  return (
    <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(0)}</p>
    </div>
  )
}