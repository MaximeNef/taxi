import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

const LanguageSwitcher = ({ className }: Props) => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className={`${className}`}>
      <select
        className={`.select .select:focus font-dosis text-[12px] select::-ms-expand bg-theme-yellow`}
        value={i18n.language}
        onChange={handleLanguageChange}
      >
        <option
          className='option select option h-20 w-20 pl-5 pr-2 py-2'
          data-image='/assets/logos/ne.svg'
          style={{ backgroundImage: "url-loader!url('/assets/logos/ne.svg')" }}
          value='nl'
        >
          NL
        </option>
        <option className='.option .select::-ms-expand bg-image2  ' value='en'>
          EN
        </option>
        <option className='.option .select::-ms-expand bg-image3 ' value='fr'>
          FR
        </option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
