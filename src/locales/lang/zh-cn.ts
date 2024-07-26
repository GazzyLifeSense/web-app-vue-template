import antdLocale from 'ant-design-vue/es/locale/zh_CN';
const modules = import.meta.glob('./zh-cn/*', { eager: true }) as any;

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
  dateLocaleName: 'zh-cn',
};
