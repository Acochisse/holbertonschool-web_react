import React from 'react';
import { act } from 'react-dom/test-utils';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils'

//Write a test to check that the function getFullYear returns the correct year (be careful to not create a time bomb)
//Write a test to check that getFooterCopy returns the correct string when the argument is true or false
//Write a test checking the returned string for getLatestNotification


test('getFullYear returns the correct year', () => {
  expect(getFullYear()).toBe(new Date().getFullYear());
}


test('getFooterCopy returns the correct string', () => {  
  expect(getFooterCopy(true)).toBe('Holberton School');
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
}

test('getLatestNotification returns the correct string', () => {
  expect(getLatestNotification(true)).toBe('Latest notification');
  expect(getLatestNotification(false)).toBe('Latest notification main dashboard');
}
