import {NavigationScreens} from '../navigation/helper';

export function convertNavigationScreensToObj() {
  const obj: Record<string, string> = {};
  Object.keys(NavigationScreens).forEach(key => {
    obj[key] = NavigationScreens[key as keyof typeof NavigationScreens];
  });
  return obj;
}
