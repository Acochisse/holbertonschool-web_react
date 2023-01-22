import React from 'react';
import propTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  topLine: {
    textAlign: 'center',
},
th: {
    padding: '10px',
    textAlign: 'left',
    borderBottom: '1px solid grey',
},
td: {
    padding: '10px',
    textAlign: 'left',
},
tr: {
backgroundColor: CourseListRow.isHeader ? '#deb5b545' : 'white',
}
})


function CourseListRow({
   isHeader,
    textFirstCell,
     textSecondCell }) {
    return (
      <tr className={`Header ${css(styles.tr)}`}>
        {isHeader && textSecondCell === null && (
          <th className={`topline ${css(styles.topLine)}`} id="topLine" colSpan="2">{textFirstCell}</th>
        )}
        {isHeader && textSecondCell !== null && (
          <>
            <th className={`Tableheader ${css(styles.th)}`}>{textFirstCell}</th>
            <th className={`Tableheader ${css(styles.th)}`}>{textSecondCell}</th>
          </>
        )}
        {!isHeader && (
          <>
            <td className={`tableData ${css(styles.td)}`}>{textFirstCell}</td>
            <td className={`tableData ${css(styles.td)}`}>{textSecondCell}</td>
          </>
        )}
      </tr>
    );
  }

CourseListRow.propTypes = {
  isHeader: propTypes.bool,
  textFirstCell: propTypes.string.isRequired,
  textSecondCell: (propTypes.string || propTypes.number),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;