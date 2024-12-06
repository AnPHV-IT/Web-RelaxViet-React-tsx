// AccountInfo.tsx
import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";

const AccountInfo = () => {
    // Dữ liệu mặc định
    const adminAccount = {
        name: "Admin User",
        email: "admin@example.com",
        role: "Administrator",
    };

    return (
        <Card
            sx={{
                maxWidth: 600,
                margin: "0 auto",
                boxShadow: 3,
                borderRadius: 2,
            }}
        >
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Thông tin tài khoản
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1">Tên:</Typography>
                        <Typography variant="body1" color="text.secondary">
                            {adminAccount.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1">Email:</Typography>
                        <Typography variant="body1" color="text.secondary">
                            {adminAccount.email}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1">Vai trò:</Typography>
                        <Typography variant="body1" color="text.secondary">
                            {adminAccount.role}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default AccountInfo;
