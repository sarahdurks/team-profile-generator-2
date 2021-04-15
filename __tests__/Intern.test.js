

const Intern = require("../library/intern");
const int = new Intern("fakeName", '12', "testemail@testdomain.com", "UC Berkeley");

//NAME
test('Return valid intern name', () => {
    expect(int.name).toEqual('fakeName');
    expect(int.name).not.toBe('');
    expect(int.name).toEqual(expect.any(String));
});
test('Return intern name', () => {
    expect(int.getName()).toBe('fakeName');
});

// ID
test('Return intern ID', () => {
    expect(int.id).toEqual(expect.any(String));
    expect(int.id).toEqual('12');
});
test('Return inputted ID for intern', () => {
    expect(int.getId()).toBe('12');
});

// EMAIL
test('Return valid intern email', () => {
    expect(int.email).toEqual("testemail@testdomain.com");
    expect(int.email).toEqual(expect.any(String));
    expect(int.email).toContain('@');
});
test('Return inputted intern email', () => {
    expect(int.getEmail()).toBe('testemail@testdomain.com');
});

//SCHOOL
test('Should return proper intern school', () => {
    expect(int.school).toEqual(expect.any(String));
    expect(int.school).toEqual("UC Berkeley");
});
test('Return intern inputted school', () => {
    expect(int.getSchool()).toBe('UC Berkeley');
});

//ROLE
test('Return intern role', () => {
expect(int.getRole()).toBe("Intern");
});