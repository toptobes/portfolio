import './styles.css'
import '../../../utils.ts';
import { Carousel } from './sections/0_carousel.ts';
import { Introduction } from './sections/3_introduction.ts';
import { Functional } from './sections/4_functionally.ts';
import { LowLevel } from './sections/5_low_level.ts';
import { Graphics } from './sections/7_graphics.ts';
import { Interests } from './sections/8_interests.ts';
import { LightBulb } from './sections/9_light_bulb.ts';
import { killTweens, startTweening } from '../../../tweenlib';
import { RouteProvider } from '../../../routerlib';
import { Section } from './section.ts';
import { StartButtons } from './sections/1_start_buttons.ts';
import { Triangle } from './sections/2_triangle.ts';
import { resetProxies } from '../../../tweenlib/transitions.ts';
import { OtherTypes } from './sections/6_other_types.ts';
import { Scroll2Top } from '../../../routerlib/mixins/scroll2top';
import { MY_NAME } from '../../../constants.ts';

const html = (h: number, w: number) => `
  <canvas id="carousel-canvas" height="${h}" width="${w}"></canvas>
  <div id="start-buttons-container">
    <button class="start-diamond-button" data-route="/github">github</button>
    <button class="start-diamond-button" data-route="/about-me" id="about-me-btn">about me</button>
    <button class="start-diamond-button" id="auto-scroll-btn">auto<br>scroll<div></div></button>
    <button class="start-diamond-button" data-route="/projects">projects</button>
    <button class="start-diamond-button" data-route="/linkedin">linkedin</button>
    <div id="start-buttons-snackbar">(Recommended) Scrolls you at an ideal pace. Scroll at any time to stop!</div>
  </div>
  <div id="triangles-container">
    <canvas id="triangles-canvas" height="${h}" width="${w}"></canvas>
  </div>
  <div id="intro-container" class="invisible">
    <div id="intro-text-container">
      <div id="intro-text-line">
        <span>Hi.&nbsp;</span><!--
     --><span>I'm&nbsp;</span><!--
     --><span>${MY_NAME}.</span>
      </div>
      <div id="programming-text-line">
        <span class="invisible">And&nbsp;</span><!--
     --><span class="invisible" id="i-like-programming">I like programming</span><!--
     --><span class="invisible">.</span>
      </div>
      <div id="lisp-text-line">
        <span>(</span><!--
     --><span class="invisible">I</span><!--
     --><span>-</span><!--
     --><span class="invisible">like</span><!--
     --><span>-</span><!--
     --><span class="invisible">programming</span><!--
     --><br><!--
     --><span class="invisible">--</span><!--
     --><span>(functionally))</span>
      </div>
      <div id="low-lvl-text-line">
        <span class="invisible">I like programming</span><!--
     --><span>&nbsp;low level</span>
      </div>
      <div id="programming-types-container" class="invisible">
        &nbsp;
        <div id="programming-types-types-wrapper">
          <div id="programming-types-types">
            <span>full-stack apps<br></span>
            <span>programming languages<br></span>
            <span>with objects<br></span>
            <span>cleanly<br></span>
            <span>robots<br></span>
            <span>in css<br></span>
            <span style="font-size: 1.1em; position: relative; right: 1rem; opacity: .8; white-space: pre">just  kIDding<br></span>
            <span style="font-size: 0.9em; position: relative; left: 2rem; color: #bba0a0;">css is hell<br></span>
            <span>:)<br></span>
            <span>desktop apps<br></span>
            <span>with math<br></span>
            <span>libraries<br></span>
            <span>in interesting ways<br></span>
          </div>
        </div>
        <div id="programming-types-gradient"></div>
      </div>
      <canvas id="starry-canvas" class="invisible" height="${h}" width="${w}"></canvas>
      <div id="graphics-container" class="invisible">
        <canvas id="graphics-canvas" height="${h}" width="${w}"></canvas>
        <div id="dimensions-line" class="invisible">
          <span>&nbsp;</span><!--
       --><span class="drop-shadow" id="dims-txt">in 1.0000D</span>
        </div>
        <div class="graphics-canvas-cover" id="gc-cover-1"></div>
        <div class="graphics-canvas-cover" id="gc-cover-2"></div>
      </div>
      <div id="white-out-container" class="invisible"></div>
    </div>
  </div>
  <div id="interests-container" class="invisible">
    <div id="interests-text-line">
      <span class="interests-text-word">But&nbsp;</span><!--
   --><span class="interests-text-word">I&nbsp;</span><!--
   --><span class="interests-text-word">like&nbsp;</span><!--
   --><span class="interests-text-word">other</span><!--
   --><br><!--
   --><span class="interests-text-word">things&nbsp;</span><!--
   --><span class="interests-text-word">too...</span>
    </div>
    <canvas id="interests-canvas" class="invisible" height="${h}" width="${w}"></canvas>
    <div id="turn-off-text-line" class="invisible">(yank on the chain!)</div>
    <div id="know-you-container" class="invisible">
      <div id="know-you-text-line">...and I'd like to<br>get to know you.</div>
      <button id="know-you-button">Get to know me!</button>
    </div>
  </div>
`

export const MainRoute4Desktop: RouteProvider = (routeTo) => {
  const sections: Section[] = [
    Carousel,
    StartButtons,
    Triangle,
    Introduction,
    Functional,
    LowLevel,
    OtherTypes,
    Graphics,
    Interests,
    LightBulb,
  ];

  let destructors: ReturnType<Section>[] = [];

  return Scroll2Top({
    path: '/',
    html: html(window.innerHeight, window.innerWidth),
    construct() {
      destructors = sections.map(section => (
        section(routeTo)
      ));

      startTweening();
    },
    destruct() {
      resetProxies('main-page');

      destructors.forEach(destructor => {
        destructor?.();
      });

      killTweens();
    },
  })
};
