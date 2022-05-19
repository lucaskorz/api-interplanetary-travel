import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTravel1652922427271 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "travels",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "pilotName",
                        type: "varchar"
                    },
                    {
                        name: "copilotName",
                        type: "varchar"
                    },
                    {
                        name: "starshipName",
                        type: "varchar"
                    },
                    {
                        name: "destinationName",
                        type: "varchar"
                    },
                    {
                        name: "originName",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('travels')
    }
}