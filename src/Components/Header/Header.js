import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";

import classes from "./Header.Module.css";
import Categories from "../Data/Category";

const Header = (props) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: props.lightMode ? "#000" : "#fff",
      },
      type: props.lightMode ? "light" : "dark",
    },
  });
  const handleChange = (language) => {
    props.setCategory(language);
    props.setWord("");
  };

  return (
    <div className={classes.header}>
      <span className={classes.title}>
        {props.word ? props.word : "Word Hunt"}
      </span>
      <div className={classes.inputs}>
        <ThemeProvider theme={darkTheme}>
          <TextField
            className={classes.search}
            label="Search a Word"
            value={props.word}
            onChange={(e) => props.setWord(e.target.value)}
          />
          <TextField
            select
            className={classes.select}
            label="Language"
            value={props.category}
            onChange={(e) => handleChange(e.target.value)}
          >
            {Categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
