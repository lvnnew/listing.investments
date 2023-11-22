import { easyInvestPlatformsEntity } from '../../../entities/easyInvestPlatforms';


export const easyInvestPlatformsLines = [
  {
    [easyInvestPlatformsEntity.TITLE.fieldKey]: {
      en: 'Bondora',
      ru: 'Bondora',
    },
    [easyInvestPlatformsEntity.COUNTRY.fieldKey]: {
      en: 'Estonia',
      ru: 'Эстония',
    },
    [easyInvestPlatformsEntity.SPECIALIZATION.fieldKey]: {
      en: 'General',
      ru: 'Общая',
    },
    [easyInvestPlatformsEntity.LINK.fieldKey]: {
      en: 'https://www.bondora.com',
      ru: 'https://www.bondora.com',
    },
    [easyInvestPlatformsEntity.PROFITABILITY.fieldKey]: {
      en: '6,81% - 14,81% in euro',
      ru: '6,81% - 14,81% в евро',
    },
    [easyInvestPlatformsEntity.MINIMUM_INVEST_AMOUNT.fieldKey]: {
      en: '10 euro',
      ru: '10 евро',
    },
  },
];

export const easyInvestPlatformsLinesByLang =
  language => easyInvestPlatformsLines.map(
    platform => {
      const returnedPlatform =
        Object.keys(platform).map(
          platformKey => {
            const returnedPlatformKey = platform[platformKey][language];
            // debugger
            return returnedPlatformKey;
          },
        );

      // debugger
      return returnedPlatform;
    },
  );

// export const easyInvestPlatformsLinesRU = easyInvestPlatformsLines.map(platform => {
//   return Object.keys(platform).map(platformKey => {
//     return platformKey.
//   })
// });

export const easyInvestPlatformsRows = [
  {
    id: 1,
    [easyInvestPlatformsEntity.TITLE.fieldKey]: {
      en: 'Bondora',
      ru: 'Bondora',
    },
    [easyInvestPlatformsEntity.COUNTRY.fieldKey]: 'Estonia',
    [easyInvestPlatformsEntity.SPECIALIZATION.fieldKey]: 'General',
    [easyInvestPlatformsEntity.LINK.fieldKey]: {
      en: 'https://www.bondora.com',
      ru: 'https://www.bondora.com',
    },
    [easyInvestPlatformsEntity.PROFITABILITY.fieldKey]: '6,81% - 14,81% in euro',
    [easyInvestPlatformsEntity.MINIMUM_INVEST_AMOUNT.fieldKey]: '10 euro',
  },
  {
    id: 2,
    [easyInvestPlatformsEntity.TITLE.fieldKey]: {
      en: 'JetLend',
      ru: 'JetLend',
    },
    [easyInvestPlatformsEntity.COUNTRY.fieldKey]: 'Estonia',
    [easyInvestPlatformsEntity.SPECIALIZATION.fieldKey]: 'General',
    [easyInvestPlatformsEntity.LINK.fieldKey]: {
      en: 'https://www.bondora.com',
      ru: 'https://www.bondora.com',
    },
    [easyInvestPlatformsEntity.PROFITABILITY.fieldKey]: '6,81% - 14,81% in euro',
    [easyInvestPlatformsEntity.MINIMUM_INVEST_AMOUNT.fieldKey]: '10 euro',
  },
];
