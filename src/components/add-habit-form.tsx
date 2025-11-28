import { Box, TextField } from "@mui/material";
import { useState } from "react";

const AddHabitForm: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [frequency, setFrequency]= useState<"daily" | "weekly">("daily")
    return <form>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2
        }}>
            <TextField 
            label="Habit Name" 
            value={name}
            onChange={(e)=> setName(e.target.value)}
            placeholder="Enter habit name"
            fullWidth
            />
        </Box>
    </form>
};

export default AddHabitForm;