import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/UI/NavBar";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <NavBar />
            <VStack p={5} gap={5}>
                <Heading>Oops...</Heading>
                <Text>{isRouteErrorResponse(error) ? 'This page does not exist.' : 'Something went wrong'}</Text>
                <Button as={Link} to="/">Go Home Page</Button>
            </VStack>
        </>
    );
};

export default ErrorPage;
