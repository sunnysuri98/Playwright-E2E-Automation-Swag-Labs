
import { faker } from '@faker-js/faker';

export function generateFirstName() {
    return faker.person.firstName();
}

export function generateLastName() {
    return faker.person.lastName();
}

export function generatePostalCode() {
    return faker.location.zipCode();
}

export function generateUserData() {
    return {
        firstName: generateFirstName(),
        lastName: generateLastName(),
        postalCode: generatePostalCode()
    };
}


