//import VeeValidate from 'vee-validate';
//
//Vue.use(VeeValidate);

//import zh from 'vee-validate/dist/locale/zh_CN';//引入中文文件
//
//// 配置中文
//Validator.addLocale(zh);
//
//const config = {
//  locale: 'zh_CN'
//};
//
//Vue.use(VeeValidate,config);
//
//// 自定义validate
//const dictionary = {
//   zh_CN: {
//      messages: {
//        email: () => 'enter the right things',
//        required: ( field )=> "input:" + field
//      },
//      attributes:{
//        email:'mail',
//        password:'password',
//        name: 'account',
//        phone: 'phone'
//      }
//  }
//};
//
//Validator.updateDictionary(dictionary);
//
//Validator.extend('phone', {
//  messages: {
//    zh_CN:field => field + '11num',
//  },
//  validate: value => {
//    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
//  }
//});
