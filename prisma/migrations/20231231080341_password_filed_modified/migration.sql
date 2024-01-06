-- DropIndex
DROP INDEX `Users_password_key` ON `Users`;

-- AlterTable
ALTER TABLE `Users` MODIFY `password` VARCHAR(191) NOT NULL;
