import { MigrationInterface, QueryRunner } from 'typeorm';

export class addUserAndBaseEntities1571399722524 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `DROP TABLE IF EXISTS "user"; CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isActive" boolean NOT NULL DEFAULT true, "IsArchived" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "internalComment" character varying(300), "FirstName" character varying(300) NOT NULL, "MiddleName" character varying(300), "LastName" character varying(300) NOT NULL, "Email" character varying(300) NOT NULL, "Password" character varying(300) NOT NULL, "Age" TIMESTAMP WITH TIME ZONE, "Icon" character varying(300), CONSTRAINT "UQ_b7eee57d84fb7ed872e660197fb" UNIQUE ("Email"), CONSTRAINT "UQ_cc070ccb9a44c11277734b88911" UNIQUE ("Password"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user"`, undefined);
    }
}
