import React from 'react';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import {getRoomsAPI} from '../../../../api';
import {toast} from 'react-toastify';
import {getApiErrorMessage} from '../../../../common/helpers';

class UserPosts extends React.PureComponent {
  state = {
    rooms: [],
    isLoaded: false,
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    getRoomsAPI().then(res => {
      this.setState({
        isLoaded: true,
        rooms: res.data?.data?.pageData || [],
      });
    }).catch(error => {
      toast.error(getApiErrorMessage(error));
      this.setState({
        isLoaded: true,
      });
    });
  };


  render() {
    const {rooms, isLoaded} = this.state;
    if (!isLoaded) {
      return  (
        <div className="user-posts">
          <h2 className="user-page-main__heading">Tin của bạn</h2>
          <div className="user-page-main__body">
            <div className="user-posts__wrapper">
              Đang tải...
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="user-posts">
        <h2 className="user-page-main__heading">Tin của bạn</h2>
        <div className="user-page-main__body">
          <div className="user-posts__wrapper">
            <div className="ea-table">
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">STT</TableCell>
                      <TableCell align="center">Tiêu đề</TableCell>
                      <TableCell align="center">Tình trạng</TableCell>
                      <TableCell align="center">Lượt xem</TableCell>
                      <TableCell align="center">Yêu thích</TableCell>
                      <TableCell align="center">Thời hạn</TableCell>
                      <TableCell align="center">Trạng thái</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rooms.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell align="center" component="th" scope="row">
                          {index + 1}
                        </TableCell>
                        <TableCell align="center">{item.title}</TableCell>
                        <TableCell align="center" width={120}>
                           <span className={`table-cell-status table-cell-status--${item.status ? 'primary' : 'disable'}`}>
                            {item.status ? 'Đã thuê' : 'Chưa thuê'}
                      </span>
                        </TableCell>
                        <TableCell align="center" width={100}>{item.total_views}</TableCell>
                        <TableCell align="center" width={100}>{item.total_favorites}</TableCell>
                        <TableCell align="center" width={100}>{item.expires_at}</TableCell>
                        <TableCell align="center" width={120}>
                      <span className={`table-cell-status table-cell-status--${item.approved_status ? 'active' : 'block'}`}>
                        {item.approved_status ? 'Đã duyệt' : 'Chưa duyệt'}
                      </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPosts;
