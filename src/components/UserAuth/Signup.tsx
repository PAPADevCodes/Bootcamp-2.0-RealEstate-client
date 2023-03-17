import React from "react";
import styled from "styled-components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserLogin } from "../Global/ReduxState";
import { useAppDispatch } from "../Global/Store";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const Signup = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const queryclient = useQueryClient();

  // Setting up the schemas for our form using yup validator
  const Schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")])
      .required("Password do not match"),
  });

  return (
    <>
      <Body>
        {/* <Black></Black> */}

        <Hold>
          <Left>
            <Form>
              <div
                style={{
                  fontSize: "20px",
                  color: "#039EE6",
                  fontWeight: "700",
                  marginBottom: "20px",
                  textAlign: "center",
                }}>
                Sign Up
              </div>

              <Input type="text" placeholder="Full Name" />

              <Input type="text" placeholder="Email" />

              <Input type="number" placeholder="Phone Number" />

              <Input type="password" placeholder="Password" />

              <Input type="text" placeholder="Confirm Password" />

              <Button>Sign Up</Button>

              <Already>Already have an account? Sign in</Already>
            </Form>
          </Left>

          <Right>
            <RightImg src="/images/signup.svg" />
          </Right>
        </Hold>
      </Body>
    </>
  );
};

export default Signup;

// const Body = styled.div``;

// const Body = styled.div``;

const RightImg = styled.img`
  width: 550px;
  color: #039ee6;
`;

const Right = styled.div`
  width: 50%;
`;

// const Body = styled.div``;

const Already = styled.div`
  font-size: 13px;
  cursor: pointer;
  color: #039ee6;
  margin-top: 15px;
  text-align: center;
`;

const Button = styled.button`
  width: 105%;
  height: 40px;
  background: #039ee6;
  color: white;
  border: none;
  border-radius: 7px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  box-shadow: 0 0 2px #039ee6;
  margin-bottom: 20px;
  border-radius: 7px;
  padding-left: 10px;
`;

const Form = styled.form`
  width: 270px;
  height: 450px;
  box-shadow: 0 0 3px #039ee6;
  border-radius: 10px 0 10px 0;
  padding: 30px;
  padding-right: 40px;
  margin-top: 40px;
`;

const Left = styled.form`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hold = styled.form`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// const Black = styled.div`
// width: 100%;
// height: 100%;
// position: absolute;
// background-color: black;
// opacity: 0.8;
// `;

const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-image: url("/images/room4.jpg");
  // background-size: cover;
  // position: relative;
`;
