// Busca por tecnologia

const usuarios = [
  {
    nome: "Carlos",
    tecnologias: ["HTML", "CSS"]
  },
  {
    nome: "Jasmine",
    tecnologias: ["JavaScript", "CSS"]
  },
  {
    nome: "Tuane",
    tecnologias: ["HTML", "Node.js"]
  }
];

function checaSeUsuarioUsaCSS(usuario) {
  return usuario.tecnologias[0] === "CSS" || usuario.tecnologias[1] === "CSS";
}

for ( let i = 0; i < usuarios.length; i++ ) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  }
}