import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Accounts.scss';

const listUser = [
  {
    id: 1,
    username:  'hoangha198',
    full_name: 'Hoàng Thái Hà',
    phone: '0836861282',
    email: 'hth@gmail.com',
    status: false
  },

  {
    id: 2,
    username:  'noname',
    full_name: 'John Wick',
    phone: '0836861282',
    email: 'hth@gmail.com',
    status: true
  },

  {
    id: 3,
    username:  'hoangha198',
    full_name: 'Hoàng Thái Hà',
    phone: '0836861282',
    email: 'hoangthaiha1998@gmail.com',
    status: false
  },
];

class Accounts extends React.PureComponent{


  render() {
    return (
      <div className="accounts">
        <h2 className="user-page-main__heading">Danh sách tài khoản</h2>
        <div className="user-page-main__body">
          <div className="accounts__wrapper">
            <div className="user-list-table">
              <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">STT</TableCell>
                      <TableCell align="center">Tài khoản</TableCell>
                      <TableCell align="center">Họ tên</TableCell>
                      <TableCell align="center">Số điện thoại</TableCell>
                      <TableCell align="center">Email</TableCell>
                      <TableCell align="center">Trạng thái</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {listUser.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell align="left" component="th" scope="row">
                          {index + 1}
                        </TableCell>
                        <TableCell align="center">{item.username}</TableCell>
                        <TableCell align="center">{item.full_name}</TableCell>
                        <TableCell align="center">{item.phone}</TableCell>
                        <TableCell align="center">{item.email}</TableCell>
                        <TableCell align="center">
                      <span className={`user-status user-status--${item.status ? 'active' : 'block'}`}>
                        {item.status ? 'Active' :  'Block'}
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

export default Accounts;