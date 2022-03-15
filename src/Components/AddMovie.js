import { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
const AddMovie = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className="Add-btn" onClick={openModal}>
        +
      </button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">Add A Movie </h1>
        <form>
          <label>Movie name</label>
          <input type="text" name="name" />
          <br></br>
          <label>Movie rating</label>
          <div className="rating-search"></div>
          <input type="number" name="rating" min="1" max="5" />
          <br></br>
          <label>Movie date</label>
          <input type="date" name="date" />
          <br></br>
          <label>Movie description</label>
          <input type="text" name="description" />
          <br></br>
          <label>Movie type</label>
          <input type="text" name="type" />
        </form>
      </Modal>
    </div>
  );
};
export default AddMovie;