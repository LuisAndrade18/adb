import React from 'react';

function main() {
  return (
    <main>
      <form
        onSubmit={(e) => {
          alert('Cadastrado com sucesso');
        }}
        action="https://api.sheetmonkey.io/form/9Fs8vYEGia6zMaiho1ZL1j"
        method="post"
      >
        <label>
          Seu Nome: <input type="text" name="Nome" />
        </label>
        <label>
          Ano de Nascimento: <input type="date" name="Data de Nascimento" />
        </label>
        <label>
          Seu Melhor Email: <input type="email" name="Email" />
        </label>
        <label>
          Seu Whatsapp/Celular: <input type="phone" name="Celular" />
        </label>
        <label>
          Qual a sua porfissão? <input type="text" name="Profissão" />
        </label>
        <label>
          Classe a qual pertence:
          <input
            id="FDL"
            type="radio"
            name="Classe"
            value="Filhos Da Liberdade"
          />
          <label htmlFor="FDL">Filhos Da Liberdade</label>
          <input
            id="FDP"
            type="radio"
            name="Classe"
            value="Filhos Da Liberdade"
          />
          <label htmlFor="FDP">Filhos Da Promeça</label>
          <input
            id="RDP"
            type="radio"
            name="Classe"
            value="Filhos Da Promeça"
          />
          <label htmlFor="RDP">Remanecentes Da Promeça</label>
          <input
            id="FDG"
            type="radio"
            name="Classe"
            value="Remanecentes Da Promeça"
          />
          <label htmlFor="FDG">Filhos Da Graça</label>
          <input
            id="FDR"
            type="radio"
            name="Classe"
            value="Filhos Da Graça"
          />
          <label htmlFor="FDR">Filhos Do Rei</label>
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
