import React, {Component} from 'react';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";

const listPost = [
  {
    id: 1,
    title: "Phòng trọ mới xây 23m2, Đông Ngạc, Bắc Từ Liêm",
    room_status: false,
    time: "1 tuần",
    view: 679,
    favorite: 28,
    status: true,
  },

  {
    id: 2,
    title: "Phòng trọ mới xây 23m2, Đông Ngạc, Bắc Từ Liêm",
    room_status: false,
    time: "1 tháng",
    view: 4579,
    favorite: 1000,
    status: true,
  },

  {
    id: 3,
    title: "Phòng trọ mới xây 23m2, Đông Ngạc, Bắc Từ Liêm",
    room_status: true,
    time: "1 tuần",
    view: 7251,
    favorite: 300,
    status: true,
  },

  {
    id: 4,
    title: "Phòng trọ mới xây 23m2, Đông Ngạc, Bắc Từ Liêm",
    room_status: false,
    time: "3 tuần",
    view: 2756,
    favorite: 500,
    status: true,
  },
  {
    id: 5,
    title: "Phòng trọ mới xây 23m2, Đông Ngạc, Bắc Từ Liêm",
    room_status: true,
    time: "1 tuần",
    view: 121,
    favorite: 12,
    status: false,
  },

]

class UserPosts extends Component {
  render() {
    return (
      <div className="user-posts">
        <h2 className="user-page-main__heading">Tin của bạn</h2>
        <div className="user-page-main__body">
          <div className="user-posts__wrapper">
            <div className="ea-table">
              <TableContainer component={Paper}>
                <Table  aria-label="simple table">
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
                    {listPost.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell align="center" component="th" scope="row">
                          {index + 1}
                        </TableCell>
                        <TableCell align="center">{item.title}</TableCell>
                        <TableCell align="center" width={120}>
                           <span className={`table-cell-status table-cell-status--${item.room_status ? 'primary' : 'disable'}`}>
                            {item.room_status ? 'Đã thuê' :  'Chưa thuê'}
                      </span>
                        </TableCell>
                        <TableCell align="center" width={100}>{item.view}</TableCell>
                        <TableCell align="center" width={100}>{item.favorite}</TableCell>
                        <TableCell align="center" width={100}>{item.time}</TableCell>
                        <TableCell align="center" width={120}>
                      <span className={`table-cell-status table-cell-status--${item.status ? 'active' : 'block'}`}>
                        {item.status ? 'Đã duyệt' :  'Chưa duyệt'}
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