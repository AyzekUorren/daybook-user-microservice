import { MigrationInterface, QueryRunner } from 'typeorm';

export class changeUppercaseFieldNamesToCamelCase1571402195960
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `ALTER TABLE "user" DROP COLUMN "FirstName"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" DROP COLUMN "MiddleName"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" DROP COLUMN "LastName"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" DROP CONSTRAINT "UQ_b7eee57d84fb7ed872e660197fb"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" DROP COLUMN "Email"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" DROP COLUMN "Password"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" DROP COLUMN "Age"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" DROP COLUMN "Icon"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "firstName" character varying(300) NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "middleName" character varying(300)`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "lastName" character varying(300) NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "email" character varying(300) NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "password" character varying(300) NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "age" TIMESTAMP WITH TIME ZONE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "icon" character varying(300)`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `ALTER TABLE "user" DROP COLUMN "icon"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" DROP COLUMN "age"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" DROP COLUMN "password"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" DROP COLUMN "email"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" DROP COLUMN "lastName"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" DROP COLUMN "middleName"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" DROP COLUMN "firstName"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "Icon" character varying(300)`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "Age" TIMESTAMP WITH TIME ZONE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "Password" character varying(300) NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "Email" character varying(300) NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD CONSTRAINT "UQ_b7eee57d84fb7ed872e660197fb" UNIQUE ("Email")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "LastName" character varying(300) NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "MiddleName" character varying(300)`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "FirstName" character varying(300) NOT NULL`,
            undefined,
        );
    }
}
