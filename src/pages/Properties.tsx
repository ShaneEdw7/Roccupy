import PropertyCard from "../components/PropertyCard";
import PropertyInputForm from "../components/PropertyInputForm";

const Properties = () => {
  return (
    <>
      <div className='flex flex-col my-3'>
        <div className='flex justify-end p-4'>
          <button
            className='btn'
            onClick={() =>
              document.getElementById("PropertyInputForm").showModal()
            }
          >
            Add Property
          </button>
          <dialog
            id='PropertyInputForm'
            className='modal modal-bottom md:modal-middle'
          >
            <div className='modal-box'>
              <PropertyInputForm />
            </div>
          </dialog>
        </div>
      </div>
      <div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 ml-4 my-4'>
          <PropertyCard />
        </div>
      </div>
    </>
  );
};

export default Properties;
