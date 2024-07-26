import antdLocale from 'ant-design-vue/es/locale/ko_KR';
const modules = import.meta.glob('./ko-kr/*', { eager: true }) as any;

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
  dateLocaleName: 'ko-kr',
};
