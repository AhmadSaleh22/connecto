import Home from './Pages/Home/Home';
import Global from './Styles/global';


const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.";

const data = [
  {
    id: Math.random(),
    title: "#326  Leandro M.",
    text: lorem,
    bgColor: "#F7F7F7"
  },
  {
    id: Math.random(),
    title: "#327  Sam A.",
    text: lorem,
    bgColor: "#F7F7F7"
  }
];

function App() {
  return (
    <>
      <Global />
      <Home boxData={data} />
    </>
  );
}

export default App;
