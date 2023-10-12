import { faker, fakerKO } from '@faker-js/faker';

const SEED = 110
faker.seed(SEED)
fakerKO.seed(SEED)

const { 
  state, // 부산, 경북...
  city, // 시/군/구
  street, // 읍/면/동
  streetAddress, // 번지+읍/면/동
  secondaryAddress, // 000호/아파트 000동
} = fakerKO.location;

// export const randomName = fakerKO.person.fullName(); // Rowan Nikolaus
// export const randomName = `${fakerKO.person.lastName()}${fakerKO.person.firstName()}`
// export const randomEmail = faker.internet.email()
// export const randomAddr = `${city()} ${state()} ${street()} ${streetAddress()}`

export const tableData = [...Array(20).keys()].map(_ => (
  {
    // date: '2016-05-03',
    date: faker.date.between({ from: '2023-01-01T00:00:00.000Z', to: '2023-09-30T00:00:00.000Z' }).toISOString().split('T')[0], // '2026-05-16T02:22:53.002Z' -> '2026-05-16'
    name: `${fakerKO.person.lastName()}${fakerKO.person.firstName()}`,
    phone: fakerKO.phone.number(),
    address: `${state()} ${city()} ${street()} ${secondaryAddress()}`,
    sales: faker.number.int(100000),
    rate: faker.number.float({ max: 100, precision: 0.11 }),
    isUp: faker.datatype.boolean(0.7),
  }
))