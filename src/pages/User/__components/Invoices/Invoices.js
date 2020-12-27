import React, {PureComponent} from 'react';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";

const listInvoices = [
  {
    id: 1,
    title: 'Phòng trọ giá rẻ Mỹ Đình',
    time: '2 tuần',
    price: '1.000.000',
    created_at: '20-12-2020',
    paid_at: '20-12-2020',
    status: true
  },

  {
    id: 2,
    title: 'Chung cư mini Trần Bình',
    time: '1 tháng',
    price: '4.000.000',
    created_at: '20-12-2020',
    paid_at: '',
    status: false,
  },
  {
    id: 3,
    title: 'Nhà nguyên căn Phú Diễn Nhà nguyên căn Phú Diễn Nhà nguyên căn Phú Diễn',
    time: '2 tuần',
    price: '1.000.000',
    created_at: '19-12-2020',
    paid_at: '',
    status: true
  }
];

class Invoices extends PureComponent {
  render() {
    return (
        <div className="invoices">
          <h2 className="user-page-main__heading">Quản lí hóa đơn</h2>
          <div className="user-page-main__body">
            <div className="invoices__wrapper">
              <div className="invoices-table ea-table">
                <TableContainer component={Paper}>
                  <Table  aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">STT</TableCell>
                        <TableCell align="center">Tin đăng</TableCell>
                        <TableCell align="center">Thời hạn</TableCell>
                        <TableCell align="center">Chi phí</TableCell>
                        <TableCell align="center">Ngày tạo</TableCell>
                        <TableCell align="center">Thanh toán</TableCell>
                        <TableCell align="center">Trạng thái</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {listInvoices.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell align="left" component="th" scope="row" width={60}>
                              {index + 1}
                            </TableCell>
                            <TableCell align="center">{item.title}</TableCell>
                            <TableCell align="center" width={90}>{item.time}</TableCell>
                            <TableCell align="center" width={130}>{item.price} VNĐ</TableCell>
                            <TableCell align="center" width={110}>{item.created_at}</TableCell>
                            <TableCell align="center" width={110}>{item.paid_at ? item.paid_at : 'Đang chờ'}</TableCell>
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

export default Invoices;