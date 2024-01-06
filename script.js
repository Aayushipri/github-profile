console.log(
  "<----------------------We are gonna fetch git hub profiles.------------------>"
);
const gitHubProfiles = ["akshaymarch7", "Aayushipri"];

async function getNames(gitHubProfiles) {
  const jobs = [];
  for (let name of gitHubProfiles) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      (successResponse) => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      (failureResponse) => {
        return null;
      }
    );
    jobs.push(job);
  }
  let results = await Promise.all(jobs);
  return results;
}

console.log(getNames(gitHubProfiles).then((res) => console.log(res)));
