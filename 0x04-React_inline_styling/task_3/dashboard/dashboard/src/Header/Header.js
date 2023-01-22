import React, { Component } from 'react';
import holberton_logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    color: '#e01d1d',
    fontSize: '20px',
    borderBottom: '3px solid #e01d1d',
  },
  
  headerImg: {
    width: '200px',
  },
  h1: {
    color: '#e01d1d',
    fontSize: '50px',
    alignItems: 'right',
  }
});

export default function Header(props) {
  return (
    <div className={`${css(styles.header)}`}>
      <img className={`${css(styles.headerImg)}`} src={holberton_logo} alt='logo'/>
      <h1 className={`${css(styles.h1)}`}>School dashboard</h1>
    </div>
  )
}
