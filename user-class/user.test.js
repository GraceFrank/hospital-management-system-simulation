const User = require("./user");

const dareLawal = new User(
  "Dare Lawal",
  "darelawal@yahoo.com",
  "lawal123hospital"
);

test("that User constructor returns an object", () => {
  expect(typeof dareLawal).toBe("object");
});

describe("the properties corresponds with the prarameters passed", () => {
  test("name property corresponds to name passed", () => {
    expect(dareLawal.name).toBe("Dare Lawal");
  });
  test("name property corresponds to name passed", () => {
    expect(dareLawal.email).toBe("darelawal@yahoo.com");
  });
  test("name property corresponds to name passed", () => {
    expect(dareLawal.password).toBe("lawal123hospital");
  });
});

describe("testing the updateRecord Method of userClass", () => {
  test("that if password is wron object properties are not updated", () => {
    dareLawal.updateRecord("lawal777hospital", {
      name: "Lawal Solomon",
      email: "darelawal@yahoo.com"
    });
    expect(dareLawal.name).toBe("Dare Lawal");
    expect(dareLawal.email).toBe("darelawal@yahoo.com");
  });

  test("that object properties are updated with correct details ", () => {
    dareLawal.updateRecord("lawal123hospital", {
      name: "Lawal Solomon",
      email: "darelawal@yahoo.com"
    });
    expect(dareLawal.name).toBe("Lawal Solomon");
    expect(dareLawal.email).toBe("darelawal@yahoo.com");
  });
});

test("test that users can view their personal details ", () => {
  expect(dareLawal.viewPersonalDetails()).toEqual({
    name: "Lawal Solomon",
    email: "darelawal@yahoo.com",
    password: "lawal123hospital"
  });
});
