import {selectCourse, unselectCourse} from './courseActionCreators';

describe('selectCourse', () => {
    it('should create an action to select a course', () => {
        expect(selectCourse(1)).toEqual({ type: 'SELECT_COURSE', index: 1 });
});
});


describe('unselectCourse', () => {
    it('should create an action to unselect a course', () => {
        expect(unselectCourse(1)).toEqual({ type: 'UNSELECT_COURSE', index: 1 });
});
});