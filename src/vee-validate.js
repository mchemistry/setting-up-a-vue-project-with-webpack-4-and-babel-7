import { required, confirmed, length, email, numeric } from "vee-validate/dist/rules";
import { extend } from "vee-validate";

extend('required', {
  ...required,
  message: 'Thông tin không được để trống'
})


extend('email', {
  ...email,
  message: 'Email nhập không hợp lý'
})

extend('confirmed', {
  ...confirmed,
  message: 'Mật khẩu nhập lại chưa đúng'
})

extend('length', {
  ...length,
  message: 'This field must have 2 options'
})

extend('numeric', {
  ...numeric,
  message: 'Bạn vui lòng nhập số điện thoại viết liền không dấu cách!',
})

extend('passwords', {
  validate: (value) => {
    const patt = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    return patt.test(String(value))
  },
  message: 'Mật khẩu ít nhất 8 kí tự gồm cả chữ hoa, thường và số'
})

extend('failure-email', {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate: (value) => {
    return false
  },
  message: 'Email không tồn tại trên hệ thống !'
})

extend('username', {
  validate: (value) => {
    const patt = /^[a-z0-9_-]{3,16}$/gim
    return patt.test(String(value))
  },
  message: 'Tên tài khoản không phù hợp'
})
