import bio from '../../../../db/bio.json';

// Content lives in db/bio.json and is bundled into the build.
// Each entry gets its key as an id, then the list is returned in key order.
const getBio = () => Promise.resolve(
  Object.keys(bio).sort().map((id) => ({ ...bio[id], id })),
);

export default { getBio };
