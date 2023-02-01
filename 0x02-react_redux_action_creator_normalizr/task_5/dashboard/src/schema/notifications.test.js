import { getAllNotificationsByUser } from './notifications.js';


describe('getAllNotificationsByUser', () => {
    it('returns an array of notifications for a given user', () => {
        expect(getAllNotificationsByUser('5debd764a7c57c7839d722e9')).toEqual([
            { guid: '2d22c4d6-7f7f-4d4b-9c72-3fe5c4b0f13f', isRead: false, type: 'urgent', value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' },
        });
    });


    