import antdLocale from 'ant-design-vue/es/locale/de_DE';
const modules = import.meta.glob('./de-de/*', { eager: true });

const obj = {};
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
