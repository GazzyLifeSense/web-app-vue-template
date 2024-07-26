import antdLocale from 'ant-design-vue/es/locale/en_GB';
const modules = import.meta.glob('./en-gb/*', { eager: true });

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
  dateLocaleName: 'en-gb',
};
