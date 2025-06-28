/*
  Warnings:

  - Made the column `description` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Product` ADD COLUMN `color` VARCHAR(191) NULL,
    ADD COLUMN `discount` INTEGER NULL,
    ADD COLUMN `material` VARCHAR(191) NULL,
    ADD COLUMN `size` VARCHAR(191) NULL,
    MODIFY `description` TEXT NOT NULL;
