import tech from '../../../../db/tech.json';

// Content lives in db/tech.json and is bundled into the build.
// Each entry gets its key as an id, then the list is returned in key order.
const getTech = () => Promise.resolve(
  Object.keys(tech).sort().map((id) => ({ ...tech[id], id })),
);

export default { getTech };
