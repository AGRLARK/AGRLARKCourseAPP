import React from 'react';
import { ColorModeSwitcher } from './../../ColorModeSwitcher';
import {
  RiDashboardFill,
  RiLogoutBoxFill,
  RiMenu5Fill,
} from 'react-icons/ri';
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = true;
  const logOutHandler = () => {
    console.log("Logout..");
    onClose();
  }
  const user = {
    role: 'admin',
  };
  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        zIndex={"overlay"}
        colorScheme="yellow"
        height={'12'}
        width={'12'}
        rounded={'full'}
        position={'fixed'}
        top={'6'}
        left={'6'}
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>COURSEBUNDLER</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems={'flex-start'}>
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton onClose={onClose} url="/courses" title="Browse All Courses" />
              <LinkButton onClose={onClose} url="/request" title="Request a Course" />
              <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
              <LinkButton onClose={onClose} url="/about" title="About Us" />
            </VStack>

            <HStack
              justifyContent={'space-evenly'}
              position={'absolute'}
              bottom={'2rem'}
              width={'80%'}
            >
              {isAuthenticated ? (
                <>
                  <VStack>
                    <HStack>
                      <Link onClick={onClose} to="/profile">
                        <Button colorScheme={'yellow'}>Profile</Button>
                      </Link>
                      <Button onClick={logOutHandler}>
                        <RiLogoutBoxFill />
                        Logout
                      </Button>
                    </HStack>
                    {user && user.role === 'admin' && (
                      <Link to="/admin/dashboard">
                        <Button colorScheme={"purple"} variant={'ghost'}>
                          <RiDashboardFill width={{ margin: "4px" }} />
                          DASHBOARD
                        </Button>
                      </Link>
                    )}
                  </VStack>
                </>
              ) : (
                <>
                  <Link onClick={onClose} to="/login">
                    <Button colorScheme={'yellow'}>Login</Button>
                  </Link>
                  <p>OR</p>
                  <Link onClick={onClose} to="/register">
                    <Button colorScheme={'yellow'}>Sign Up</Button>
                  </Link>
                </>
              )}
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
