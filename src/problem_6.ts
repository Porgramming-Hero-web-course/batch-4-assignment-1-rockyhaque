interface Profile {
  name: string;
  age: number;
  email: string;
}

function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
  return { ...profile, ...updates };
}

// const myProfile = {
//   name: "Rocky",
//   age: 23,
//   email: "rockyhaque71@gmail.com",
// };

// console.log(updateProfile(myProfile, { name: "Rocky Haque" }));
