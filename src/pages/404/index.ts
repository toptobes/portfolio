import './styles.css'
import { Route404Provider } from '../../routerlib';

const html = `
  <div id="e404__background-img">
    <div id="e404__code">
      <span class="e404__code-char">4</span><!--
   --><span class="e404__code-char">0</span><!--
   --><span class="e404__code-char">4</span>
    </div>
    <a href="/" data-client id="e404__home-btn"></a>
  </div>
`

export const Route404: Route404Provider = () => ({
  path: '*',
  html: html,
});
