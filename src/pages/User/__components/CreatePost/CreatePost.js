import React, {Fragment} from 'react';
import {Field, Formik} from "formik";
import ErrorMessage from "../../../../components/Form/ErrorMessage";
import Select from "../../../../components/Form/Select";
import {ROOM_TERM, ROOM_TYPE} from "../../../../common/constants";
import {addRoomApi, getAttributesAPI} from '../../../../api';
import {toast} from 'react-toastify';
import {getApiErrorMessage} from '../../../../common/helpers';
import RoomAttributes from './RoomAttributes';
import SelectLocations from '../../../../components/Form/SelectLocations';

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
];

const termOptions = [
  {
    id: ROOM_TERM.WEEK,
    name: 'Tuần',
  },
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
    name: 'Năm',
  }
];

class CreatePost extends React.PureComponent {
  state = {
    initialValues: {
      title: '',
      province_id: '',
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
      term: '',
      term_qty: '',
      owner_full_name: '',
      owner_phone: '',
    },
    attributes: [],
    isLoaded: false,
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    getAttributesAPI().then(res => {
      const attributes = (res.data.data || []);
      attributes.forEach(item => {
        if (item.predefined_values) {
          item.predefined_values = item.predefined_values.map(v => ({
            id: v,
            name: v,
          }));
        }
      });
      this.setState(prevState => {
        const initialValues = {...prevState.initialValues};
        if (attributes.length) {
          attributes.forEach(item => {
            initialValues[`attribute_${item.id}`] = '';
          });
        }
        return {
          attributes,
          initialValues,
          isLoaded: true,
        };
      });
    }).catch(error => {
      toast.error(getApiErrorMessage(error));
    });
  };

  validate = (values) => {
    const errors = {};
    const requireFields = [
      'title',
      'province_id',
      'district_id',
      'ward_id',
      'address',
      'description',
      'type',
      'price',
    ];

    requireFields.forEach(field => {
      if (!values[field] || (typeof values[field] === 'string' && !values[field].trim())) {
        errors[field] = 'Vui lòng điền vào trường  này.';
      }
    });

    return errors;
  };

  onSubmit = (values, {setSubmitting}) => {
    addRoomApi(values).then(() => {
      setSubmitting(false);
      toast.success('Đã lưu, vui lòng chờ phê duyệt.');
    }).catch(error => {
      setSubmitting(false);
      toast.error(getApiErrorMessage(error));
    });
  };

  render() {
    const {initialValues, attributes, isLoaded} = this.state;

    if (!isLoaded) {
      return (
        <div className="create-post">
          <h2 className="user-page-main__heading">Thêm tin mới</h2>
          <div className="user-page-main__body">
            <div className="create-post__wrapper">
              Loading...
            </div>
          </div>
        </div>
      );
    }

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
                values,
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
                      <div className="col c-12 m-4 l-4">
                        <div className="input-group">
                          <label className="label">Loại phòng:</label>
                          <Select options={typeOptions} name="type"/>
                          <ErrorMessage name="type"/>
                        </div>
                      </div>

                      <div className="col c-12 m-4 l-4">
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

                    <div className="row">
                      <SelectLocations values={values}/>
                      <div className="col c-12 m-6 l-12">
                        <div className="input-group">
                          <label className="input__label">Địa chỉ</label>
                          <Field name="address" className="input" type="text"/>
                          <ErrorMessage name="address"/>
                        </div>
                      </div>
                    </div>

                    {/* Attributes Room */}

                    <div className="row">
                      <RoomAttributes attributes={attributes}/>
                    </div>

                    <div className="row">
                      <div className="col l-12">
                        <div className="input-group">
                          <label className="label">Hình ảnh:</label>
                          <input name="files" type="file"/>
                        </div>
                      </div>

                      <div className="col l-12">
                        <div className="input-group">
                          <label className="label">Mô tả:</label>
                          <Field as="textarea" rows="6" name="description" className="input"/>
                        </div>

                      </div>
                    </div>

                    <div className="row">
                      <div className="col l-6">
                        <div className="input-group">
                          <label className="label">Thời gian đăng phòng:</label>
                          <Select
                            options={termOptions}
                            name="term"
                          />
                          <ErrorMessage name="term"/>
                        </div>
                      </div>

                      <div className="col l-6">
                        <div className="input-group">
                          <label className="label">Số lượng:</label>
                          <Field type="text" className="input" name="term_qty"/>
                          <ErrorMessage name="term_qty"/>
                        </div>
                      </div>
                    </div>

                    <div className="ea-form__btn">
                      <button onClick={handleSubmit} disabled={isSubmitting} type="submit">Tạo mới</button>
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
