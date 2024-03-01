import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";
import "./DatePickerModal.css";

const DatePickerModal = ({
  initialDate,
  isOpen,
  closeModal,
  handleUpdateDate,
  setShowModal,
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date(initialDate));

  const handleChangeDate = (date) => {
    setSelectedDate(date);
  };

  const handleUpdate = () => {
    handleUpdateDate(selectedDate);
    closeModal();
  };
  const renderBackdrop = (props) => (
    <div className="modal-customBackDrop" {...props} />
  );
  return (
    <Modal
      onBackdropClick={closeModal}
      className="react-modal"
      renderBackdrop={renderBackdrop}
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <div className="modal-content">
        <h2>Select Date</h2>
        <DatePicker selected={selectedDate} onChange={handleChangeDate} />
        <div className="modal-buttons">
          <button onClick={handleUpdate}>Update</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default DatePickerModal;
