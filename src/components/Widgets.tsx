import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Autocomplete,
  TextField,
  Slider,
  Tabs,
  Tab,
  Tooltip,
  Menu,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Widgets = () => {
  const [value, setValue] = useState(30);
  const [tabValue, setTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState("");

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSelectChange = (event) => {
    setSelectedMenu(event.target.value);
  };

  return (
    <div className="p-10">
      <h1>Widgets Playground</h1>

      {/* Accordion */}
      <section>
        <h2>Accordion</h2>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Accordion 1
          </AccordionSummary>
          <AccordionDetails>Content for Accordion 1</AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Accordion 2
          </AccordionSummary>
          <AccordionDetails>Content for Accordion 2</AccordionDetails>
        </Accordion>
      </section>

      {/* Auto Complete */}
      <section>
        <h2>Auto Complete</h2>
        <Autocomplete
          options={["Option 1", "Option 2", "Option 3"]}
          renderInput={(params) => (
            <TextField {...params} label="Auto Complete" />
          )}
        />
      </section>

      {/* Date Picker */}
      <section>
        <h2>Date Picker</h2>
        <TextField
          id="date"
          label="Date Picker"
          type="date"
          defaultValue="2024-12-29"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </section>

      {/* Slider */}
      <section>
        <h2>Slider</h2>
        <Slider
          value={value}
          onChange={handleSliderChange}
          aria-labelledby="continuous-slider"
        />
      </section>

      {/* Progress Bar */}
      <section>
        <h2>Progress Bar</h2>
        <CircularProgress variant="determinate" value={value} />
      </section>

      {/* Tabs */}
      <section>
        <h2>Tabs</h2>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>
        {tabValue === 0 && <div>Content for Tab 1</div>}
        {tabValue === 1 && <div>Content for Tab 2</div>}
        {tabValue === 2 && <div>Content for Tab 3</div>}
      </section>

      {/* Tool Tips */}
      <section>
        <h2>Tool Tips</h2>
        <Tooltip title="Tooltip text">
          <button>Hover over me</button>
        </Tooltip>
      </section>

      {/* Menu */}
      <section>
        <h2>Menu</h2>
        <button onClick={handleMenuClick}>Open Menu</button>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Menu Item 1</MenuItem>
          <MenuItem onClick={handleMenuClose}>Menu Item 2</MenuItem>
          <MenuItem onClick={handleMenuClose}>Menu Item 3</MenuItem>
        </Menu>
      </section>

      {/* Select Menu */}
      <section>
        <h2>Select Menu</h2>
        <FormControl>
          <InputLabel id="select-label">Select Menu</InputLabel>
          <Select
            labelId="select-label"
            id="select"
            value={selectedMenu}
            onChange={handleSelectChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Option 1">Option 1</MenuItem>
            <MenuItem value="Option 2">Option 2</MenuItem>
            <MenuItem value="Option 3">Option 3</MenuItem>
          </Select>
        </FormControl>
      </section>
    </div>
  );
};

export default Widgets;
