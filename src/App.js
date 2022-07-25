import Header from './Header'
import Projects from './Projects'

function App() {

  const projects = [
    {
      'github': 'https://github.com/kaitlyngreve/phase-5-capstone',
      'image': 'url',
      'description': 'Recipy App'
    },
    {
      'github': 'https://github.com/murphy-mi/phase-2-project',
      'image': 'url',
      'description': 'Memory Game'
    },
    {
      'github': 'https://github.com/kaitlyngreve/Phase-4-Stranger-Project',
      'image': 'url',
      'description': 'Stranger Things Game'
    },
    {
      'github': 'https://github.com/kaitlyngreve/phase-1-project',
      'image': 'url',
      'description': 'Random Activity Generator'
    }
  ]


  return (
    <div className="App">
      <Header />
      <Projects projects={projects} />
    </div>
  );
}

export default App;
