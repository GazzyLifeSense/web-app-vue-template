import antdLocale from 'ant-design-vue/es/locale/zh_TW';
const modules = import.meta.glob('./zh-tw/*', { eager: true });

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
  dateLocaleName: 'zh-tw',
};
