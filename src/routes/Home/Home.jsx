import Notes from "../../components/Notes";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Notes App - The only solution to your cluttered mind.</p>
      <p>
        It uses React as frontend and NodeJs, Express & MongoDB as a backend!
      </p>

      <Notes />
    </div>
  );
}

export default Home;
