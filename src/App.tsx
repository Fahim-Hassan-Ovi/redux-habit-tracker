import { Provider } from "react-redux";
import store from "./store/store";
import { Container, Typography } from "@mui/material";
import AddHabitForm from "./components/add-habit-form";

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth='md'>
        <Typography component="h1" variant="h2" align='center'>Habit Tracker</Typography>
        <AddHabitForm></AddHabitForm>
      </Container>
    </Provider>
  );
};

export default App;