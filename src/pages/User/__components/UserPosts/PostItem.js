import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import {Link} from 'react-router-dom';
import TableRow from '@material-ui/core/TableRow';
import HyperLink from '../../../../components/HyperLink/HyperLink';
import {ROOM_APPROVED_STATUS} from '../../../../common/constants';

function PostStatus({isApproved, isRejected, isPaid}) {
  if (isApproved && isPaid) {
    return (
      <div className="table-cell-status table-cell-status--active">
        Đã duyệt
      </div>
    );
  }
  if (isApproved && !isPaid) {
    return (
      <div className="table-cell-status table-cell-status--primary">
        Chờ thanh toán
      </div>
    );
  }
  if (isRejected) {
    return (
      <div className="table-cell-status table-cell-status--block">
        Đã từ chối
      </div>
    );
  }
  if (!isApproved) {
    return (
      <div className="table-cell-status table-cell-status--disable">
        Chưa duyệt
      </div>
    );
  }
  return null;
}

function PostItem({item, itemIndex, isAdmin, approvePost}) {
  const isApproved = item.approved_status === ROOM_APPROVED_STATUS.APPROVED;
  const isRejected = item.approved_status === ROOM_APPROVED_STATUS.REJECTED;
  const isPaid = !!item.expires_at;
  const isRented = !!item.status;
  const showLink = (isApproved && isPaid) || isAdmin;
  return (
    <TableRow key={item.id}>
      <TableCell align="center" component="th" scope="row">
        {itemIndex + 1}
      </TableCell>
      <TableCell align="center">
        {
          showLink &&
          <Link to={`/rooms/${item.id}`}>{item.title}</Link>
        }
        {
          !showLink && item.title
        }
      </TableCell>
      <TableCell align="center" width={120}>
        <span className={`table-cell-status table-cell-status--${isRented ? 'primary' : 'disable'}`}>
          {isRented ? 'Đã thuê' : 'Chưa thuê'}
        </span>
      </TableCell>
      <TableCell align="center" width={100}>{item.total_views}</TableCell>
      <TableCell align="center" width={100}>{item.total_favorites}</TableCell>
      <TableCell align="center" width={100}>{item.expires_at}</TableCell>
      <TableCell align="center" width={120}>
        <PostStatus isApproved={isApproved} isPaid={isPaid} isRejected={isRejected}/>
      </TableCell>
      {
        isAdmin &&
        <TableCell align="center" width={120}>
          {
            !isApproved &&
            <HyperLink onClick={approvePost(item, ROOM_APPROVED_STATUS.APPROVED)} title="Duyệt tin">
              <i className="material-icons" style={{color: '#26de81'}}>check_circle</i>
            </HyperLink>
          }
          {
            !isApproved && !isRejected &&
            <HyperLink onClick={approvePost(item, ROOM_APPROVED_STATUS.REJECTED)} title="Từ chối">
              <i className="material-icons" style={{color: '#EE5A24'}}>cancel</i>
            </HyperLink>
          }
        </TableCell>
      }
    </TableRow>
  );
}

export default PostItem;
