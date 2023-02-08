function getFullYear() {
  return '2023'
}

function getFooterCopy(isIndex) {
  if (isIndex){
    return 'Holberton School'
  }
  else {
    return 'Holberton School main dashboard'
  }
}
const footerCopy = getFooterCopy(true);
const year = getFullYear();
module.exports = `Copyright ${year} - ${footerCopy}`