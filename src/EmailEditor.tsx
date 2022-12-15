import React, { useRef } from 'react';
import EmailEditor from 'react-email-editor'

function EmailEditorBoilerplate() {

  const refEditEmail = useRef<EmailEditor>(null)

  const exporHtml = () => {
    refEditEmail.current?.exportHtml(data => {
      const { design, html } = data
      console.log('EXPORT HTML', html)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <EmailEditor ref={refEditEmail} minHeight={500} />
        <button onClick={() => exporHtml()}>Export HTML</button>
      </header>

    </div>
  );
}

export default EmailEditorBoilerplate;
