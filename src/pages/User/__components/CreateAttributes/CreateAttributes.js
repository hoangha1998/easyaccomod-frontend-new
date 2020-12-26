import React, {PureComponent} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './CreateAtrributes.scss';
import AttributeForm from "./AttributeForm";


function createData(id, name, value_type, values) {
  return { id, name, value_type, values };
}

const rows = [
  createData(1, 'Diện tích', 'Text', '')
];
;


class CreateAttributes extends PureComponent {
  state = {
    openModal: false,
  }




  handleOpen = () => {
    this.setState({
      openModal: true,
    })
  };

  handleClose = () => {
    this.setState({
      openModal: false,
    })
  }

  render() {
    const {openModal} = this.state;
    return (
        <div className="create-attributes">
          <h2 className="user-page-main__heading">Tiện ích phòng</h2>
          <div className="user-page-main__body">
            <div className="create-attributes__wrapper">
              <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">STT</TableCell>
                      <TableCell align="center">Tên tiện ích</TableCell>
                      <TableCell align="right">Loại</TableCell>
                      <TableCell align="right">Giá trị</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell align="left" component="th" scope="row">
                            {row.id}
                          </TableCell>
                          <TableCell align="center">{row.name}</TableCell>
                          <TableCell align="right">{row.value_type}</TableCell>
                          <TableCell align="right">{row.values}</TableCell>
                        </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <button className="create-attributes__button" onClick={this.handleOpen}>
               <i className="material-icons">add</i> <span>Thêm mới</span>
              </button>

              <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className="ea-modal"
                  open={openModal}
                  onClose={this.handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
              >
                <Fade in={openModal}>
                  <div className="paper">
                    <AttributeForm/>
                  </div>
                </Fade>
              </Modal>
            </div>
          </div>
        </div>
    );
  }
}

export default CreateAttributes;