import React from 'react'
import ReactDOM from 'react-dom/client'
import Mirador from 'mirador'

const App = () => {
  React.useEffect(() => {
    Mirador.viewer({
      id: 'mirador',
      windows: [
        { manifestId: 'http://localhost:5173/manifest.json' }
      ],
    })
  }, [])
  return <div id="mirador" style={{height: '100vh'}} />
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)