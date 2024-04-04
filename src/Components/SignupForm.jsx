function SignupForm() {
  const tags =
    "w-full bg-white placeholder:purple-500 bg-opacity-50 m-2 rounded-full border-purple-500 text-purple-500 font-semibold text-xl p-3 border-4 border-transparent hover:border-purple-500 hover:drop-shadow-xl hover:shadow-xl hover:shadow-purple-400 transition-all duration-200 ease-in-out focus:outline-none px-6 focus:border-purple-400 focus:bg-purple-200";
  const btn =
    "text-xl text-white font-bold font-mono rounded-full bg-gradient-to-tr from-fuchsia-400 to-pink-500 p-4 hover:bg-gradient-to-bl m-4 border-4  transition-all duration-200 hover:shadow-lg hover:shadow-pink-700  hover:-translate-y-3";

  return (
    <div className="p-6">
      <div className="flex">
        <input className={tags} placeholder="Firstname" type="text"></input>
        <input className={tags} placeholder="Lastname" type="text"></input>
      </div>
      <div className="flex justify-center">
        <input className={tags} placeholder="Email" type="email"></input>
      </div>
      <div className="flex justify-center">
        <input className={tags} placeholder="Username" type="text"></input>
      </div>
      <div className="flex">
        <input
          className={tags}
          placeholder="Set Password"
          type="password"
        ></input>
        <input
          className={tags}
          placeholder="Re-enter Password"
          type="password"
        ></input>
      </div>
      <div className="flex justify-center">
        <button className={btn}>Create Account</button>
      </div>
    </div>
  );
}

export default SignupForm;
