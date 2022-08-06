import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Progress,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
} from "../Redux/AuthReducer/actionType";
import { useToast } from "@chakra-ui/react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { POST_LOGIN_SUCCESS } from "../Redux/AuthReducer/action";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuth, isLoading } = useSelector((s) => s.AuthReducer);
  const navigate  = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/products";
  if(isAuth){
    return  <Navigate to={comingFrom} replace />
  }
  const handleToast = () => {
    toast({
      title: "Login Success.",
      description: "Thank you for login our website.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const params = {
        email,
        password,
      };
      console.log(isAuth);
      dispatch(loginRequest());
      axios
        .post("https://reqres.in/api/login", params)
        .then((r) => {
          return dispatch(loginSuccess(r.data.token));
        })
        .then(() => handleToast())
        .catch((e) => dispatch(loginFailure()));
    }
    setEmail("");
    setPassword("");
  };

  
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="dark"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4} p="1rem" backgroundColor="dark" boxShadow="md">
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="email address"
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              {isLoading && (
                <Progress color="white" size="xs" isIndeterminate />
              )}
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us? <Link color="teal.500">Sign Up</Link>
      </Box>
    </Flex>
  );
};

export default Login;
