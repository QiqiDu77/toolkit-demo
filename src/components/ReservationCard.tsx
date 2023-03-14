import React from 'react';
import { useDispatch } from 'react-redux';
import { addCustomer } from '../features/customerSlice';
import { removeReservation } from '../features/reservationSlice';
import { v4 as uuid } from 'uuid';
interface ReservationCardTypes {
  name: string;
  index: number;
}

const ReservationCard = ({ name, index }: ReservationCardTypes) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch(
          addCustomer({
            // 利用uuid生成随机字符串
            id: uuid(),
            name,
            food: [],
          })
        );
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
};

export default ReservationCard;
