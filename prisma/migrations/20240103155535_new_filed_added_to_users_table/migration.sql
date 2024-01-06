-- AlterTable
ALTER TABLE `Users` ADD COLUMN `profile` VARCHAR(191) NOT NULL DEFAULT 'https://i.pinimg.com/564x/0e/99/24/0e9924d27744d32d2530558dd126b94f.jpg',
    ADD COLUMN `username` VARCHAR(191) NOT NULL DEFAULT 'No Name',
    MODIFY `password` VARCHAR(191) NOT NULL DEFAULT 'No Password';
