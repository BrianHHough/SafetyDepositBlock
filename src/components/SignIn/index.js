import React, { useState } from 'react';

import { ErrorBox } from '../Error';

import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormH1v2, FormLabel, FormInput, FormButton, FormButtonMetaMask, Text, HeroH1Gradient} from './SignInElements'
// import { useHistory } from "react-router-dom"
import { Redirect, useLocation } from "react-router-dom";
import { useMoralis } from "react-moralis";

const SignIn = () => {
    // const { authenticate, isAuthenticated, user } = useMoralis();
    // const { logout, isAuthenticating } = useMoralis();
    const { authenticate, isAuthenticated, authError } = useMoralis();
    const { isAuthenticating } = useMoralis();
    // const history = useHistory();

    const {login} = useMoralis();
    // const history = useHistory();
    const {location} = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (!isAuthenticated) {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">SafetyDepositBlock</Icon>
                <FormContent>
                    <Form action="#">
                    <HeroH1Gradient className="H1Gradient">SafetyDepositBlock</HeroH1Gradient>
                        <FormH1>Sign in via web3</FormH1>
                        
                        <FormButtonMetaMask 
                        
                        onClick={() => authenticate()}
                        isLoading={isAuthenticating}
                        >Sign In with MetaMask
                        </FormButtonMetaMask>

                        <FormH1v2>Or use your favorite email:</FormH1v2>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput 
                            type='email' 
                            placeholder="Write your email address"
                            value={email}
                            onChange={(event) => setEmail(event.currentTarget.value)}
                            />
                        
                        <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput 
                            type='password' 
                            placeholder="Choose a secure password"
                            value={password}
                            onChange={(event) => setPassword(event.currentTarget.value)} 
                             />
                       <FormButton 
                       type='submit'
                       onClick={() => login(email, password)}
                       >
                           Sign In</FormButton>
                    <div style={{marginTop: 15}}>
                        {authError && <ErrorBox title="Issue Signing You In" 
                        message={authError.message} />}
                    </div>
                       <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
    }
    if (isAuthenticated) {
    return (
        <Redirect
        to={{
          pathname: "/",
          state: { from: location }
        }}
        />
      );
    }

}

export default SignIn;
