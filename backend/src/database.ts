import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import * as fs from 'fs/promises';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'postgresql://postgres:postgres@0.0.0.0:5432/database',
    },
  },
});

export async function generateData() {
  const users = [];
  for (let i = 0; i < 10; i++) {
    const user = {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      salt: 'salt',
      accountStatus: 'inactive',
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };
    users.push(user);
  }
  const jsonData = JSON.stringify(users, null, 2);
  await fs.writeFile('dummydata.json', jsonData);
}

export async function loadData() {
  const data = await fs.readFile('dummydata.json', 'utf-8');
  const users = JSON.parse(data);
  for (const user of users) {
    const { username, email, password, salt, accountStatus } = user;
    try {
      await prisma.user.create({
        data: {
          username,
          email,
          password,
          salt,
          accountStatus,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export async function displayData() {
  try {
    const users = await prisma.user.findMany();
    console.log(users);
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

export default prisma;
