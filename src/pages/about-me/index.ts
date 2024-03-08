import './styles.css'
import { RouteProvider } from '../../routerlib';
import profile from '../../assets/icons/profile-icon.svg?url'
import { BasicPage } from '../../routerlib/mixins/basicpage';
import { Scroll2Top } from '../../routerlib/mixins/scroll2top';
import { MY_NAME } from '../../constants.ts';

const html = `
  <div id="about-me__body-container">
    <div>
      <br>
      <p>Hey! I'm ${MY_NAME}, a passionate programmer, car enthusiast, and metalhead from the Austin area.</p>
      <br>
      <p>I'm currently a full-time software engineer, and a student at Austin Community College, pursuing an undergraduate degree in Computer Science.</p>
      <br>
      <p>I enjoy all facets of programming, and have no clue what to put for the rest of this page.</p>
      <br>
      <p>
        Main languages:
        <ul id="about-me__languages-list">
          <li>Kotlin + Java</li>
          <li>TypeScript + JavaScript</li>
          <li>Haskell</li>
          <li>C</li>
        </ul>
      </p>
      <br>
      <a href="/" data-client id="about-me__back-to-home-btn">🠔 Back to home</a>
    </div>
    <div id="about-me__squares-container">
      <div id="about-me__square-3"></div>
      <div id="about-me__square-2"></div>
      <div id="about-me__square-1">
        <img src="${profile}" alt="Picture of me" id="about-me__profile-pic">
      </div>
    </div>
  </div>
`;

export const AboutMe: RouteProvider = () => ({
  path: '/about-me',
  html: html,
  mixins: [BasicPage(), Scroll2Top]
});
