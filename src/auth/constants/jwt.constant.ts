console.log(process.env.JWT_TOKEN);
export const jwtConstants = {
  secret: process.env.JWT_TOKEN,
};

//secret: 'no utilizar esta palabra en producción',