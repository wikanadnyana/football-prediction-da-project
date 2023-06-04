import React from "react";
import {
    Text,
    Button,
    Heading,
    SimpleGrid,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
} from "@chakra-ui/react";

export const Profile = () => {
    return (
        <div>
            <SimpleGrid
                spacing={4}
                templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            >
                <Card>
                    <CardHeader>
                        <Heading size="md"> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>
                            View a summary of all your customers over the last
                            month.
                        </Text>
                    </CardBody>
                    <CardFooter>
                        <Button>View here</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Heading size="md"> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>
                            View a summary of all your customers over the last
                            month.
                        </Text>
                    </CardBody>
                    <CardFooter>
                        <Button>View here</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Heading size="md"> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>
                            View a summary of all your customers over the last
                            month.
                        </Text>
                    </CardBody>
                    <CardFooter>
                        <Button>View here</Button>
                    </CardFooter>
                </Card>
            </SimpleGrid>
        </div>
    );
};
