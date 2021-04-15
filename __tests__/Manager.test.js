

const Manager = require("../library/manager");
const manage = new Manager("fakeName", '12', "testemail@testdomain.com", "1234");

//NAME
test('Return valid Manager name', () => {
    expect(manage.name).toEqual('fakeName');
    expect(manage.name).not.toBe('');
    expect(manage.name).toEqual(expect.any(String));
});
test('Return Manager name', () => {
    expect(manage.getName()).toBe('fakeName');
});

// ID
test('Return Manager ID', () => {
    expect(manage.id).toEqual(expect.any(String));
    expect(manage.id).toEqual('12');
});
test('Return inputted ID for Manager', () => {
    expect(manage.getId()).toBe('12');
});

// EMAIL
test('Return valid Manager email', () => {
    expect(manage.email).toEqual("testemail@testdomain.com");
    expect(manage.email).toEqual(expect.any(String));
    expect(manage.email).toContain('@');
});

test('Return inputted Manager email', () => {
    expect(manage.getEmail()).toBe('testemail@testdomain.com');
});

// NUMBER
test('Should return proper Manager school', () => {
    expect(manage.officeNum).toEqual(expect.any(String));
    expect(manage.officeNum).toEqual("1234");
});

test('Return Manager inputted office Number', () => {
    expect(manage.getOfficeNum()).toBe('1234');
});

//ROLE
test('Return Manager role', () => {
    expect(manage.getRole()).toBe("Manager");
});