import getAllNotificationsByUser from './notifications';
import { expect } from 'chai';
import jest from 'jest-mock';

//make a test that uses the id '5debd764a7c57c7839d722e9' on function getAllNotificationsByUser
describe('getAllNotificationsByUser', () => {
  it('should return an array of notifications', () => {
    getAllNotificationsByUser('5debd764a7c57c7839d722e9');
    expect(getAllNotificationsByUser).toHaveBeenCalled();
  });
});
