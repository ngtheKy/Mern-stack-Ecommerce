import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./footerStyle";

const Footer = () => {
    return (
        <Box>

            <Container>
                <Row>
                    <Column>

                        <Heading>CÔNG TY</Heading>
                        <Heading></Heading>
                        <FooterLink href="#">Giới thiệu về Routine</FooterLink>
                        <FooterLink href="#">Tuyển dụng</FooterLink>
                        <FooterLink href="#">Chăm sóc khác hàng</FooterLink>
                        <FooterLink href='#'>Tin tức</FooterLink>
                        <FooterLink href='#'>Liên hệ</FooterLink>
                    </Column>
                    <Column>
                        <Heading>CHÍNH SÁCH KHÁCH HÀNG</Heading>
                        <FooterLink href="#">CS khách hàng thân thiết</FooterLink>
                        <FooterLink href="#">CS đổi trả</FooterLink>
                        <FooterLink href="#">CS bảo mật</FooterLink>
                        <FooterLink href="#">CS bảo hành</FooterLink>
                    </Column>
                    <Column>
                        <Heading>THÔNG TIN CỬA HÀNG</Heading>
                        <FooterLink href="#">CỬA HÀNG THỨ 29
                            14-16 Quốc Hương, Phường Thảo Điền, Quận 2</FooterLink>
                        <FooterLink href="#">CỬA HÀNG THỨ 28
                            Tầng 2, T-231, Aeon Hà Đông
                            Khu dân cư Hoàng Văn Thụ, Phường Dương Nội, Quận Hà Đông, Hà Nội</FooterLink>

                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>

                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;