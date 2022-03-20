import { useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import Modal from "react-modal";
import "./addMovie.css";
Modal.setAppElement("#root");
const AddMovie = (addNewMovie) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const[rating,setRating] = useState("");
  const [date, setDate] = useState("");

  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const[type,setType] = useState("");
  
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleSubmit = () => {
    let newMovie = {
      name,
      rating,
      date,
      image,
      description,
      type
    };
    addNewMovie(newMovie);
    setIsOpen(false);
    setName("");
    setRating("");
    setDate("");
    setImage("");
    setDescription("");
setType("");
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
        <button className="Modal-btn" onClick={handleSubmit}>
          submit
        </button>

        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default AddMovie;