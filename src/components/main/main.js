import React from 'react';

function main() {
  return (
    <main>
      <form
      onSubmit={e=>{alert("Cadastrado com sucesso")}}
        action="https://api.sheetmonkey.io/form/9Fs8vYEGia6zMaiho1ZL1j"
        method="post"
      >
        <label>
          Seu Nome: <input type="text" name="Nome" required />
        </label>
        <label>
          Ano de Nascimento:{' '}
          <input type="date" name="Data de Nascimento" required />
        </label>
        <label>
          Seu Melhor Email: <input type="email" name="Email" required />
        </label>
        <label>
          Seu Whatsapp/Celular: <input type="phone" name="Celular" required />
        </label>
        <input
          type="hidden"
          name="Data de Inscrição"
          value="x-sheetmonkey-current-date"
        />
          <input type="submit" value="Enviar" />
      </form>
    </main>
  );
}

export default main;
