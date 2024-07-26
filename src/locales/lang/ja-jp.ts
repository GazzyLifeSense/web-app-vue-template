import antdLocale from 'ant-design-vue/es/locale/ja_JP';
const modules = import.meta.glob('./ja-jp/*', { eager: true }) as any;

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
  dateLocaleName: 'ja-jp',
};
