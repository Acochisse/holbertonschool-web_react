import React from 'react';
import { useState } from 'react';
import propTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite'



function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
  const tStyles = { backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab' }
  const styles = StyleSheet.create({
    mainLine: {
      textAlign: 'center',
    },
    thead: {
      borderBottomStyle: 'solid',
      borderColor: 'grey',
      borderWidth: 1,
      textAlign: 'left',
    },
    tdata: {
      textAlign:'left'
    },
    rowChecked: {
      backgroundColor: '#e6e4e4'
    }
    


  })
  const [isChecked, setChecked] = useState(false);
    const toggleCheck = () => {
      setChecked(!isChecked);
    }
    return(
      <tr style={tStyles}>
        {isHeader && textSecondCell == null && (
          <>
          <th className={`${css(styles.mainLine, styles.thead)}`} colSpan='2'>{textFirstCell}</th>
          </>
        )}
        {isHeader && textSecondCell !== null &&(
<>
          <th className={`${css(styles.thead)}`}>{textFirstCell}</th>
          <th className={`${css(styles.thead)}`}>{textSecondCell}</th>
</>
        )}
        {!isHeader && (
<>
<td className={!isChecked ? `${css(styles.tdata)}` : `${css(styles.tdata)}` + ' ' + `${css(styles.rowChecked)}`}><input type='checkbox' onClick = {() => {toggleCheck()}}></input>{textFirstCell}</td>
          <td className={`${css(styles.tdata)}`}>{textSecondCell}</td>
</>
        )}
      </tr>
    )
  
  
  
}



CourseListRow.propTypes = {
  textFirstCell: propTypes.string.isRequired,
  textSecondCell: propTypes.oneOfType([propTypes.string, propTypes.number]),
  isHeader: propTypes.bool
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
}
export default CourseListRow;