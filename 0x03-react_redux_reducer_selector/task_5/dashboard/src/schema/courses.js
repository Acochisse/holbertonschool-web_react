import { schema, normalize } from 'normalizr';


const coursesSchema = new schema.Entity('courses');

function coursesNormalizer(data) {
  return normalize(data, [coursesSchema]);
}

module.exports = coursesNormalizer;
