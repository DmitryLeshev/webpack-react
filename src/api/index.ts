import { auth } from './auth';
import { device } from './device';
import { setting } from './setting';
import { main } from './main';

export default { auth, device, setting, main };

// const build = async () => {
//   const { data } = await fetchData({ 'project/map': null });
//   const api: any = {};
//   const apiParams: any = {};
//   Object.entries(data).forEach(([interfaceName, methods]: any) => {
//     interfaceName = interfaceName[0].toLowerCase() + interfaceName.slice(1);
//     api[interfaceName] = {};
//     apiParams[interfaceName] = {};
//     Object.entries(methods).forEach(([methodName, params]: any) => {
//       const path = `${interfaceName + '/' + methodName}`;
//       const method = async (args: any) => await fetchData({ [path]: args });
//       api[interfaceName][methodName] = method;
//       apiParams[interfaceName][methodName] = params;
//     });
//   });
//   console.log('[api] available methods', apiParams);
//   return { api, apiParams };
// };

// export default build;

// let api = {
//   wizard: {
//     getStatus: [],
//     checkAuth: [],
//     checkKey: ['key'],
//     createNewUser: ['key', 'login', 'password', 'firstname', 'lastname'],
//     login: ['password', 'login'],
//     getDevices: [],
//     getWifi: [],
//     protect: ['devices', 'wifi'],
//     getLicenses: ['getLicenses'],
//   },
//   auth: {
//     status: [],
//     login: ['password', 'login'],
//     logout: [],
//   },
//   main: {
//     index: [],
//     getJsonLang: ['lang'],
//     getMainData: [],
//     getGraphicData: ['age'],
//   },
//   device: {
//     list: [],
//   },
// };
