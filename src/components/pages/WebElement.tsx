import { Button } from "../ui/button";


const WebElement = () => {
  return (
    <div className=" web-container ">
      <div >
        <h1 className="web-header p-1.5 text-xl">Web Elements Playground</h1>
        <br />
        {/* Text Box */}
        <section className="text-box">
          <h2 className="text-box-header">Text Box</h2>
          <hr /> <br />
          <input type="text" placeholder="Enter text here" />
        </section>

        {/* Check Box */}
        <section className="check-box">
          <h2 className="check-box-header" >Check Box</h2>
          <hr /> <br />
          <div className="check-box-container ">   
          <label>
            <input type="checkbox" /> Option 1
          </label>
          <label>
            <input type="checkbox" /> Option 2
          </label>
          </div>
        </section>

        {/* Radio Button */}
        <section className="check-box">
          <h2 className="check-box-header">Radio Button</h2>
          <hr /> <br />
          <div className="check-box-container">
          <label>
            <input type="radio" name="radioGroup" /> Option 1
          </label>
          <label>
            <input type="radio" name="radioGroup" /> Option 2
          </label>
          </div>
        </section>

        {/* Web Tables */}
        <section>
          <h2 className="check-box-header">Web Tables</h2>
          <hr /> <br /> 
          <div className="table-container">
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
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2 className="check-box-header">Buttons</h2>
          <hr /> <br />
          <div className="button-container-web">
          <Button>Click Me</Button>
          <Button disabled>Disabled Button</Button>
          </div>
        </section>

        {/* Links */}
        <section>
          <h2 className="check-box-header">Links</h2>
          <hr /> <br />
          <div className="link-container-web">
          <a href="#link1">Link 1</a>
          <a href="#link2">Link 2</a>
          </div>
        </section>

        {/* Broken Links and Images */}
        <section>
          <h2 className="check-box-header">Broken Links and Images</h2>
          <hr /> <br />
          <div className="broken-container">
          <a href="/broken-link">Broken Link</a>
          <img src="/broken-image.jpg" alt="Broken Image" />
          </div>
        </section>

        {/* Upload and Download */}
        <section>
          <h2 className="check-box-header">Upload and Download</h2>
          <hr /> <br />
          <input type="file" />
          <a className="download-web hover:text-blue-700" href="/path/to/download" download>
            Download File
          </a>
        </section>

        {/* Dynamic Properties */}
        <section>
          <h2 className="check-box-header mt-6">Dynamic Properties</h2>
          <hr /> <br />
          <Button id="dynamicButton-1">Dynamic Button</Button>
        </section>
      </div>
    </div>
  );
};

export default WebElement;
