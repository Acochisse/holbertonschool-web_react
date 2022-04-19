export function insertRow(row) {
    console.log('Insert Row', row);
    return Math.floor(Math.random() * Math.floor(1000));
}
export function deleteRow(rowId) {
    console.log('Delete row id', rowId);
    return;
}
export function updateRow(rowId, row) {
    console.log('Update row id', rowId, 'with row', row);
    return rowId;
}