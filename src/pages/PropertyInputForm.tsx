import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ImageUrl } from "../types";
import * as api from "../api";
import InputFormHeader from "../components/InputFormHeader";

type FormFields = {
  id: number;
  coverPhoto: ImageUrl;
  streetNumber: number;
  streetAddress: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  propertytype: string;
  units: number;
  price: number;
  initialloan: number;
  marketvalue: number;
  loanpayment: number;
  propertytax: number;
  rent1: number;
  rent2: number;
  rent3: number;
  rent4: number;
  purchasedate: Date;
};

interface PropertyInputFormProps {
  onFormSubmit: () => void;
}

// CreatePropertyForm
const PropertyInputForm: React.FC<PropertyInputFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    api.saveProperty(data).then(() => props.onFormSubmit());
  };

  const navigate = useNavigate();
  const today = new Date();

  return (
    <>
      <InputFormHeader />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-12 m-6 p-3 bg-slate-100'>
            <div className='border-b border-gray-900/10 pb-12'>
              <h2 className='text-xl font-semibold leading-7 text-gray-900'>
                Property Details
              </h2>

              <div className='mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-1 sm:col-start-1'>
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
                      className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    {errors.streetNumber && (
                      <div className='text-red-500'>
                        {errors.streetNumber.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className='sm:col-span-3'>
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
                      className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    {errors.streetAddress && (
                      <div className='text-red-500'>
                        {errors.streetAddress.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className='sm:col-span-1 sm:col-start-1'>
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
                      className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    {errors.city && (
                      <div className='text-red-500'>{errors.city.message}</div>
                    )}
                  </div>
                </div>

                <div className='sm:col-span-1'>
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
                      className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    {errors.province && (
                      <div className='text-red-500'>
                        {errors.province.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className='sm:col-span-1'>
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
                      className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    {errors.postalCode && (
                      <div className='text-red-500'>
                        {errors.postalCode.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='country'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Country
                  </label>
                  <div className='mt-2'>
                    <input
                      {...register("country", {
                        required: "Field cannot be left empty",
                      })}
                      type='text'
                      name='country'
                      id='country'
                      autoComplete='country'
                      className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    {errors.country && (
                      <div className='text-red-500'>
                        {errors.country.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className='mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='propertytype'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Property Type
                  </label>
                  <div className='mt-2'>
                    <select
                      {...register("propertytype")}
                      id='propertytype'
                      name='propertytype'
                      autoComplete='propertytype'
                      className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                    >
                      <option>Single Family</option>
                      <option>Duplex</option>
                      <option>Triplex</option>
                      <option>Multi Family</option>
                      <option>Condo/Apartment</option>
                      <option>Commercial</option>
                      <option>Mixed Use</option>
                    </select>
                  </div>
                </div>
                <div className='sm:col-span-1'>
                  <label
                    htmlFor='units'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    # of Units
                  </label>
                  <div className='mt-2'>
                    <select
                      {...register("units", {
                        required: "You Must Make a Selection",
                      })}
                      name='units'
                      id='units'
                      autoComplete='units'
                      className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                    {errors.units && (
                      <div className='text-red-500'>{errors.units.message}</div>
                    )}
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='purchasedate'
                    className="'block text-sm font-medium leading-6 text-gray-900'"
                  >
                    Purchase Date
                  </label>
                  <div className='mt-2'>
                    <input
                      {...register("purchasedate", {
                        required: "Field cannot be left empty",
                      })}
                      type='date'
                      name='purchasedate'
                      id='purchasedate'
                      autoComplete='purchasedate'
                      className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    {errors.purchasedate && (
                      <div className='text-red-500'>
                        {errors.purchasedate.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <h2 className='text-xl font-semibold leading-7 text-gray-900 mt-8'>
                Financial Details
              </h2>
              <div className='mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='price'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Purchase Price
                  </label>
                  <div className='mt-2'>
                    <input
                      {...register("price", {
                        required: "Field cannot be left empty",
                      })}
                      placeholder='$'
                      type='text'
                      name='price'
                      id='price'
                      autoComplete='price'
                      className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    {errors.price && (
                      <div className='text-red-500'>{errors.price.message}</div>
                    )}
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='initialloan'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Initial Loan Amount
                  </label>
                  <div className='mt-2'>
                    <input
                      {...register("initialloan", {
                        required: "Field cannot be left empty",
                      })}
                      placeholder='$'
                      type='text'
                      name='initialloan'
                      id='initialloan'
                      autoComplete='initialloan'
                      className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    {errors.initialloan && (
                      <div className='text-red-500'>
                        {errors.initialloan.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='marketvalue'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Market Value
                  </label>
                  <div className='mt-2'>
                    <input
                      {...register("marketvalue", {
                        required: "Field cannot be left empty",
                      })}
                      placeholder='$'
                      type='text'
                      name='marketvalue'
                      id='marketvalue'
                      autoComplete='marketvalue'
                      className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    {errors.marketvalue && (
                      <div className='text-red-500'>
                        {errors.marketvalue.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='loanpayment'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Loan Payment
                  </label>
                  <div className='mt-2'>
                    <input
                      {...register("loanpayment", {
                        required: "Field cannot be left empty",
                      })}
                      placeholder='$'
                      type='text'
                      name='loanpayment'
                      id='loanpayment'
                      autoComplete='loanpayment'
                      className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    {errors.loanpayment && (
                      <div className='text-red-500'>
                        {errors.loanpayment.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='propertytax'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Property Tax
                  </label>
                  <div className='mt-2'>
                    <input
                      {...register("propertytax", {
                        required: "Field cannot be left empty",
                      })}
                      placeholder='$'
                      type='text'
                      name='propertytax'
                      id='propertytax'
                      autoComplete='propertytax'
                      className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    {errors.propertytax && (
                      <div className='text-red-500'>
                        {errors.propertytax.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='rent1'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Rent
                  </label>
                  <div className='mt-2'>
                    <input
                      {...register("rent1", {
                        required: "Field cannot be left empty",
                      })}
                      placeholder='$'
                      type='text'
                      name='rent1'
                      id='rent1'
                      autoComplete='rent1'
                      className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    {errors.rent1 && (
                      <div className='text-red-500'>{errors.rent1.message}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-6 mb-4 mr-4 flex items-center justify-end gap-x-6'>
            <button
              type='button'
              className='text-sm font-semibold leading-6 text-gray-900'
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            <button
              type='submit'
              className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              disabled={isSubmitSuccessful}
              // onClick={() => navigate(-1)}
            >
              {isSubmitSuccessful ? "Submitted" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PropertyInputForm;
