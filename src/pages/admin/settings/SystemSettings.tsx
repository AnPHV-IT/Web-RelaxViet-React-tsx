import React from "react";
import { Box, Switch, Typography, FormControlLabel } from "@mui/material";
import { useTheme } from "../../../context/ThemeContext";
const SystemSettings = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <Box sx={{ maxWidth: 600, margin: "0 auto", padding: 2 }}>
            <Typography variant="h6" gutterBottom>
                Cài đặt hệ thống
            </Typography>

            {/* Chế độ tối */}
            <FormControlLabel
                control={
                    <Switch checked={darkMode} onChange={toggleDarkMode} />
                }
                label="Chế độ tối"
            />
            <Typography variant="body2" color="text.secondary" gutterBottom>
                Kích hoạt chế độ tối cho giao diện người dùng.
            </Typography>
        </Box>
    );
};

export default SystemSettings;
