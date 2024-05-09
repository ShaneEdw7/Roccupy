import { useForm, SubmitHandler } from "react-hook-form";
import { ImageUrl } from "../types";
import * as api from "../api";

type FormFields = {
  id: number;
  coverPhoto: ImageUrl;
  streetNumber: number;
  streetAddress: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
};

const PropertyInputForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    const propertiesStorage = api.saveProperty(data);
    console.log(propertiesStorage);
    /*
    const propertyStorage = JSON.stringify(data);
    localStorage.setItem("property", propertyStorage);
    */
  };
  return (
    <div>
      <h1 className='font-bold text-lg'>New Property</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-12'>
          <div className='border-b border-gray-900/10 pb-12'>
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='col-span-full'>
                <label
                  htmlFor='coverPhoto'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Cover photo
                </label>
                <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                  <div className='text-center'>
                    <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                      <label
                        htmlFor='coverPhoto'
                        className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
                      >
                        <span>Upload a file</span>
                        <input
                          {...register("coverPhoto")}
                          id='coverPhoto'
                          name='coverPhoto'
                          type='file'
                          className='sr-only'
                        />
                      </label>
                      <p className='pl-1'>or drag and drop</p>
                    </div>
                    <p className='text-xs leading-5 text-gray-600'>
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              Property Information
            </h2>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='col-span-full'>
                <label
                  htmlFor='streetNumber'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Street Number
                </label>
                <div className='mt-2'>
                  <input
                    {...register("streetNumber", {
                      required: "Please enter a number",
                      minLength: 1,
                    })}
                    name='streetNumber'
                    id='streetNumber'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                  {errors.streetNumber && (
                    <div className='text-red-500'>
                      {errors.streetNumber.message}
                    </div>
                  )}
                </div>
                <div className='col-span-full'>
                  <label
                    htmlFor='streetAddress'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Street address
                  </label>
                  <div className='mt-2'>
                    <input
                      {...register("streetAddress", {
                        required: "Field cannot be left empty",
                      })}
                      name='streetAddress'
                      id='streetAddress'
                      autoComplete='street-address'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    {errors.streetAddress && (
                      <div className='text-red-500'>
                        {errors.streetAddress.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className='sm:col-span-2 sm:col-start-1'>
                <label
                  htmlFor='city'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  City
                </label>
                <div className='mt-2'>
                  <input
                    {...register("city", {
                      required: "Field cannot be left empty",
                    })}
                    type='text'
                    name='city'
                    id='city'
                    autoComplete='address-level2'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                  {errors.city && (
                    <div className='text-red-500'>{errors.city.message}</div>
                  )}
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='province'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Province
                </label>
                <div className='mt-2'>
                  <input
                    {...register("province", {
                      required: "Field cannot be left empty",
                    })}
                    type='text'
                    name='province'
                    id='province'
                    autoComplete='address-level1'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                  {errors.province && (
                    <div className='text-red-500'>
                      {errors.province.message}
                    </div>
                  )}
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='postalCode'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Postal code
                </label>
                <div className='mt-2'>
                  <input
                    {...register("postalCode", {
                      required: "Example: A0A 0A0",
                    })}
                    type='text'
                    name='postalCode'
                    id='postalCode'
                    autoComplete='postal-code'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                  {errors.postalCode && (
                    <div className='text-red-500'>
                      {errors.postalCode.message}
                    </div>
                  )}
                </div>
              </div>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='country'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Country
                </label>
                <div className='mt-2'>
                  <select
                    {...register("country")}
                    id='country'
                    name='country'
                    autoComplete='country-name'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                  >
                    <option>Canada</option>
                    <option disabled>United States</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 flex items-center justify-end gap-x-6'>
          <button
            type='button'
            className='text-sm font-semibold leading-6 text-gray-900'
            onClick={() =>
              document.getElementById("PropertyInputForm").showModal()
            }
          >
            Cancel
          </button>
          <button
            type='submit'
            className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            disabled={isSubmitSuccessful}
          >
            {isSubmitSuccessful ? "Submitted" : "Submit"}
          </button>
        </div>
      </form>
      <div className='modal-action'>
        <form method='dialog'>
          <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
            ✕
          </button>
        </form>
      </div>
    </div>
  );
};

export default PropertyInputForm;
