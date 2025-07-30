import { useState } from "react";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ProfileForm = () => {
  const [startDate, setStartDate] = useState(null);

  return (
    <>
      <div className="flex h-screen overflow-auto">
        <div className="flex w-full items-center justify-center bg-base-100 text-base-content overflow-auto">
          <div className="card flex w-full h-full lg:h-150 lg:w-250 items-center bg-base-300 p-15 text-center">
            <div className="flex justify-between w-full">
              <button className="btn bg-error">
                <GrFormPreviousLink />
                Prev
              </button>
              <div className="hidden sm:flex">
                <ul className="steps">
                  <li className="step step-primary">Personal Information</li>
                  <li className="step step-primary">Educational Background</li>
                  <li className="step step-primary">OCC Information</li>
                </ul>
              </div>

              <button className="btn bg-success">
                Next <GrFormNextLink />
              </button>
            </div>

            <div className="flex w-full p-5 flex-col">
              <h3 className="mb-6 mt-6">PERSONAL INFORMATION</h3>

              <div className="flex flex-wrap gap-5 text-left ">
                <fieldset className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%]">
                  <legend className="text-sm">Last Name</legend>
                  <input
                    type="text"
                    className="input w-full input-sm focus:ring-0 focus:outline-none uppercase placeholder:normal-case"
                    placeholder="Type here"
                  />
                </fieldset>

                <fieldset className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%]">
                  <legend className="text-sm">First Name</legend>
                  <input
                    type="text"
                    className="input w-full input-sm focus:ring-0 focus:outline-none uppercase placeholder:normal-case"
                    placeholder="Type here"
                  />
                </fieldset>

                <fieldset className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%]">
                  <legend className="text-sm">Middle Name</legend>
                  <input
                    type="text"
                    className="input w-full input-sm focus:ring-0 focus:outline-none uppercase placeholder:normal-case"
                    placeholder="Type here"
                  />
                </fieldset>

                <fieldset className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%]">
                  <legend className="text-sm">Suffix</legend>
                  <input
                    type="text"
                    className="input w-full input-sm focus:ring-0 focus:outline-none uppercase placeholder:normal-case"
                    placeholder="e.g. Jr, Sr"
                  />
                </fieldset>

                <fieldset className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%]">
                  <legend className="text-sm mb-1">Sex</legend>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="sex"
                        value="male"
                        className="radio radio-xs"
                        defaultChecked
                      />
                      <span>Male</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="sex"
                        value="female"
                        className="radio radio-xs"
                      />
                      <span>Female</span>
                    </label>
                  </div>
                </fieldset>

                <fieldset className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%]">
                  <legend className="text-sm">Civil Status</legend>
                  <select className="select select-sm w-full focus:ring-0 focus:outline-none">
                    <option>Single</option>
                    <option>Married</option>
                    <option>Widowed</option>
                    <option>Separated</option>
                  </select>
                </fieldset>

                <fieldset className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%]">
                  <legend className="text-sm">Birth Date</legend>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="yyyy-MM-dd"
                    showYearDropdown
                    showMonthDropdown
                    dropdownMode="select"
                    placeholderText="Select date"
                    className="input input-sm w-full focus:ring-0 focus:outline-none"
                    onKeyDown={(e) => e.preventDefault()} // Prevent typing
                  />
                </fieldset>

                <fieldset className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%]">
                  <legend className="text-sm">Phone Number</legend>
                  <input
                    type="text"
                    className="input w-full input-sm focus:ring-0 focus:outline-none placeholder:normal-case"
                    placeholder="09XXXXXXXXX"
                  />
                </fieldset>

                <fieldset className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%]">
                  <legend className="text-sm">Place of Birth</legend>
                  <input
                    type="text"
                    className="input w-full input-sm focus:ring-0 focus:outline-none placeholder:normal-case"
                    placeholder="09XXXXXXXXX"
                  />
                </fieldset>

                <fieldset className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%]">
                  <legend className="text-sm">Home Address</legend>
                  <input
                    type="text"
                    className="input w-full input-sm focus:ring-0 focus:outline-none placeholder:normal-case"
                    placeholder="09XXXXXXXXX"
                  />
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
