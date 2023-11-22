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
  }
];

export const easyInvestPlatformsRows = [
  {
    id: 1,
    [easyInvestPlatformsEntity.TITLE.fieldKey]: 'Bondora',
    [easyInvestPlatformsEntity.COUNTRY.fieldKey]: 'Estonia',
    [easyInvestPlatformsEntity.SPECIALIZATION.fieldKey]: 'General',
    [easyInvestPlatformsEntity.LINK.fieldKey]: 'https://www.bondora.com',
    [easyInvestPlatformsEntity.PROFITABILITY.fieldKey]: '6,81% - 14,81% in euro',
    [easyInvestPlatformsEntity.MINIMUM_INVEST_AMOUNT.fieldKey]: '10 euro',
  }
];
