import { Button } from "./ui/button";

const Forms = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 p-4 sm:p-6 lg:p-8">
      <form className="w-full max-w-2xl bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 sm:p-8 lg:p-10 space-y-6 text-zinc-800 dark:text-zinc-200">
        <h2 className="text-3xl font-bold text-primary dark:text-primary-dark text-center mb-4">Practice Form</h2>
        <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 text-center mb-6 underline dark:underline">Student Registration Form</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1">First Name:</label>
            <input type="text" id="firstName" name="firstName" className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Last Name:</label>
            <input type="text" id="lastName" name="lastName" className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100" />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Email:</label>
          <input type="email" id="email" name="email" placeholder="name@example.com" className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Gender</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
              <input type="radio" id="male" name="gender" value="male" className="accent-primary" /> Male
            </label>
            <label className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
              <input type="radio" id="female" name="gender" value="female" className="accent-primary" /> Female
            </label>
            <label className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
              <input type="radio" id="other" name="gender" value="other" className="accent-primary" /> Other
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="mobile" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Mobile (10 Digits)</label>
            <input type="text" id="mobile" name="mobile" className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100" />
          </div>
          <div>
            <label htmlFor="dob" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Date of Birth</label>
            <input type="date" id="dob" name="dob" className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100" />
          </div>
        </div>

        <div>
          <label htmlFor="subjects" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Subjects</label>
          <input type="text" id="subjects" name="subjects" className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Hobbies</label>
          <div className="flex gap-6 flex-wrap">
            <label className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
              <input type="checkbox" id="sports" name="hobbies" value="sports" className="accent-primary" /> Sports
            </label>
            <label className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
              <input type="checkbox" id="reading" name="hobbies" value="reading" className="accent-primary" /> Reading
            </label>
            <label className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
              <input type="checkbox" id="music" name="hobbies" value="music" className="accent-primary" /> Music
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="picture" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Picture</label>
          <input type="file" id="picture" name="picture" className="block w-full text-sm text-zinc-700 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark bg-white dark:bg-zinc-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark dark:file:bg-primary-dark dark:hover:file:bg-primary focus:file:outline-none focus:file:ring-2 focus:file:ring-primary dark:focus:file:ring-primary-dark" />
        </div>

        <div>
          <label htmlFor="currentAddress" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Current Address</label>
          <textarea id="currentAddress" name="currentAddress" className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 resize-vertical min-h-[80px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="state" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1">State</label>
            <select id="state" name="state" className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100">
              <option value="">Select State</option>
              {/* Add state options here */}
            </select>
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1">City</label>
            <select id="city" name="city" className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100">
              <option value="">Select City</option>
              {/* Add city options here */}
            </select>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button type="submit" className="w-full md:w-1/2">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
