import antdLocale from 'ant-design-vue/es/locale/fr_FR';
const modules = import.meta.glob('./fr-fr/*', { eager: true });

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
  dateLocaleName: 'fr-fr',
};
