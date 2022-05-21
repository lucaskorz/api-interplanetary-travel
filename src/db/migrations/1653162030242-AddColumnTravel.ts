import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AddColumnTravel1653162030242 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('travel', new TableColumn({
                name: 'updatedAt',
                type: 'timestamp',
                default: 'now()' 
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('travel', 'updatedAt')
    }
}
