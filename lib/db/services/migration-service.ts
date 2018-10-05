import * as util from 'util';
import * as  child_process from 'child_process';
const execP = util.promisify(child_process.exec);

class MigrationService {
    static async runMigrations(){
        const { stdout, stderr } = await execP('npm run migrations');
        console.log('runMigrations.stdout:');
        console.log(stdout);
        console.log('runMigrations.stderr:');
        console.log(stderr);
        console.log('Migrations sucsessfully finished');
        return true;
    }

    static async runSeeders(){
        const { stdout, stderr } = await execP('npm run seeders');
        console.log('runSeeders.stdout:');
        console.log(stdout);
        console.log('runSeeders.stderr:');
        console.log(stderr);
        console.log('runSeeders sucsessfully finished');
        return true;
    }
    
}

export default MigrationService;