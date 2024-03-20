interface UserName {
  name: string;
}

export function testts(u: UserName) {
  // console.log(u.name2)
  u.name = 'asdf'
}

//const a = 10;

testts({name: 'asdf'})
