import PropertyCard from "../components/PropertyCard";
import PropertyInputForm from "../components/PropertyInputForm";

const Properties = () => {
  return (
    <>
      <div className='flex flex-row my-3 items-end'>
        <div>
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
        <div className='h-full grid grid-cols-2 gap-4'>
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
    </>
  );
};

export default Properties;
