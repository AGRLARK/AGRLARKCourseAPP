import React, { useState, useCallback } from "react";
import {
  Container,
  VStack,
  Heading,
  FormLabel,
  Input,
  Box,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();
  const { login } = useAuth();

  const showToast = useCallback(
    (title, description, status) => {
      toast({
        title,
        description,
        status,
        duration: 3000,
        isClosable: true,
      });
    },
    [toast]
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
        const result = await login(email, password);

        if (result.success) {
          showToast("Login Successful", "Welcome back!", "success");
          navigate("/profile");
        } else {
          showToast(
            "Login Failed",
            result.message || "Invalid credentials",
            "error"
          );
        }
      } catch (error) {
        showToast(
          "Login Failed",
          error?.response?.data?.message || "Something went wrong",
          "error"
        );
      } finally {
        setLoading(false);
      }
    },
    [email, password, login, navigate, showToast]
  );

  return (
    <Container h="90vh">
      <VStack h="full" justifyContent="center" spacing={4}>
        <Heading>Welcome to AGRLAKR App</Heading>

        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <Box>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type="email"
              focusBorderColor="yellow.400"
              required
              autoFocus
              aria-label="Email Address"
            />
          </Box>

          <Box>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              type="password"
              focusBorderColor="yellow.400"
              required
              aria-label="Password"
            />
          </Box>

          <Box my={2}>
            <Link to="/forgetpassword">
              <Button fontSize="sm" variant="link">
                Forgot Password?
              </Button>
            </Link>
          </Box>

          <Button
            my={2}
            colorScheme="yellow"
            type="submit"
            isLoading={loading}
            loadingText="Logging in..."
            isDisabled={!email || !password}
          >
            Login
          </Button>

          <Box my={2}>
            New User?{" "}
            <Link to="/register">
              <Button colorScheme="yellow" variant="link">
                Sign Up
              </Button>{" "}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
