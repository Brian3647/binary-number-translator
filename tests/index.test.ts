import convert from '../lib/index';

const expect_error = (x: string): void => {
	try {
		expect(convert(x));
		expect(false).toBe(true);
	} catch {
		expect(true).toBe(true);
	}
};

it('Works properly', () => {
	expect_error('');
	expect_error('xxxxxxxx');

	expect(convert('00000001')).toStrictEqual(1);
	expect(convert('00000010')).toStrictEqual(2);
	expect(convert('00000100')).toStrictEqual(4);
	expect(convert('00001000')).toStrictEqual(8);
	expect(convert('00010000')).toStrictEqual(16);
	expect(convert('00100000')).toStrictEqual(32);
	expect(convert('01000000')).toStrictEqual(64);
	expect(convert('10000000')).toStrictEqual(128);

	expect(convert('11111111')).toStrictEqual(255);
});
