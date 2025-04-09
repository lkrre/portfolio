import { useTranslation } from "react-i18next";
interface SkillBarProps {
  name: string;
  value: number;
  color: string;
}

const SkillBar: React.FC<SkillBarProps> = ({
    name,
    value,
    color = 'violet',
  }) => {
    const {t} = useTranslation()
    const percentage = (value / 10) * 100;
  
    return (
      <div className={`w-full max-w-md my-4 text-left text-${color}`}>
        <div className="mb-1 text-sm font-semibold text-center">{t(name)}</div>
  
        <div className="relative h-4 bg-base rounded overflow-hidden border-white border-1">
          <div
            className={`h-full bg-${color}`}
            style={{ width: `${percentage}%`, transition: 'width 0.3s ease' }}
          />
          {Array.from({ length: 9 }, (_, i) => (
              <div
                key={i}
                className="absolute top-0 bottom-0 w-px bg-white opacity-40"
                style={{ left: `${((i + 1) / 10) * 100}%` }}
              />
            ))}
        </div>
      </div>
    );
  };
  
  export default SkillBar;
  