import React, {Fragment} from 'react';
import {Field, Formik} from "formik";
import ErrorMessage from "../../../../components/Form/ErrorMessage";
import Select from "../../../../components/Form/Select";
import {ATTRIBUTE_VALUE_TYPE, ROOM_PERIOD_PRICE, ROOM_TERM, ROOM_TYPE} from "../../../../common/constants";

const typeOptions = [
  {
    id: ROOM_TYPE.FULL_APARTMENT,
    name: "Chung cư"
  },
  {
    id: ROOM_TYPE.MINI_APARTMENT,
    name: "Chung cư mini",
  },
  {
    id: ROOM_TYPE.FULL_HOUSE,
    name: "Nhà nguyên căn",
  },
  {
    id: ROOM_TYPE.BOARDING_HOUSE,
    name: "Phòng trọ"
  }

];

const roomPeriod = [
  {
    id: ROOM_TERM.MONTH,
    name: 'Tháng',
  },
  {
    id: ROOM_TERM.QUARTER,
    name: 'Quý',
  },
  {
    id: ROOM_TERM.YEAR,
    name: 'Năm'
  }
]

const roomAttributes = [
  {
    id: 1,
    name: "Diện tích",
    value_type: ATTRIBUTE_VALUE_TYPE.INTEGER,
    values: '',
  },

  {
    id: 2,
    name: "Chung chủ",
    value_type: ATTRIBUTE_VALUE_TYPE.TEXT,
    values: [
      {
        id: 1,
        name: 'Có'
      },
      {
        id: 2,
        name: 'Không'
      },
    ]
  },
  {
    id: 3,
    name: "Phòng tắm",
    value_type: ATTRIBUTE_VALUE_TYPE.TEXT,
    values: [
      {
        id: 1,
        name: 'Khép kín'
      },
      {
        id: 2,
        name: 'Chung'
      },
    ],
  },
  {
    id: 4,
    name: "Điều hòa",
    value_type: ATTRIBUTE_VALUE_TYPE.TEXT,
    values: [
      {
        id: 1,
        name: 'Có'
      },
      {
        id: 2,
        name: 'Không'
      },
    ],
  }
]

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
      price: '',
      period: '',
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
        'price',
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
                        <div className="col c-12 m-5 l-5">
                          <div className="input-group">
                            <label className="label">Loại phòng:</label>
                            <Select options={typeOptions} name="type"/>
                            <ErrorMessage name="type"/>
                          </div>
                        </div>

                        <div className="col c-12 m-3 l-3">
                          <div className="input-group">
                            <label className="label">Thời gian:</label>
                            <Select
                              options={roomPeriod}
                              name="period"
                            />
                            <ErrorMessage name="period"/>
                          </div>
                        </div>

                        <div className="col c-12 m-4 l-4">
                          <div className="input-group">
                            <label className="label">Giá:</label>
                            <Field type="text" className="input" name="price"/>
                            <ErrorMessage name="price"/>
                          </div>
                        </div>
                      </div>

                      {/* Attributes Room */}

                      <div className="row">
                        {
                          roomAttributes.map(item => (
                              <div className="col c-12 m-6 l-4" key={item.id}>
                                <div className="input-group">
                                  <label className="label">{item.name}:</label>
                                  {
                                    item.values &&
                                        <Select
                                            options={item.values}
                                           name={item.id}
                                        />
                                  }

                                  {
                                    !item.values &&
                                       <>
                                         <Field className="input" type="text"  name={item.id} />
                                         <ErrorMessage name={item.id}/>
                                       </>
                                  }

                                </div>
                              </div>
                          ))
                        }

                      </div>

                      <div className="row">
                        <div className="col l-12">
                          <div className="input-group">
                            <lable className="label">Hình ảnh:</lable>
                            <Field name="images" type="file"/>
                          </div>
                        </div>

                        <div className="col l-12">
                          <div className="input-group">
                            <lable className="label">Mô tả:</lable>
                            <Field as="textarea" rows="6" name="description" className="input"/>
                          </div>

                        </div>
                      </div>

                      <div className="col l-6">

                      </div>
                      <div className="col l-6"></div>

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