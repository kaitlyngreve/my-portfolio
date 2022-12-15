import Header from './Header'
import Projects from './Projects'
import Footer from './Footer'
import ContactForm from './ContactForm';
import BlogPosts from './BlogPosts';

function App() {

  return (
    <div className="App">
      <Header />
      <BlogPosts />
      {/* <Projects /> */}
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
