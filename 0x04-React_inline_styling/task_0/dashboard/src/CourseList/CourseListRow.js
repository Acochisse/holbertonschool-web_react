import React from 'react';
import propTypes from 'prop-types';


const Tstyles = { backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab' };

function CourseListRow({
   isHeader,
    textFirstCell,
     textSecondCell }) {
    return (
      
      <tr styles={{Tstyles}}>
        {isHeader && textSecondCell === null && (
          <th id="top-line" colSpan="2">{textFirstCell}</th>
        )}
        {isHeader && textSecondCell !== null && (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )}
        {!isHeader && (
          <>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
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