import { Trans, useTranslation } from 'react-i18next';

const FormattedTrans = ({ i18nKey }: { i18nKey: string }) => {
  const { t } = useTranslation();
  return (
    <div className='mb-12'>
        <Trans
        i18nKey={i18nKey}
        components={{
            italic: <span className="italic" />,
            gray: <span className="text-gray" />,
            silver: <span className="text-silver" />,
            winter: <span className="text-winter" />,
            pictonBlue: <span className="text-picton-blue" />,
            carolina: <span className="text-carolina" />,
            cornflower: <span className="text-cornflower" />,
            trueBlue: <span className="text-true-blue" />,
            navyBlue: <span className="text-navy-blue" />,
            pineGreen: <span className="text-pine-green" />,
            mayGreen: <span className="text-may-green" />,
            russianGreen: <span className="text-russian-green" />,
            eucalyptus: <span className="text-eucalyptus" />,
            mossGreen: <span className="text-moss-green" />,
            cAndC: <span className="text-c-and-c" />,
            burlywood: <span className="text-burlywood" />,
            sheenGold: <span className="text-sheen-gold" />,
            antiqueBrass: <span className="text-antique-brass" />,
            watermelon: <span className="text-watermelon" />,
            tartOrange: <span className="text-tart-orange" />,
            lilac: <span className="text-lilac" />,
            violet: <span className="text-violet" />,
            blueGray: <span className="text-blue-gray" />
        }}
        />
    </div>
  );
};

export default FormattedTrans;
