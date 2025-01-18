const Forms = () => {
  return (
    <div className="form-container ">
      <form className=" gap-5 pb-5 p-10 justify-center">
        <h2 className="form-header text-3xl  justify-center">Practice Form</h2>
        <br />
        <h3 className=" form-h3 ">Student Registration Form</h3>

        <div className="name-container ">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
          />
        </div>

        <div className="name-container">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" />
        </div>

        <div className="name-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@example.com"
          />
        </div>

        <div className="gender-container">
          <label>Gender</label>
          <div className="radio-container">
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>
          </div>
          <div className="radio-container">
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
          </div>
          <div  className="radio-container">
            <input type="radio" id="other" name="gender" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>

        <div>
          <label htmlFor="mobile">Mobile (10 Digits)</label>
          <input type="text" id="mobile" name="mobile" />
        </div>

        <div>
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob" />
        </div>

        <div>
          <label htmlFor="subjects">Subjects</label>
          <input type="text" id="subjects" name="subjects" />
        </div>

        <div className="hobbies-container">
          <label>Hobbies</label>
          <div className="radio-container">
            <input type="checkbox" id="sports" name="hobbies" value="sports" />
            <label htmlFor="sports">Sports</label>
          </div>
          <div className="radio-container">
            <input
              type="checkbox"
              id="reading"
              name="hobbies"
              value="reading"
            />
            <label htmlFor="reading">Reading</label>
          </div>
          <div className="radio-container">
            <input type="checkbox" id="music" name="hobbies" value="music" />
            <label htmlFor="music">Music</label>
          </div>
        </div>

        <div>
          <label htmlFor="picture">Picture</label>
          <input type="file" id="picture" name="picture" />
        </div>

        <div>
          <label htmlFor="currentAddress">Current Address</label>
          <textarea id="currentAddress" name="currentAddress"></textarea>
        </div>

        <div>
          <label htmlFor="state">State and City</label>
          <select id="state" name="state">
            <option value="">Select State</option>
            {/* Add state options here */}
          </select>
          <select id="city" name="city">
            <option value="">Select City</option>
            {/* Add city options here */}
          </select>
        </div>

        <button type="submit" className=" button-form items-center justify-center flex">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
