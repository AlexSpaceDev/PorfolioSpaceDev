import UnrealIcon from "./iconsWhite/Unreal";
import UnityIcon from "./iconsWhite/Unity";
import CsharpIcon from "./icons/Csharp";
import CplusplusIcon from "./iconsWhite/CplusplusW";
import VisualStudioIcon from "./icons/VisualStudio";
import VisualStudioCodeIcon from "./icons/VisualStudioCode";

export default function GameSkills() {
  return (
    <div>
      <ul class="flex lg:gap-16 lg:px-10 gap-5 px-5 justify-center items-center flex-wrap">
        <li class="flex flex-col items-center lg:text-base text-xs">
          <UnrealIcon class="lg:w-20 lg:h-20 w-12 h-12 mt-2" />
          <span class="mt-1 text-white">Unreal</span>
        </li>
        <li class="flex flex-col items-center lg:text-base text-xs">
          <CplusplusIcon class="lg:w-20 lg:h-20 w-12 h-12 mt-2" />
          <span class="mt-1 text-white">C++</span>
        </li>
        <li class="flex flex-col items-center lg:text-base text-xs">
          <UnityIcon class="lg:w-20 lg:h-20 w-12 h-12 mt-2" />
          <span class="mt-1 text-white">Unity</span>
        </li>
        <li class="flex flex-col items-center lg:text-base text-xs">
          <CsharpIcon class="lg:w-20 lg:h-20 w-12 h-12 mt-2" />
          <span class="mt-1 text-white">C#</span>
        </li>
        <li class="flex flex-col items-center lg:text-base text-xs text-center">
          <VisualStudioIcon class="lg:w-20 lg:h-20 w-10 h-10 lg:mt-2"/>
          <span class="mt-1 text-white">Visual Studio</span>
        </li>
        <li class="flex flex-col items-center lg:text-base text-xs text-center">
          <VisualStudioCodeIcon class="lg:w-20 lg:h-20 w-10 h-10 lg:mt-2"/>
          <span class="mt-1 text-white">VS Code</span>
        </li>
      </ul>
    </div>
  );
}