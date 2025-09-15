import HTMLIcon from "./icons/HTML";
import CSSIcon from './icons/CSS';
import JavaScriptIcon from "./icons/JavaScript";
import TypeScriptIcon from "./icons/TypeScript";
import TailwindCSSIcon from "./icons/TailwindCSS";
import AstroIconW from "./iconsWhite/AstroW";
import PreactIcon from "./icons/Preact";
import NodejsIcon from "./icons/Nodejs";
import PHPIcon from "./icons/PHP";
import MySQLIcon from "./icons/MySQL";
import WordPressIconW from "./iconsWhite/WordPressW";
import JoomlaIcon from "./icons/joomla";
import VisualStudioCodeIcon from "./icons/VisualStudioCode";

export default function WebSkills() {
  return (
    <div>
      <ul class="flex flex-wrap lg:gap-12 gap-5 lg:px-10 px-2 justify-center items-center lg:text-base text-xs">
        <li class="flex flex-col items-center lg:text-base text-xs">
          <HTMLIcon class="lg:w-16 lg:h-16 w-10 h-10 mt-2" />
          <span class="mt-1 text-white">HTML</span>
        </li>
        <li class="flex flex-col items-center lg:text-base text-xs">
          <CSSIcon class="lg:w-16 lg:h-16 w-10 h-10 mt-2" />
          <span class="mt-1 text-white">CSS</span>
        </li>
        <li class="flex flex-col items-center lg:text-base text-xs">
          <JavaScriptIcon class="lg:w-16 lg:h-16 w-10 h-10 mt-2" />
          <span class="mt-1 text-white">JavaScript</span>
        </li>
        <li class="flex flex-col items-center lg:text-base text-xs">
          <TypeScriptIcon class="lg:w-16 lg:h-16 w-10 h-10 mt-2" />
          <span class="mt-1 text-white">TypeScript</span>
        </li>
        <li class="flex flex-col items-center lg:text-base text-xs text-center">
          <TailwindCSSIcon class="lg:w-16 lg:h-16 w-10 h-10 mt-2" />
          <span class="mt-1 text-white">Tailwind CSS</span>
        </li>
        <li class="flex flex-col items-center lg:text-base text-xs">
          <AstroIconW class="lg:w-16 lg:h-16 w-10 h-10 mt-2" />
          <span class="mt-1 text-white">Astro</span>
        </li>
        <li class="flex flex-col items-center lg:text-base text-xs">
          <PreactIcon class="lg:w-16 lg:h-16 w-10 h-10 mt-2" />
          <span class="mt-1 text-white">Preact</span>
        </li>
        <li class="flex flex-col items-center lg:text-base text-xs">
          <NodejsIcon class="lg:w-16 lg:h-16 w-10 h-10 mt-2" />
          <span class="mt-1 text-white">Node.js</span>
        </li>
        <li class="flex flex-col items-center lg:text-base text-xs">
          <PHPIcon class="lg:w-16 lg:h-16 w-10 h-10 mt-2" />
          <span class="mt-1 text-white">PHP</span>
        </li>
        <li class="flex flex-col items-center lg:text-base text-xs">
          <MySQLIcon class="lg:w-16 lg:h-16 w-10 h-10 mt-2" />
          <span class="mt-1 text-white">MySQL</span>
        </li>
        <li class="flex flex-col items-center lg:text-base text-xs">
          <WordPressIconW class="lg:w-16 lg:h-16 w-10 h-10 mt-2" />
          <span class="mt-1 text-white">WordPress</span>
        </li>
        <li class="flex flex-col items-center lg:text-base text-xs">
          <JoomlaIcon class="lg:w-16 lg:h-16 w-10 h-10 mt-2" />
          <span class="mt-1 text-white">Joomla</span>
        </li>
        <li class="flex flex-col items-center lg:text-base text-xs text-center">
          <VisualStudioCodeIcon class="lg:w-16 lg:h-16 w-10 h-10 mt-2"/>
          <span class="mt-1 text-white">VS Code</span>
        </li>
      </ul>
    </div>
  );
}

