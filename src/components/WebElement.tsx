import { Button } from "./ui/button";

const WebElement = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-zinc-900 dark:text-zinc-100">
      <div className="w-full max-w-3xl bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 md:p-12 space-y-10 dark:text-zinc-100">
        <h1 className="text-2xl md:text-3xl font-bold text-primary dark:text-primary text-center mb-4">Web Elements Playground</h1>
        {/* Text Box */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200 mb-2">Text Box</h2>
          <input type="text" placeholder="Enter text here" className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100" />
        </section>
        {/* Check Box */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200 mb-2">Check Box</h2>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-primary" /> Option 1
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-primary" /> Option 2
            </label>
          </div>
        </section>
        {/* Radio Button */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200 mb-2">Radio Button</h2>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="radioGroup" className="accent-primary" /> Option 1
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="radioGroup" className="accent-primary" /> Option 2
            </label>
          </div>
        </section>
        {/* Web Tables */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200 mb-2">Web Tables</h2>
          <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-700">
            <table className="min-w-full text-sm text-zinc-800 dark:text-zinc-100">
              <thead className="bg-zinc-100 dark:bg-zinc-800">
                <tr>
                  <th className="px-4 py-2 font-semibold">Name</th>
                  <th className="px-4 py-2 font-semibold">Age</th>
                  <th className="px-4 py-2 font-semibold">City</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-zinc-50 dark:even:bg-zinc-800">
                  <td className="px-4 py-2">John Doe</td>
                  <td className="px-4 py-2">30</td>
                  <td className="px-4 py-2">New York</td>
                </tr>
                <tr className="even:bg-zinc-50 dark:even:bg-zinc-800">
                  <td className="px-4 py-2">Jane Smith</td>
                  <td className="px-4 py-2">25</td>
                  <td className="px-4 py-2">Los Angeles</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* Buttons */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200 mb-2">Buttons</h2>
          <div className="flex gap-4 flex-wrap">
            <Button>Click Me</Button>
            <Button disabled>Disabled Button</Button>
          </div>
        </section>
        {/* Links */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200 mb-2">Links</h2>
          <div className="flex gap-6">
            <a href="#link1" className="text-primary dark:text-primary underline dark:underline hover:text-accent dark:hover:text-accent transition-colors">Link 1</a>
            <a href="#link2" className="text-primary dark:text-primary underline dark:underline hover:text-accent dark:hover:text-accent transition-colors">Link 2</a>
          </div>
        </section>
        {/* Broken Links and Images */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200 mb-2">Broken Links and Images</h2>
          <div className="flex gap-6 items-center">
            <a href="/broken-link" className="text-accent dark:text-accent underline dark:underline">Broken Link</a>
            <img src="/broken-image.jpg" alt="Broken Image" className="w-16 h-16 object-cover rounded bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </section>
        {/* Upload and Download */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200 mb-2">Upload and Download</h2>
          <input type="file" className="block mb-2 text-sm text-zinc-700 dark:text-zinc-200" />
          <a className="text-primary dark:text-primary underline dark:underline hover:text-accent dark:hover:text-accent transition-colors" href="/path/to/download" download>
            Download File
          </a>
        </section>
        {/* Dynamic Properties */}
        <section>
          <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200 mb-2 mt-6">Dynamic Properties</h2>
          <Button id="dynamicButton-1">Dynamic Button</Button>
        </section>
      </div>
    </div>
  );
};

export default WebElement;
