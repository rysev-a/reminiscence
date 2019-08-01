import html from 'utils/effects/html';

export const projectListId = 'project-list-page';

const ProjectListPageHtml = () =>
  html('div', {
    className: 'container',
    id: projectListId,
  });

export default ProjectListPageHtml;
