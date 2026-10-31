import minimist from 'minimist';
import _ from 'lodash';

const args = minimist(process.argv.slice(2));
console.log('CRA-Shield Test App Running with arguments:', args);

const merged = _.merge({}, { message: 'Sample App for CRA Compliance' });
console.log(merged.message);
