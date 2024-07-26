import antdLocale from 'ant-design-vue/es/locale/en_US';
const modules = import.meta.glob('./en-us/*', { eager: true }) as any;

const obj: any = {};
Object.keys(modules).forEach(key => {
  const mod = modules[key].default || {};
  obj[mod.name] = mod;
});
export default {
  message: {
    ...obj,
    antdLocale,
  },
  dateLocale: null,
  dateLocaleName: 'en-us',
};
