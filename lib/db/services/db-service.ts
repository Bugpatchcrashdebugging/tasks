import  db from '../models/db';
import  MigrationService from './migration-service';

class DBService {
    static async initDataBase(){
        try {
            await db.authenticate();
            await db.sync();
            await MigrationService.runMigrations();
            await MigrationService.runSeeders();
        }
        catch (err) {
            // logger.error('DB init ERROR');
            // logger.error(err);
            
        }
    }
} 

export default DBService;