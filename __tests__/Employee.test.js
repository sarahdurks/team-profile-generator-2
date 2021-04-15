
const Employee = require('../library/employee');
const e = new Employee("fakeName", '12', "testemail@testdomain.com");

// NAME
test('Return valid employee name', () => {
    expect(e.name).not.toBe('');
    expect(e.name).toEqual('fakeName');
    expect(e.name).toEqual(expect.any(String));
});
test('Return entered employee name', () => {
    expect(e.getName()).toBe(e.name);
});

// ID
test('Return employee ID', () => {
    expect(e.id).toEqual(expect.any(String));
    expect(e.id).toEqual('12');
});

test('return entered employee ID', () => {
    expect(e.getId()).toBe(e.id);
});

// EMAIL
test('Return a valid email', () => {
    expect(e.email).toEqual("testemail@testdomain.com");
    expect(e.email).toEqual(expect.any(String));
    expect(e.email).toContain('@');
});
test('Return entered employee email', () => {
    expect(e.getEmail()).toBe(e.email);
});

// ROLE
test('Return employee role', () => {
    expect(e.getRole()).toBe("Employee");

});
