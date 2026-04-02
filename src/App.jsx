import './App.css'
import Layout from './components/Layout'
import Header from './components/Header'
import Terminal from './components/Terminal'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ContactModal from './components/ContactModal'
import ContactWidget from './components/ContactWidjet'
import ScrollToTop from './components/ScrollToTop'
import { useState } from 'react'

function App() {
  const [activeCmd, setActiveCmd] = useState(null);
  const runCommand = (cmdText) => {
    setActiveCmd({ text: cmdText, id: Date.now() });
  };

  return (
    <Layout>
      <Header name="Alex" role="DevOps Engineer and Python/Go Developer" />
      <Terminal info="DevOps Engineer with a passion for Go and Python." externalCommand={activeCmd} />
      <Skills onSkillClick={(name) => runCommand(`skills ${name}`)} />
      <Projects onProjectClick={(title) => runCommand(`projects ${title}`)} />
      <ContactWidget />
      <ScrollToTop />
      <ContactModal />
    </Layout>
  )
}

export default App;

