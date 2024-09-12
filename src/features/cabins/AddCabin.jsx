import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

//Using Compound component pattern in order to separate the state from AddCabin
//and placed the state in modal where it should be handled in order to decrease the
// renders of components
function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open
          opens="cabin-form"
          renderButton={(open) => <Button onClick={open}>Add new cabin</Button>}
        ></Modal.Open>
        <Modal.Window
          name="cabin-form"
          renderForm={(close) => <CreateCabinForm onCloseModal={close} />}
        ></Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;

//Normal way to use Modal
/* 
function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  return (
    <div>
      <Button onClick={() => setIsOpenModal((prev) => !prev)}>
        {isOpenModal ? "Hide form" : "Add new cabin"}
      </Button>
      {isOpenModal && (
        <Modal onClose={handleCloseModal}>
          <CreateCabinForm onCloseModal={handleCloseModal} />
        </Modal>
      )}
    </div>
  );
}
*/
