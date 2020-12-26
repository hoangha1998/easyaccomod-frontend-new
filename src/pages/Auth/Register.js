import React from 'react';
import {Link} from "react-router-dom";
import "./Auth.scss";
import {USER_ROLE} from '../../common/constants';
import {Field, Formik} from 'formik';
import ErrorMessage from '../../components/Form/ErrorMessage';
import Select from '../../components/Form/Select';

const roleOptions = [
  {
    id: USER_ROLE.NORMAL_USER,
    name: 'Người thuê nhà',
  },
  {
    id: USER_ROLE.HOUSE_OWNER,
    name: 'Người cho thuê nhà',
  },
];

class Register extends React.PureComponent {
  state = {
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
      role: USER_ROLE.NORMAL_USER,
      id_number: '',
      full_name: '',
      phone: '',
      email: '',
      province_id: '',
      district_id: '',
      ward_id: '',
      address: '',
    },
  };

  validate = (values) => {
    const errors = {};
    const requiredFields = [
      'username',
      'password',
      'confirmPassword',
      'email',
      'full_name',
      'address',
      'province_id',
      'district_id',
      'ward_id',
      'phone',
    ];
    requiredFields.forEach(field => {
      if (!values[field] || (typeof values[field] === 'string' && !values[field].trim())) {
        errors[field] = 'Vui lòng điền vào trường này.';
      }
    });
    if (values.role === USER_ROLE.HOUSE_OWNER && !values.id_number) {
      errors.id_number = 'Vui lòng điền vào trường này.';
    }
    return errors;
  };

  onSubmit = (values, {setSubmitting}) => {
    console.log(values);
  };

  render() {
    const {initialValues} = this.state;
    return (
      <Formik
        initialValues={initialValues}
        validate={this.validate}
        onSubmit={this.onSubmit}
      >
        {({
          handleSubmit,
          isSubmitting,
        }) =>
          (
            <div className="auth-page register-page page-paper">
              <div className="grid wide">
                <div className="auth-page__wrapper">
                  <h2 className="auth-page__heading">Đăng ký</h2>
                  <div className="auth-page__body">
                    <form className="auth-form-register">
                      <h2 className="auth-form__title">1. Thông tin tài khoản</h2>
                      <div className="row">
                        <div className="col c-12 m-6 l-4">
                          <div className="input-group">
                            <label className="input__label">Tên truy cập:</label>
                            <Field type="text" className="input__text" name="username"/>
                            <ErrorMessage name="username"/>
                          </div>
                        </div>

                        <div className="col c-12 m-6 l-4">
                          <div className="input-group">
                            <label className="input__label">Mật khẩu:</label>
                            <Field type="password" className="input__text" name="password"/>
                            <ErrorMessage name="password"/>
                          </div>
                        </div>


                        <div className="col c-12 m-6 l-4">
                          <div className="input-group">
                            <label className="input__label">Nhập lại mật khẩu:</label>
                            <Field type="password" className="input__text" name="confirmPassword"/>
                            <ErrorMessage name="confirmPassword"/>
                          </div>
                        </div>

                        <div className="col c-12 m-6 l-4">
                          <div className="input-group">
                            <label className="input__label">Loại tài khoản:</label>
                            <Select
                              options={roleOptions}
                              name="role"
                            />
                          </div>
                        </div>

                        <div className="col c-12 m-6 l-4">
                          <div className="input-group">
                            <label className="input__label">CCCD / CMND:</label>
                            <Field type="text" className="input__text" name="id_number"/>
                            <ErrorMessage name="id_number"/>
                          </div>
                        </div>

                      </div>

                      <h2 className="auth-form__title">2. Thông tin cá nhân</h2>
                      <div className="row">
                        <div className="col c-12 m-4 l-4">
                          <div className="input-group">
                            <label className="input__label">Họ và tên:</label>
                            <Field type="text" className="input__text" name="full_name"/>
                            <ErrorMessage name="full_name"/>
                          </div>
                        </div>

                        <div className="col c-12 m-4 l-4">
                          <div className="input-group">
                            <label className="input__label">Số điện thoại:</label>
                            <Field type="text" className="input__text" name="phone"/>
                            <ErrorMessage name="phone"/>
                          </div>
                        </div>

                        <div className="col c-12 m-4 l-4">
                          <div className="input-group">
                            <label className="input__label">Email:</label>
                            <Field type="email" className="input__text" name="email"/>
                            <ErrorMessage name="email"/>
                          </div>
                        </div>

                        <div className="col c-12 m-6 l-4">
                          <div className="input-group">
                            <label className="input__label">Tỉnh / Thành phố</label>
                            <Select
                              options={[]}
                              name="province_id"
                            />
                            <ErrorMessage name="province_id"/>
                          </div>
                        </div>

                        <div className="col c-12 m-6 l-4">
                          <div className="input-group">
                            <label className="input__label">Quận / Huyện</label>
                            <Select
                              options={[]}
                              name="district_id"
                            />
                            <ErrorMessage name="district_id"/>
                          </div>
                        </div>

                        <div className="col c-12 m-6 l-4">
                          <div className="input-group">
                            <label className="input__label">Phường / Xã</label>
                            <Select
                              options={[]}
                              name="ward_id"
                            />
                            <ErrorMessage name="ward_id"/>
                          </div>
                        </div>

                        <div className="col c-12 m-6 l-12">
                          <div className="input-group">
                            <label className="input__label">Địa chỉ</label>
                            <input className="input__text" type="text" placeholder="Địa chỉ của bạn"/>
                            <ErrorMessage name="address"/>
                          </div>
                        </div>
                      </div>
                      <button className="auth-form-btn" onClick={handleSubmit} disabled={isSubmitting}>Đăng Ký</button>
                      <div className="auth-more">
                        <span/>
                        <Link to="/login">Đăng nhập</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </Formik>
    );
  }

}

export default Register;
