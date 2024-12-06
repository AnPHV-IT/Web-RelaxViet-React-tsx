// Settings.tsx
import React, { useState } from "react";
import { Box, Typography, AppBar, Tabs, Tab, Container } from "@mui/material";
import AccountInfo from "./AccountSettings";
import SystemSettings from "./SystemSettings";

const Settings = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    return (
        <Container>
            <Box sx={{ marginTop: 5 }}>
                <Typography variant="h4" gutterBottom>
                    Cài đặt
                </Typography>
                <AppBar position="static" color="default">
                    <Tabs
                        value={selectedTab}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="Thông tin tài khoản" />
                        <Tab label="Cài đặt hệ thống" />
                        <Tab label="Ngôn ngữ" />
                    </Tabs>
                </AppBar>

                <Box sx={{ padding: 3 }}>
                    {selectedTab === 0 && <AccountInfo />}
                    {selectedTab === 1 && <SystemSettings />}
                    {selectedTab === 2 && (
                        <Typography variant="body1">
                            Cài đặt ngôn ngữ của bạn ở đây.
                        </Typography>
                    )}
                </Box>
            </Box>
        </Container>
    );
};

export default Settings;
