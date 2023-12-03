import './styles.css';
import { resolveHTML, Route, RouteMixin } from '../../index.ts';
import { MY_NAME } from '../../../constants.ts';

export const BasicPage = (noBreakCenter: boolean = false): RouteMixin => (route: Route) => ({
  ...route,
  html: () => makeInnerHTML(route, noBreakCenter),
});

async function makeInnerHTML(route: Route, noBreakCenter: boolean) {
  let currentPath = '';

  const pathHTML = route.path
    .split('/')
    .filter(p => p)
    .map((path) => {
      currentPath += '/' + path;

      return `      
        <span style="color: dodgerblue;">/</span>
        <a href="${currentPath}" data-client id="basic__path-segment" style="color: dodgerblue;">${path}</a>
      `;
    })
    .join('');

  return `
    <div id="basic__page-container">
      <div id="basic__path-container" style="${noBreakCenter ? 'justify-content: center;' : ''}">
        <span>
          <span id="basic__shell-name">${MY_NAME}@porfolio</span><!--
       --><span>:</span>
        </span>
        ${noBreakCenter ? '' : '<div class="basic__breaker"></div>'}
        <a href="/" data-client id="basic__home-icon" style="color: dodgerblue;"></a>
        ${pathHTML}
        <span style="scale: .95;">$</span>
      </div>
      <div id="basic__page-body">
        ${await resolveHTML(route)}
      </div>
    </div>
  `;
}
