


const Engineer = require("../library/engineer");
const eng = new Engineer("fakeName", "1234", "email@gmail.com", 'githubHandle');

//NAME
test('Return valid engineer name', () => {
    expect(eng.name).not.toBe('');
    expect(eng.name).toEqual(expect.any(String));
    expect(eng.name).toEqual('fakeName');
});
test('Return engineer name', () => {
    expect(eng.getName()).toBe(eng.name);
});

// ID
test('Return engineer ID', () => {
    expect(eng.id).toEqual(expect.any(String));
    expect(eng.id).toEqual('1234');
});
test('Return engineer ID', () => {
    expect(eng.getId()).toBe(eng.id);
});

// EMAIL
test('Return valid email for engineer', () => {
    expect(eng.email).toEqual("email@gmail.com");
    expect(eng.email).toEqual(expect.any(String));
    expect(eng.email).toContain('@');
});
test('Return engineer email', () => {
    expect(eng.getEmail()).toBe(eng.email);
});

//GITHUB
test('Return valid github information', () => {
    expect(eng.github).toEqual(expect.any(String));
    expect(eng.github).toEqual("githubHandle");
});
test('Return github handle', () => {
    expect(eng.getGithub()).toBe(eng.github);
});

// ROLE
test('Return engineer role', () => {
    expect(eng.getRole()).toBe("Engineer");
});
