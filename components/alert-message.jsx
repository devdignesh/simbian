import {
  Cable,
  CircleUserRound,
  CircleX,
  FileJson,
  Info,
  LaptopMinimal,
} from "lucide-react";

const iconMap = {
  CircleX,
  LaptopMinimal,
  Info,
  CircleUserRound,
  Cable,
  FileJson,
};

const IconComponent = ({ iconName, isWithoutSimbian }) => {
  const Icon = iconMap[iconName];
  return Icon ? <Icon size={18} className={`${isWithoutSimbian ? 'text-rose-500/60' : 'text-green-400'}`} /> : null;
};

export const AlertMessage = ({ icon, text, title, isWithoutSimbian }) => (
  <div className={`flex gap-2 items-center p-4 ${isWithoutSimbian ? 'bg-blue-300/20' :'bg-blue-900/70'} rounded-md border border-gray-100/10`}>
    <div className={`${isWithoutSimbian ? 'bg-rose-500/10' : 'bg-green-500/10'} p-3 rounded-sm`}>
      <IconComponent iconName={icon} isWithoutSimbian={isWithoutSimbian}/>
    </div>
    <div className="flex flex-col">
      <span className="font-semibold text-white">{title}</span>
      <span className={`${isWithoutSimbian ? 'text-white':'text-gray-300'} text-sm font-medium`}>{text}</span>
    </div>
  </div>
);
