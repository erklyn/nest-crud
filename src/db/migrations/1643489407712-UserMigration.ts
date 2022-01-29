import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1643489407712 implements MigrationInterface {
    name = 'UserMigration1643489407712'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`height\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`height\``);
    }

}
