"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const axios_1 = require("axios");
const prisma = new client_1.PrismaClient();
async function main() {
    const reqOptions = {
        url: 'https://unpkg.com/codes-postaux@3.6.0/codes-postaux.json',
        method: 'GET',
    };
    const res = await axios_1.default.request(reqOptions);
    await prisma.city.createMany({ data: res.data, skipDuplicates: true });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map