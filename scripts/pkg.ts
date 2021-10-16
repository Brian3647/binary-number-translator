import fs from 'fs';
import { join } from 'path';

const read = (...paths: string[]): string => {
	return fs.readFileSync(join(__dirname, '..', ...paths), 'utf8');
};

const write = (contents: string, ...paths: string[]): void =>
	fs.writeFileSync(join(__dirname, '..', ...paths), contents, 'utf8');

const copy = (file: string): void => {
	const contents = read(file);
	const lib = join('dist', file);
	write(contents, lib);
};

const pkg = JSON.parse(read('package.json'));

delete pkg.scripts;
delete pkg.devDependencies;
pkg.publishConfig.directory = '.';

write(JSON.stringify(pkg, null, 2), 'dist', 'package.json');

['README.md', 'LICENSE.txt'].forEach(copy);
