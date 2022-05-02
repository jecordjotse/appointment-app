import { useRouter } from "next/router";
const _url =
  "http://appointmentapi-env.eba-p2gbkhf2.us-east-1.elasticbeanstalk.com";

const SignIn = () => {
  const router = useRouter();
  const handleSignIn = async (event) => {
    event.preventDefault();

    event.preventDefault();

    const res = await fetch(`${_url}/users/sign-in`, {
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    //function to validate username
    //function to validate password

    console.log("The results: ", result);

    if (result && result.status === 200) {
      router.push(`/dashboard`);
    }
  };
  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <div>
          <label htmlFor="name">Username : </label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="name">Password : </label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </>
  );
};

export default SignIn;
