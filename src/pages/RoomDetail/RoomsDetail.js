import React, {useEffect, useRef, useState} from 'react';
import {Breadcrumb} from "../../components/Breadcrumb/Breadcrumb";
import BreadcrumbItem from "../../components/Breadcrumb/BreadcrumbItem";


import './RoomsDetail.scss';



function RoomsDetail(props) {



  return (
    <div className="room-detail-page page-paper">
      <Breadcrumb>
        <BreadcrumbItem text="Nhà trọ" path={`/rooms`} />
        <BreadcrumbItem text="🌈Phòng cao cấp mới xây, giờ tự do gần Chợ An Nhơn" path="" isActive={true}/>
      </Breadcrumb>

      <div className="grid wide">
        <div className="room-detail-page__wrap">
          <div className="row">
            <div className="col c-12 m-12 l-8">



            </div>
            <div className="col c-12 m-12 l-4">
              Thông tin chủ trọ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomsDetail;