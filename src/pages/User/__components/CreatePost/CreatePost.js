import React, {Fragment} from 'react';
import {Field, Formik} from "formik";
import ErrorMessage from "../../../../components/Form/ErrorMessage";
import Select from "../../../../components/Form/Select";

const typeOptions = [
  {
    id: 1,
    name: "Chung cư"
  },
  {
    id: 2,
    name: "Chung cư mini",
  },
  {
    id: 3,
    name: "Nhà nguyên căn",
  },
  {
    id: 4,
    name: "Phòng trọ"
  }

];

class CreatePost extends React.PureComponent {
  state = {
    initialValues: {
      title: '',
      city_id: '',
      district_id: '',
      ward_id: '',
      address: '',
      description: '',
      attributes: [],
      type: '',
      create_by: '',
      create_at: '',
      expires_at: '',
    },
  };

  validate = (values) => {
    const errors = {};
    const requireFields = [
        'title',
        'city_id',
        'district_id',
        'ward_id',
        'address',
        'description',
        'type',
    ];

    requireFields.forEach(field => {
      if(!values[field] || (typeof values[field] === 'string' && !values[field].trim())) {
        errors[field] = 'Vui lòng điền vào trường  này.';
      }
    });

    return errors;
  };

  onSubmit = (values, {setSubmitting}) => {
    console.log(values);
  };

  render() {
    const {initialValues} = this.state;

    return (
        <div className="create-post">
          <h2 className="user-page-main__heading">Thêm tin mới</h2>
          <div className="user-page-main__body">
            <div className="create-post__wrapper">
              <Formik
                initialValues={initialValues}
                validate={this.validate}
                onSubmit={this.onSubmit}
              >
                {({
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <Fragment>
                    <form className="ea-form">
                      <div className="row">
                        <div className="col c-12 m-12 l-12">
                          <div className="input-group">
                            <label className="label">Tiêu đề:</label>
                            <Field type="text" className="input" name="title"/>
                            <ErrorMessage name="title"/>
                          </div>
                        </div>
                        <div className="col c-12 m-6 l-6">
                          <div className="input-group">
                            <label className="label">Loại phòng:</label>
                            <Select options={typeOptions} name="type"/>
                            <ErrorMessage name="type"/>
                          </div>
                        </div>
                      </div>


                      <div className="ea-form__btn">
                        <button onClick={handleSubmit} disabled={isSubmitting}>Tạo mới</button>
                      </div>
                    </form>
                  </Fragment>
                )}
              </Formik>
            </div>
          </div>
        </div>
    );
  }
}

export default CreatePost;