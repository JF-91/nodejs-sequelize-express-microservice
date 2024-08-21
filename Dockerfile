# Dockerfile.node (ubicado en la raíz del proyecto)
FROM node:22

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar el package.json y package-lock.json desde la carpeta src
COPY ./package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código de la aplicación desde la carpeta src
COPY . ./

# Exponer el puerto que utiliza la aplicación
EXPOSE 3000

# Comando para correr la aplicación
CMD ["npm", "start"]
