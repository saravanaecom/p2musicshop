import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

export default function TermsAndConditions() {
    return (
        <>
            <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 }, backgroundColor: '#f4f7fb' }}>
                <Box sx={{
                    padding: 4, pt: 2, marginTop: 2,
                    backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: 3,
                    borderLeft: '4px solid #1976d2',
                }}>

                    <Typography variant="h4" fontSize={28} fontWeight={700} gutterBottom sx={{ color: '#1976d2' }}>
                        Terms and Conditions
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '30px' }}>
                        Last Updated on December 12, 2024
                    </Typography>

                    <Divider sx={{ margin: '20px 0' }} />

                    {/* Introduction */}
                    <Typography variant="h5" fontWeight={700} sx={{ color: '#333' }}>
                        Welcome to <span style={{ color: "#1976d2" }}>P2 Music Shop</span>!
                    </Typography>
                    <Typography variant="body1" fontSize={18} lineHeight={1.6} sx={{ marginBottom: '20px' }}>
                        By accessing or using our website at{" "}
                        <a href="https://www.p2musicshop.com/" target="_blank" rel="noopener noreferrer" 
                           style={{ color: "#1976d2", textDecoration: "none", fontWeight: 600 }}>
                            www.p2musicshop.com
                        </a>
                        , you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
                    </Typography>

                    <Divider sx={{ margin: '20px 0' }} />

                    {/* General Terms Section */}
                    <Typography variant="h6" fontSize={20} fontWeight={600} sx={{ color: '#1976d2' }}>
                        General Terms
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ marginBottom: '20px' }}>
                        These Terms & Conditions govern your use of our website, services, and products. We reserve the right to modify these terms at any time. Updated terms will be posted on this page with the effective date.
                    </Typography>

                    <Divider sx={{ margin: '20px 0' }} />

                    {/* Use of Website Section */}
                    <Typography variant="h6" fontSize={20} fontWeight={600} sx={{ color: '#1976d2' }}>
                        Use of the Website
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ marginBottom: '20px' }}>
                        You must be at least 18 years old or have parental/guardian consent to use this website.
                        You agree not to use the website for any unlawful purpose or in a way that may harm or impair its functionality.
                    </Typography>

                    <Divider sx={{ margin: '20px 0' }} />

                    {/* Orders and Payments Section */}
                    <Typography variant="h6" fontSize={20} fontWeight={600} sx={{ color: '#1976d2' }}>
                        Orders and Payments
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ marginBottom: '20px' }}>
                        All orders are subject to product availability and confirmation of payment. Prices are listed in [Insert Currency] and include applicable taxes unless otherwise stated. We reserve the right to refuse or cancel any order at our discretion.
                    </Typography>

                    <Divider sx={{ margin: '20px 0' }} />

                    {/* Shipping and Delivery Section */}
                    <Typography variant="h6" fontSize={20} fontWeight={600} sx={{ color: '#1976d2' }}>
                        Shipping and Delivery
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ marginBottom: '20px' }}>
                        We aim to process and ship your orders promptly. Delivery times may vary depending on your location. Shipping fees and policies are detailed during the checkout process.
                    </Typography>

                    <Divider sx={{ margin: '20px 0' }} />

                    {/* Returns and Refunds Section */}
                    <Typography variant="h6" fontSize={20} fontWeight={600} sx={{ color: '#1976d2' }}>
                        Returns and Refunds
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ marginBottom: '20px' }}>
                        Please refer to our Returns & Refunds Policy for details on how to return items and request refunds. Items must be returned in their original condition with proof of purchase.
                    </Typography>

                    <Divider sx={{ margin: '20px 0' }} />

                    {/* Intellectual Property Section */}
                    <Typography variant="h6" fontSize={20} fontWeight={600} sx={{ color: '#1976d2' }}>
                        Intellectual Property
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ marginBottom: '20px' }}>
                        All content on this website, including text, images, logos, and product descriptions, is owned by P2 Music Shop or licensed to us. You may not copy, distribute, or reproduce any content without prior written permission.
                    </Typography>

                    <Divider sx={{ margin: '20px 0' }} />

                    {/* Limitation of Liability Section */}
                    <Typography variant="h6" fontSize={20} fontWeight={600} sx={{ color: '#1976d2' }}>
                        Limitation of Liability
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ marginBottom: '20px' }}>
                        P2 Music Shop shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our liability is limited to the purchase price of the product.
                    </Typography>

                    <Divider sx={{ margin: '20px 0' }} />

                    {/* Contact Us Section */}
                    <Typography variant="h6" fontSize={20} fontWeight={600} sx={{ color: '#1976d2' }}>
                        Contact Us
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ marginBottom: '20px' }}>
                        If you have any questions about these Terms & Conditions, please contact us at:
                    </Typography>
                    <Typography variant="body1" fontWeight={600} sx={{ marginBottom: '10px' }}>
                        Email: p2musicshop@gmail.com
                    </Typography>
                    <Typography variant="body1" fontWeight={600} sx={{ marginBottom: '10px' }}>
                        Phone: +919787787796
                    </Typography>
                    {/* <Typography variant="body1" fontWeight={600} sx={{ marginBottom: '10px' }}>
                        Address: 13, Ponmeni Narayanan Street, Pethaniapuram 2, Aarapalayam, SS Colony, Madurai-625016
                    </Typography> */}
                </Box>
            </Container>
        </>
    );
}
