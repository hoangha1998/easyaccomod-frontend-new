import React from 'react';
import PostItem from "../../../../components/PostItem/PostItem";
import './NewPost.scss';
import {getAvailableRoomsAPI} from '../../../../api';
import {toast} from 'react-toastify';
import {getApiErrorMessage, transferRooms} from '../../../../common/helpers';

class NewPosts extends React.PureComponent {
  state = {
    rooms: [],
    isLoaded: false,
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    getAvailableRoomsAPI().then(res => {
      this.setState({
        isLoaded: true,
        rooms: transferRooms(res.data?.data?.pageData || []),
      });
    }).catch(error => {
      toast.error(getApiErrorMessage(error));
    });
  };

  render() {
    const {rooms, isLoaded} = this.state;
    if (!isLoaded) {
      return null;
    }
    return (
      <div className="home-new-posts bg-gray">
        <div className="grid wide">
          <div className="home-new-posts__wrap">
            <h3 className="home-new-posts__title">Tin mới đăng</h3>

            <div className="home-new-posts__list">
              <div className="row">

                {
                  rooms.map((post, index) => (
                    <div className="col c-6 m-4 l-2-4" key={index}>
                      <PostItem post={post}/>
                    </div>
                  ))
                }

              </div>
            </div>

            {/*<div className="home-new-posts__more">*/}
            {/*  <Link className="btn btn-link-more" to="">*/}
            {/*    <span>Xem thêm</span>*/}
            {/*    <i className="material-icons">*/}
            {/*      double_arrow*/}
            {/*    </i>*/}
            {/*  </Link>*/}
            {/*</div>*/}


          </div>

          {/*<div className="home-new-post__pagination hide-mobile">*/}
          {/*  <Pagination/>*/}
          {/*</div>*/}
        </div>
      </div>
    );
  }
}

export default NewPosts;
