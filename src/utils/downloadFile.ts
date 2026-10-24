export const downloadFile = (fileUrl: string, filename: string) => {
  fetch(fileUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao obter o arquivo');
      }
      return response.blob(); // Converte a resposta em um Blob
    })
    .then((blob) => {
      const url = window.URL.createObjectURL(blob); // Cria uma URL temporária para o Blob
      const link = document.createElement('a');
      link.href = url;
      link.download = filename; // Define o nome do arquivo para o download
      document.body.appendChild(link);
      link.click(); // Simula o clique no link
      document.body.removeChild(link); // Remove o link temporário
      window.URL.revokeObjectURL(url); // Revoga a URL temporária
    })
    .catch((error) => ({ ok: false, error }));
};
