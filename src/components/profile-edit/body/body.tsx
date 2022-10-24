import React from "react";
import Button from "components/reusable/button";
import SelectDate from "components/reusable/select-date";
import isValid from "components/reusable/is-valid";

import { Forma, Body, Name, Row, Col, Label, Input, Footer, Group, Image, Img, Upload } from "./styles";

const FormBody: React.FC<any> = (props) => {
    const { values, touched, errors, sfv, isSubmitting } = props;

    return (
        <Forma>
            <Body>
                <Name>General information</Name>

                <Group>
                    <Image>
                        <Img src={values.profilePictureURL} alt="avatar" className="avatar" />
                    </Image>
                    <Upload>
                        <Label className="label">Profile picture</Label>
                        <Input
                            type="text"
                            placeholder="https://"
                            name="profilePictureURL"
                        />
                    </Upload>
                </Group>

                <Row>
                    <Col>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                            id="firstName"
                            type="text"
                            name="firstName"
                            validation={touched.firstName && errors.firstName}
                        />
                    </Col>
                    <Col>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                            id="lastName"
                            type="text"
                            name="lastName"
                            validation={touched.lastName && errors.lastName}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <SelectDate
                            {...props}
                            val={values.dateOfBirth}
                            name="dateOfBirth"
                            sfv={sfv}
                            validation={touched.dateOfBirth && errors.dateOfBirth}
                        />
                    </Col>
                    <Col>
                        <Label htmlFor="salary">Salary</Label>
                        <Input
                            type="number"
                            name="salary"
                            validation={touched.salary && errors.salary}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col {...props} row>
                        <Label htmlFor="about">About</Label>
                        <Input id="about" type="text" name="about" component="textarea" />
                    </Col>
                </Row>
            </Body>

            <Footer>
                <Button
                    color="orange"
                    type="submit"
                    active={isSubmitting}
                    flee={isValid(errors)}
                >
                    Submit
                </Button>
            </Footer>
        </Forma>
    );
};

export default FormBody;
