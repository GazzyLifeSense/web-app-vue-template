import antdLocale from 'ant-design-vue/es/locale/de_DE';
const modules = import.meta.glob('./de-de/*', { eager: true }) as any;

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
  dateLocaleName: 'de-de',
};
