import { MFOLines } from '@views/investments-in-microfinance-organizations/data';

export const localizeMFOLines =
  language => MFOLines.map(
    (platform, platformIndex: number) => {
      const platformKeys = Object.keys(platform);
      const returnedPlatform =
        platformKeys.reduce(
          (localizedPlatform: Object , platformKey) => {
            localizedPlatform[platformKey] = typeof platform[platformKey] === 'string'
              ? platform[platformKey]
              : platform[platformKey][language];
            return localizedPlatform;
          },
          {} as Object,
        );

      // @ts-ignore
      returnedPlatform.id = platformIndex + 1;
      return returnedPlatform;
    },
  );
