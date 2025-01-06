import { Button } from "./ui/button";


const WebElement = () => {
  return (
    <div className="flex items-center  justify-center ">
      <div className="p-10">
        <h1 className=" text-xl">Web Elements Playground</h1>
        <br />
        {/* Text Box */}
        <section>
          <h2>Text Box</h2>
          <input type="text" placeholder="Enter text here" />
        </section>

        {/* Check Box */}
        <section>
          <h2>Check Box</h2>
          <label>
            <input type="checkbox" /> Option 1
          </label>
          <label>
            <input type="checkbox" /> Option 2
          </label>
        </section>

        {/* Radio Button */}
        <section>
          <h2>Radio Button</h2>
          <label>
            <input type="radio" name="radioGroup" /> Option 1
          </label>
          <label>
            <input type="radio" name="radioGroup" /> Option 2
          </label>
        </section>

        {/* Web Tables */}
        <section>
          <h2>Web Tables</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>30</td>
                <td>New York</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>25</td>
                <td>Los Angeles</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Buttons */}
        <section>
          <h2>Buttons</h2>
          <Button>Click Me</Button>
          <Button disabled>Disabled Button</Button>
        </section>

        {/* Links */}
        <section>
          <h2>Links</h2>
          <a href="#link1">Link 1</a>
          <a href="#link2">Link 2</a>
        </section>

        {/* Broken Links and Images */}
        <section>
          <h2>Broken Links and Images</h2>
          <a href="/broken-link">Broken Link</a>
          <img src="/broken-image.jpg" alt="Broken Image" />
        </section>

        {/* Upload and Download */}
        <section>
          <h2>Upload and Download</h2>
          <input type="file" />
          <a href="/path/to/download" download>
            Download File
          </a>
        </section>

        {/* Dynamic Properties */}
        <section>
          <h2>Dynamic Properties</h2>
          <Button id="dynamicButton">Dynamic Button</Button>
        </section>
      </div>
    </div>
  );
};

export default WebElement;
