import './App.css'

function App() {

  const openImage = () => {
    window.open("https://github.com/Prophetia-Melitensis", "_blank");
  }

  return (
    <>
      <div>
        <div className="header">
          <img src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' alt='github logo' className="github-logo" onClick={openImage}/>
          <h1 className="heading">Prophetia Melitensis</h1>
          <p className="desc">Prophecies of Malta</p>
        </div>

        
      </div>
    </>
  )
}

export default App
