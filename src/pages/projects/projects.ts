import { API_URL } from '../../constants.ts';
import { memo } from '../../utils.ts';

interface Project {
  name: string,
  desc: string,
  stars?: number,
  tags: string[],
  url: string,
}

type Colors = typeof colors;

export const preloadCards = () => {
  getProjectCards().then();
}

export const getProjectCards = memo(async (): Promise<string> => {
  // const { projects } = await fetch(`${API_URL}/projects.json`).then(d => d.json());
  const { projects } = await import('../../assets/misc/projects.json');
  return makeCards(projects, colors);
});

function makeCards(projects: Project[], colors: Colors): string {
  return projects.map(project => `
    <a href="${project.url}" class="projects__card projects__intro-animation">
      <h1>${project.name}${(project.stars ? ' (' + project.stars + '☆)' : '')}</h1>
      <p>${project.desc}</p>
      <div class="projects__tags-container">
        ${makeTags(project.tags, colors)}
      </div>
    </a>
  `).join('');
}

function makeTags(tags: string[], colors: Colors): string {
  return tags.map(tag => `
    <div class="projects__tag">
      ${colors[tag] ? `<span class="projects__tag-dot" style="background: ${colors[tag]};"></span>` : ''}
      ${tag}
    </div>
  `).join('');
}

const colors: Record<string, string> = {
  'Kotlin': 'rgb(169, 123, 255)',
  'Haskell': 'rgb(94, 80, 134)',
  'TypeScript': 'rgb(49, 120, 198)',
  'Python': 'rgb(53, 114, 165)',
  'JavaScript': 'rgb(241, 224, 90)',
  'Assembly': 'rgb(110, 76, 19)',
  'Java': 'rgb(176, 114, 25)',
  'CUDA': 'rgb(58, 78, 58)',
  'C': 'rgb(85, 85, 85)',
  'Lisp': 'rgb(200, 200, 200)',
  'SCSS': 'rgb(198, 83, 140)',
  'C++': 'rgb(215, 63, 126)',
  'Desmos': 'rgb(0, 132, 22)',
};
