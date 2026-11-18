import projects from '../../../../db/projects.json';

// Content lives in db/projects.json and is bundled into the build.
// Each entry gets its key as an id, then the list is returned in key order.
const getProjects = () => Promise.resolve(
  Object.keys(projects).sort().map((id) => ({ ...projects[id], id })),
);

export default { getProjects };
